import { FieldDefinition } from '../models/fieldDefinition';
import { FieldDefinitionV2_6 } from './fieldDefinitionV2_6';

export class FieldDefinitionV2_7{ 
    static getFieldDefinition(fieldName:string){
        if(this.fields[fieldName]){
            return this.fields[fieldName];
        }
        return FieldDefinitionV2_6.getFieldDefinition(fieldName);
    }

    static fields = {
         //MSH: Message Header
        "MSH-2" : new FieldDefinition("Encoding Characters", 5),
        "MSH-18" : new FieldDefinition("Character Set", 15),
        "MSH-20" : new FieldDefinition("Alternate Character Set Handling Scheme", 13),

        //EVN: Event Type
        //---

        //PID: Patient Identification
        "PID-40": new FieldDefinition("Patient Telecommunication Information", 9999),
    }  
}