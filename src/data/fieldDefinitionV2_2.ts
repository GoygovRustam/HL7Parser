import { FieldDefinition } from '../models/fieldDefinition';
import { FieldDefinitionV2_1 } from './fieldDefinitionV2_1';

export class FieldDefinitionV2_2 extends FieldDefinitionV2_1{
    "MSH-5" = new FieldDefinition("Receiving Application", 30);
    "MSH-7" = new FieldDefinition("Date/Time of Message", 26);
    "MSH-15" = new FieldDefinition("Accept Acknowledgement Type", 2);
    "MSH-16" = new FieldDefinition("Application Acknowledgement Type", 2);
    "MSH-17" = new FieldDefinition("Country Code", 2);
}