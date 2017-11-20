import { Element } from './element.model';

export class Segment extends Element{
    constructor(name = null, value = null) {
      super(name, value);
      this.children = new Array<Element>();
    }
    children:Element[];
  }