import { FieldDefinition } from '../models/fieldDefinition';
import { FieldDefinitionV2_3_1 } from './fieldDefinitionV2_3_1';

export class FieldDefinitionV2_4 extends FieldDefinitionV2_3_1 { 
    "MSH-9" = new FieldDefinition("Message Type", 15);
    "MSH-9.0" = new FieldDefinition("Message Type", 15);
    "MSH-9.1" = new FieldDefinition("Trigger Event", 15);
    "MSH-17" = new FieldDefinition("Country Code", 3);
    "MSH-19" = new FieldDefinition("Principal Language of Message", 250);
    "MSH-21" = new FieldDefinition("Conformance Statement ID", 10);
}