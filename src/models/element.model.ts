import { FieldDefinition } from './fieldDefinition';

export class Element {
    constructor(
        public name:string,
        public value:string
    ) {
    }
    definition: FieldDefinition;
    children:Element[];
}