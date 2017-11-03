import { Element,Field,Hl7Message,RepeatingField,Segment,SubField } from './models';

export class Hl7Parser {
  public getHl7Model(rawHl7Message:string){
    return this.buildHl7Message(rawHl7Message);
  }

  private buildHl7Message(rawHl7Message:string):Hl7Message{
    let hl7Message:Hl7Message = new Hl7Message();

    hl7Message.children = rawHl7Message.split('\n').map(rawSegment => {
        if(rawSegment.length > 3 && rawSegment.indexOf('|') > 2){
          return this.buildSegment(rawSegment);
        }
      });
    return hl7Message;
  }

  private buildSegment(rawSegment:string):Segment{
    let segment:Segment = new Segment();
    let rawSegmentArr = rawSegment.split('|');
    segment.name = rawSegmentArr[0];
    segment.value = rawSegment;
    let i = 0;
    segment.children = rawSegmentArr.map(rawElement => {
      return this.buildElement(rawElement, segment.name + "-" + i++);
    });
    return segment;
  }

  private buildElement(rawElement:string, elementName:string):Element{
    let field = new Field();
    if (rawElement == "^~\\&" || rawElement == "^~&" || rawElement == "^~\\@" || rawElement == "^~@"){
        field.name = elementName;
        field.value = rawElement;
        return field;
    }else if (rawElement.indexOf("~") !== -1 && rawElement != "^~\\&" && rawElement != "^~\\" && rawElement != "\r" && rawElement !="\n"){	
        let repeatingField = new RepeatingField();
        repeatingField.name = elementName;
        repeatingField.value = rawElement;
        let i = 1;
        repeatingField.children = rawElement.split('~').map(rawRepeatingFieldElement => {
              return this.buildElement(rawRepeatingFieldElement, elementName + "/" + i++);
          })
        return repeatingField;
		}else if(rawElement.indexOf("^") !== -1){
        let subField = new SubField();
        subField.name = elementName;
        subField.value = rawElement;
        let i = 0;
        if(elementName.indexOf("/") !== -1){
          elementName = elementName.slice(0, elementName.indexOf("/"));
        }
        subField.children = rawElement.split('^').map(rawSubField => {
              return this.buildElement(rawSubField,elementName + "." + i++);
            });
        return subField;
    }
   
    field.value = rawElement;
    field.name = elementName;
    return field;
  }
}


