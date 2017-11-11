import { FieldDefinition } from '../models/fieldDefinition';
import { FieldDefinitionV2_2 } from './fieldDefinitionV2_2';

export class FieldDefinitionV2_3 extends FieldDefinitionV2_2{
    "MSH-3" = new FieldDefinition("Sending Application", 180);
    "MSH-4" = new FieldDefinition("Facility / Sub-Facility", 180);
    "MSH-4.0" = new FieldDefinition("Facility", 180);
    "MSH-4.1" = new FieldDefinition("Sub-Facility", 180);
    "MSH-5" = new FieldDefinition("Receiving Application", 180);
    "MSH-6" = new FieldDefinition("Receiving Facility", 180);
    "MSH-18" = new FieldDefinition("Character Set", 6);
    "MSH-19" = new FieldDefinition("Principal Language of Message", 3);
}