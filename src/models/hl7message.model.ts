import { Segment } from './segment.model';
import { Element } from './element.model';

export class Hl7Message extends Segment{
    
    /**Returns field element by its name i.e. (MSH-1) */
    getElementByName(fieldName:string):Element{
        let segment = this.findSegmentByName(fieldName, this.children); //Find segment to not iterate over every field in wrong segment

        if(!segment) return;

        let el = this.findElementByName(fieldName, segment.children); //find element on the segment's children

        return el;
    }

   private findElementByName(fieldName:string, children:Segment[]){
        if(!children) return;

        for(var i = 0; i < children.length; i++){
            let name = children[i].name;
            if(fieldName == name) return children[i];

            let el =  this.findElementByName(fieldName, children[i].children);
            if(el){
                return el;
            }
        }
        
    }

    private findSegmentByName(fieldName, children:Segment[]):Segment{
        if(!this.children) return;
        for(var i = 0; i < children.length; i++){
            
            if(fieldName.includes(children[i].name)){
                return this;
            }
        }

    }
}
