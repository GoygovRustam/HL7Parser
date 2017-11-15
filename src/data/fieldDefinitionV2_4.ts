import { FieldDefinition } from '../models/fieldDefinition';
import { FieldDefinitionV2_3_1 } from './fieldDefinitionV2_3_1';

export class FieldDefinitionV2_4{ 
    static getFieldDefinition(fieldName:string){
        if(this.fields[fieldName]){
            return this.fields[fieldName];
        }
        return FieldDefinitionV2_3_1.getFieldDefinition(fieldName);
    }

    static fields = {
         //MSH: Message Header
        "MSH-9" : new FieldDefinition("Message Type", 15),
        "MSH-9.0" : new FieldDefinition("Message Type", 15),
        "MSH-9.1" : new FieldDefinition("Trigger Event", 15),
        "MSH-17" : new FieldDefinition("Country Code", 3),
        "MSH-19" : new FieldDefinition("Principal Language of Message", 250),
        "MSH-21" : new FieldDefinition("Conformance Statement ID", 10),

        //EVN: Event Type
        "EVN-5": new FieldDefinition("Operator Id", 250),
        "EVN-7": new FieldDefinition("Event Facility", 180),

        //PID: Patient Identification
        "PID-3": new FieldDefinition("Patient Identifier List", 250),
        "PID-5": new FieldDefinition("Patient Name", 250),
        "PID-6": new FieldDefinition("Mother's Maiden Name", 250),
        "PID-8": new FieldDefinition("Administrative Sex", 1),
        "PID-9": new FieldDefinition("Patient Alias", 250),
        "PID-10":new FieldDefinition("Race", 250),
        "PID-11":new FieldDefinition("Patient Address", 250),
        "PID-13":new FieldDefinition("Phone Number - Home", 250),
        "PID-14":new FieldDefinition("Phone Number - Business", 250),
        "PID-15":new FieldDefinition("Primary Language", 250),
        "PID-16":new FieldDefinition("Marital Status", 250),
        "PID-17":new FieldDefinition("Religion", 250),
        "PID-18":new FieldDefinition("Patient Account Number", 250),
        "PID-21":new FieldDefinition("Mother's Identifier", 250),
        "PID-22":new FieldDefinition("Ethnic Group", 250),
        "PID-23":new FieldDefinition("Birth Place", 250),
        "PID-26":new FieldDefinition("Citizenship", 250),
        "PID-27":new FieldDefinition("Veterans Military Status", 250),
        "PID-28":new FieldDefinition("Nationality", 250),

        "PID-31":new FieldDefinition("Identity Unknown Indicator", 1),
        "PID-32":new FieldDefinition("dentity Reliability Code", 20),
        "PID-33":new FieldDefinition("Last Update Date/Time", 26),
        "PID-34":new FieldDefinition("Last Update Facility", 40),
        "PID-35":new FieldDefinition("Species Code", 250),
        "PID-36":new FieldDefinition("Breed Code", 250),
        "PID-37":new FieldDefinition("Strain", 80),
        "PID-38":new FieldDefinition("Production Class Code", 250),
        
    }

}