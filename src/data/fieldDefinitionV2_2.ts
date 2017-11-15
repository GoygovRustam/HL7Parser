import { FieldDefinition } from '../models/fieldDefinition';
import { FieldDefinitionV2_1 } from './fieldDefinitionV2_1';

export class FieldDefinitionV2_2{
    static getFieldDefinition(fieldName:string){
        if(this.fields[fieldName]){
            return this.fields[fieldName];
        }
        return FieldDefinitionV2_1.getFieldDefinition(fieldName);
    }

    static fields = {
        //MSH: Message Header
        "MSH-5" : new FieldDefinition("Receiving Application", 30),
        "MSH-7" : new FieldDefinition("Date/Time of Message", 26),
        "MSH-15" : new FieldDefinition("Accept Acknowledgement Type", 2),
        "MSH-16" : new FieldDefinition("Application Acknowledgement Type", 2),
        "MSH-17" : new FieldDefinition("Country Code", 2),

        //EVN: Event Type
        "EVN-2": new FieldDefinition("Date/Time of Event", 26),
        "EVN-3": new FieldDefinition("Date/Time Planned Event", 26),
        "EVN-5": new FieldDefinition("Operator Id", 5),

         //PID: Patient Identification
        "PID-3": new FieldDefinition("Patient ID (Internal ID)", 20),
        "PID-7": new FieldDefinition("Date of Birth", 26),
        "PID-10":new FieldDefinition("Race", 1),
        "PID-21":new FieldDefinition("Mother's Identifier", 20),
        "PID-22":new FieldDefinition("Ethnic Group", 1),
        "PID-23":new FieldDefinition("Birth Place", 25),
        "PID-24":new FieldDefinition("Multiple Birth Indicator", 2),
        "PID-25":new FieldDefinition("Birth Order", 2),
        "PID-26":new FieldDefinition("Citizenship", 3),
        "PID-27":new FieldDefinition("Veterans Military Status", 60),
    }
   
}