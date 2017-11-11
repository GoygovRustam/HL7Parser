import { FieldDefinition } from '../models/fieldDefinition';
import { FieldDefinitionV2_4 } from './fieldDefinitionV2_4';

export class FieldDefinitionV2_5 extends FieldDefinitionV2_4 { 
    "MSH-3" = new FieldDefinition("Sending Application", 227);
    "MSH-4" = new FieldDefinition("Facility / Sub-Facility", 227);
    "MSH-4.0" = new FieldDefinition("Facility", 227);
    "MSH-4.1" = new FieldDefinition("Sub-Facility", 227);
    "MSH-5" = new FieldDefinition("Receiving Application", 227);
    "MSH-6" = new FieldDefinition("Receiving Facility", 227);
    "MSH-21" = new FieldDefinition("Message Profile Identifier", 427);
}