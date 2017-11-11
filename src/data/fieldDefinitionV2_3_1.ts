import { FieldDefinition } from '../models/fieldDefinition';
import { FieldDefinitionV2_3 } from './fieldDefinitionV2_3';

export class FieldDefinitionV2_3_1 extends FieldDefinitionV2_3 { 
    "MSH-12" = new FieldDefinition("Version Id", 60);
    "MSH-18" = new FieldDefinition("Character Set", 16);
    "MSH-19" = new FieldDefinition("Principal Language of Message", 60);
    "MSH-20" = new FieldDefinition("Alternate Character Set Handling Scheme", 20);
}