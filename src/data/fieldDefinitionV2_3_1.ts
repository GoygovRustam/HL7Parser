import { FieldDefinition } from '../models/fieldDefinition';
import { FieldDefinitionV2_3 } from './fieldDefinitionV2_3';

export class FieldDefinitionV2_3_1{ 
    static getFieldDefinition(fieldName:string){
        if(this.fields[fieldName]){
            return this.fields[fieldName];
        }
        return FieldDefinitionV2_3.getFieldDefinition(fieldName);
    }
    
    static fields = {
        //MSH: Message Header
        "MSH-12" : new FieldDefinition("Version Id", 60),
        "MSH-18" : new FieldDefinition("Character Set", 16),
        "MSH-19" : new FieldDefinition("Principal Language of Message", 60),
        "MSH-20" : new FieldDefinition("Alternate Character Set Handling Scheme", 20),

        //EVN: Event Type
        //---

        //PID: Patient Identification
        "PID-2": new FieldDefinition("Patient ID (External ID)", 20),
        "PID-3": new FieldDefinition("Patient Identifier List", 16),
        "PID-4": new FieldDefinition("Alternate Patient ID - PID", 20),
        "PID-7": new FieldDefinition("Date/Time of Birth", 26),
        "PID-10":new FieldDefinition("Race", 80),
        "PID-16":new FieldDefinition("Marital Status", 80),
        "PID-17":new FieldDefinition("Religion", 80),
        "PID-20":new FieldDefinition("Driver's License Number - Patient", 25),
        "PID-22":new FieldDefinition("Ethnic Group", 80),
        "PID-24":new FieldDefinition("Multiple Birth Indicator", 1),
        "PID-26":new FieldDefinition("Citizenship", 80),
    }
}