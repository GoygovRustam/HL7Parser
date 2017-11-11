import { FieldDefinition } from './fieldDefinition';

export class Element {
    name:string;
    value:string;
    definition: FieldDefinition;
    children:Element[];
}