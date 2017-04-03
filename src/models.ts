export class Element {
  name:string;
  value:string;
  description:string;
}

export class Segment extends Element{
  constructor() {
    super();
    this.children = new Array<Element>();
  }
  children:Element[];
}

export class Hl7Message extends Segment{
}

export class Field extends Element{
}

export class SubField extends Segment {
}

export class RepeatingField extends Segment {
}


