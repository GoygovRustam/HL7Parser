import { Segment } from './segment.model';

export class RepeatingField extends Segment {
    constructor(name = null, value = null) {
        super(name, value);      
    }
}