import { FieldDefinition } from '../models/FieldDefinition';

export class FieldDefinitionV2_1{
    public static getFieldDefinition(fieldName:string){
        if(this.fields[fieldName]){
            return this.fields[fieldName];
        }

    }

    static fields = {
        //MSH: Message Header
        "MSH-1" : new FieldDefinition("Field Separator", 1),
        "MSH-2" : new FieldDefinition("Encoding Characters", 4),
        "MSH-3" : new FieldDefinition("Sending Application", 15),
        "MSH-4" : new FieldDefinition("Facility / Sub-Facility", 20),
        "MSH-4.0" : new FieldDefinition("Facility", 20),
        "MSH-4.1" : new FieldDefinition("Sub-Facility", 20),
        "MSH-5" : new FieldDefinition("Receiving Application", 15),
        "MSH-6" : new FieldDefinition("Receiving Facility", 30),
        "MSH-7" : new FieldDefinition("Date/Time of Message", 19),
        "MSH-8" : new FieldDefinition("Security", 40),
        "MSH-9" : new FieldDefinition("Message Type", 7),
        "MSH-9.0" : new FieldDefinition("Message Type", 7),
        "MSH-9.1" : new FieldDefinition("Trigger Event", 7),
        "MSH-10" : new FieldDefinition("Message Control Id", 20),
        "MSH-11" : new FieldDefinition("Processing Id", 1),
        "MSH-12" : new FieldDefinition("Version Id", 8),
        "MSH-13" : new FieldDefinition("Sequence Number", 15),
        "MSH-14" : new FieldDefinition("Continuation Pointer", 180),

        //EVN: Event Type
        "EVN-1": new FieldDefinition("Event Type Code", 3),
        "EVN-2": new FieldDefinition("Date/Time of Event", 19),
        "EVN-3": new FieldDefinition("Date/Time Planned Event", 19),
        "EVN-4": new FieldDefinition("Event Reason Code", 3),

        //PID: Patient Identification
        "PID-1": new FieldDefinition("Set ID - Patient ID", 4),
        "PID-2": new FieldDefinition("Patient ID (External ID)", 16),
        "PID-3": new FieldDefinition("Patient ID (Internal ID)", 16),
        "PID-4": new FieldDefinition("Alternate Patient ID", 12),
        "PID-5": new FieldDefinition("Patient Name", 48),
        "PID-6": new FieldDefinition("Mother's Maiden Name", 30),
        "PID-7": new FieldDefinition("Date of Birth", 8),
        "PID-8": new FieldDefinition("Sex", 1),
        "PID-9": new FieldDefinition("Patient Alias", 48),
        "PID-10":new FieldDefinition("Ethnic Group", 1),
        "PID-11":new FieldDefinition("Patient Address", 108),
        "PID-12":new FieldDefinition("County Code", 4),
        "PID-13":new FieldDefinition("Phone Number - Home", 40),
        "PID-14":new FieldDefinition("Phone Number - Business", 40),
        "PID-15":new FieldDefinition("Language - Patient", 25),
        "PID-16":new FieldDefinition("Marital Status", 1),
        "PID-17":new FieldDefinition("Religion", 3),
        "PID-18":new FieldDefinition("Patient Account Number", 20),
        "PID-19":new FieldDefinition("SSN Number - Patient", 16),
        "PID-20":new FieldDefinition("Driver's License Number", 25),
    }
    
}