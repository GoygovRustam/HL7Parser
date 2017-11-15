import { FieldDefinition } from '../models/fieldDefinition';
import { FieldDefinitionV2_5 } from './fieldDefinitionV2_5';

export class FieldDefinitionV2_5_1{ 
    static getFieldDefinition(fieldName:string){
        if(this.fields[fieldName]){
            return this.fields[fieldName];
        }
        return FieldDefinitionV2_5.getFieldDefinition(fieldName);
    }

    static fields = {
         //MSH: Message Header
         //---

         //EVN: Event Type
         //--

         //PID: Patient Identification
         //--
         
    }
}