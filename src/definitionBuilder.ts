import { Version } from './models/version';
import { Hl7Message } from './models/hl7message.model';
import { Segment } from './models/segment.model';

import { FieldDefinitions} from './data/fieldDefinitions';

export class DefinitionBuilder{
    /** Adds field definition (Description, length) to every field of the hl7 message*/
    public addDefinitionToHl7Message(hl7Message: Hl7Message){
        if(!hl7Message || !hl7Message.children) throw new Error("hl7Message is not provided or incorrect hl7Message is provided");
        
        this.addDefinition(hl7Message.children)
    }

    private addDefinition(children: Segment[]){
        if(!children) return;
        
        for(var i = 0; i < children.length; i++){
            let hl7FieldName = children[i].name;
            children[i].definition = FieldDefinitions.getFieldDefinition(hl7FieldName);
            this.addDefinition(children[i].children);
        }
    }
}

















