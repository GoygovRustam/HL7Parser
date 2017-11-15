import { FieldDefinition } from '../models/fieldDefinition';
import { FieldDefinitionV2_2 } from './fieldDefinitionV2_2';

export class FieldDefinitionV2_3{
    static getFieldDefinition(fieldName:string){
        if(this.fields[fieldName]){
            return this.fields[fieldName];
        }
        return FieldDefinitionV2_2.getFieldDefinition(fieldName);
    }

    static fields = {
        //MSH: Message Header
        "MSH-3" : new FieldDefinition("Sending Application", 180),
        "MSH-4" : new FieldDefinition("Facility / Sub-Facility", 180),
        "MSH-4.0" : new FieldDefinition("Facility", 180),
        "MSH-4.1" : new FieldDefinition("Sub-Facility", 180),
        "MSH-5" : new FieldDefinition("Receiving Application", 180),
        "MSH-6" : new FieldDefinition("Receiving Facility", 180),
        "MSH-18" : new FieldDefinition("Character Set", 6),
        "MSH-19" : new FieldDefinition("Principal Language of Message", 3),

        //EVN: Event Type
        "EVN-2": new FieldDefinition("Recorded Date/Time", 26),
        "EVN-5": new FieldDefinition("Operator Id", 60),
        "EVN-6": new FieldDefinition("Event Occurred", 26),
        
        //PID: Patient Identification
        "PID-6": new FieldDefinition("Mother's Maiden Name", 48),
        "PID-15":new FieldDefinition("Primary Language", 60),
        "PID-23":new FieldDefinition("Birth Place", 60),
        "PID-26":new FieldDefinition("Citizenship", 4),

        "PID-28":new FieldDefinition("Nationality Code", 80),
        "PID-29":new FieldDefinition("Patient Death Date and Time", 26),
        "PID-30":new FieldDefinition("Patient Death Indicator", 1),
    }
   
}