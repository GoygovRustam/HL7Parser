import { FieldDefinition } from '../models/fieldDefinition';
import { FieldDefinitionV2_6 } from './fieldDefinitionV2_6';

export class FieldDefinitionV2_7 extends FieldDefinitionV2_6 { 
    "MSH-2" = new FieldDefinition("Encoding Characters", 5);
    "MSH-18" = new FieldDefinition("Character Set", 15);
    "MSH-20" = new FieldDefinition("Alternate Character Set Handling Scheme", 13);
}