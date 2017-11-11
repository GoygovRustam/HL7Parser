import { Element } from './element.model';

export class Segment extends Element{
    constructor() {
      super();
      this.children = new Array<Element>();
    }
    children:Element[];
  }