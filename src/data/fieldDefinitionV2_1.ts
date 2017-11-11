import { FieldDefinition } from '../models/FieldDefinition';

export class FieldDefinitionV2_1{
    "MSH-1" = new FieldDefinition("Field Separator", 1);
    "MSH-2" = new FieldDefinition("Encoding Characters", 4);
    "MSH-3" = new FieldDefinition("Sending Application", 15);
    "MSH-4" = new FieldDefinition("Facility / Sub-Facility", 20);
    "MSH-4.0" = new FieldDefinition("Facility", 20);
    "MSH-4.1" = new FieldDefinition("Sub-Facility", 20);
    "MSH-5" = new FieldDefinition("Receiving Application", 15);
    "MSH-6" = new FieldDefinition("Receiving Facility", 30);
    "MSH-7" = new FieldDefinition("Date/Time of Message", 19);
    "MSH-8" = new FieldDefinition("Security", 40);
    "MSH-9" = new FieldDefinition("Message Type", 7);
    "MSH-9.0" = new FieldDefinition("Message Type", 7);
    "MSH-9.1" = new FieldDefinition("Trigger Event", 7);
    "MSH-10" = new FieldDefinition("Message Control Id", 20);
    "MSH-11" = new FieldDefinition("Processing Id", 1);
    "MSH-12" = new FieldDefinition("Version Id", 8);
    "MSH-13" = new FieldDefinition("Sequence Number", 15);
    "MSH-14" = new FieldDefinition("Continuation Pointer", 180);
}