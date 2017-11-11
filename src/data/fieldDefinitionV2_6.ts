import { FieldDefinition } from '../models/fieldDefinition';
import { FieldDefinitionV2_5_1 } from './fieldDefinitionV2_5_1';

export class FieldDefinitionV2_6 extends FieldDefinitionV2_5_1 { 
    "MSH-7" = new FieldDefinition("Date/Time of Message", 24);
    "MSH-10" = new FieldDefinition("Message Control Id", 199);
    "MSH-22" = new FieldDefinition("Sending Responsible Organization", 567);
    "MSH-23" = new FieldDefinition("Receiving Responsible Organization", 567);
    "MSH-24" = new FieldDefinition("Sending Network Address", 227);
    "MSH-25" = new FieldDefinition("Receiving Network Address", 227);
}