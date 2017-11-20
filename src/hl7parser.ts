import { Element } from './models/element.model';
import { Field } from './models/field.model';
import { Hl7Message } from './models/hl7message.model';
import { RepeatingField } from './models/repeating-field.model';
import { Segment } from './models/segment.model';
import { SubField } from './models/sub-field.model';
import { DefinitionBuilder } from './definitionBuilder';

export class Hl7Parser {
   /** Builds an Hl7Message model from Raw hl7 string. 
    * 
   "withDefinitions" flag indicates whether to build pure model or with definitions on every hl7 field 
   */
  public getHl7Model(rawHl7Message:string, withDefinitions:boolean = false){
    if(!rawHl7Message) throw new Error("Hl7 message was not provided");

    let definitionbuilder = new DefinitionBuilder();
    if(withDefinitions){
      let hl7Message = this.buildHl7Message(rawHl7Message);

      definitionbuilder.addDefinitionToHl7Message(hl7Message);

      return hl7Message;
    }

    return this.buildHl7Message(rawHl7Message);
  }

  public getRawHl7Message(hl7Message:Hl7Message){
    //TODO
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
    let rawSegmentArr = rawSegment.split('|');
    let segment:Segment = new Segment(rawSegmentArr[0], rawSegment);

    let i = 0;
    segment.children = rawSegmentArr.map(rawElement => {
      //If element is special then skip one number
      if (rawElement == "^~\\&" || rawElement == "^~&" || rawElement == "^~\\@" || rawElement == "^~@"){
        i++;
      } 
      return  this.buildElement(rawElement, segment.name + "-" + i++);
    });
    return segment;
  }

  private buildElement(rawElement:string, elementName:string){
    if (rawElement == "^~\\&" || rawElement == "^~&" || rawElement == "^~\\@" || rawElement == "^~@"){
        return new Field(elementName, rawElement);
    }
    else if (rawElement.indexOf("~") !== -1 && rawElement != "^~\\&" && rawElement != "^~\\" && rawElement != "\r" && rawElement !="\n"){	
        let repeatingField = new RepeatingField(elementName,rawElement);

        let i = 1;
        repeatingField.children = rawElement.split('~').map(rawRepeatingFieldElement => {
              return this.buildElement(rawRepeatingFieldElement, elementName + "/" + i++);
        });
        return repeatingField;
    }
    else if(rawElement.indexOf("^") !== -1){
        let subField = new SubField(elementName, rawElement);

        let i = 0;
        if(elementName.indexOf("/") !== -1){
          elementName = elementName.slice(0, elementName.indexOf("/"));
        }

        subField.children = rawElement.split('^').map(rawSubField => {
              return this.buildElement(rawSubField,elementName + "." + i++);
        });

        return subField;
    }
   
    return new Field(elementName, rawElement);
  }
}


