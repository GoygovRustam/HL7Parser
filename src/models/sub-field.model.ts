import { Segment } from './segment.model';

export class SubField extends Segment {
    constructor(name = null, value = null) {
        super(name, value);      
    }
}