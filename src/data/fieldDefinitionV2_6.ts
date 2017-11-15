import { FieldDefinition } from '../models/fieldDefinition';
import { FieldDefinitionV2_5_1 } from './fieldDefinitionV2_5_1';

export class FieldDefinitionV2_6{ 
    static getFieldDefinition(fieldName:string){
        if(this.fields[fieldName]){
            return this.fields[fieldName];
        }
        return FieldDefinitionV2_5_1.getFieldDefinition(fieldName);
    }

    static fields = {
         //MSH: Message Header
        "MSH-7" : new FieldDefinition("Date/Time of Message", 24),
        "MSH-10" : new FieldDefinition("Message Control Id", 199),
        "MSH-22" : new FieldDefinition("Sending Responsible Organization", 567),
        "MSH-23" : new FieldDefinition("Receiving Responsible Organization", 567),
        "MSH-24" : new FieldDefinition("Sending Network Address", 227),
        "MSH-25" : new FieldDefinition("Receiving Network Address", 227),

        //EVN: Event Type
        "EVN-2": new FieldDefinition("Date/Time of Event", 24),
        "EVN-3": new FieldDefinition("Date/Time Planned Event", 24),
        "EVN-6": new FieldDefinition("Event Occurred", 24),

        //PID: Patient Identification
        "PID-7": new FieldDefinition("Date/Time of Birth", 24),
        "PID-10":new FieldDefinition("Race", 705),
        "PID-15":new FieldDefinition("Primary Language", 705),
        "PID-16":new FieldDefinition("Marital Status", 705),
        "PID-17":new FieldDefinition("Religion", 705),
        "PID-22":new FieldDefinition("Ethnic Group", 705),
        "PID-26":new FieldDefinition("Citizenship", 705),
        "PID-27":new FieldDefinition("Veterans Military Status", 705),
        "PID-28":new FieldDefinition("Nationality Code", 705),
        "PID-29":new FieldDefinition("Patient Death Date and Time", 24),
        "PID-33":new FieldDefinition("Last Update Date/Time", 24),
        "PID-35":new FieldDefinition("Species Code", 705),
        "PID-36":new FieldDefinition("Breed Code", 705),
        "PID-38":new FieldDefinition("Production Class Code", 705),
        "PID-39":new FieldDefinition("Tribal Citizenship", 705),
    }  
}