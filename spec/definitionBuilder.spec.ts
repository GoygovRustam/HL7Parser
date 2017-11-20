import { DefinitionBuilder } from '../src/definitionBuilder';
import { Hl7Message } from '../src/models/hl7message.model';
import { Element } from '../src/models/element.model';

describe("Definition Builder",  () => {
    let definitionBuilder = new DefinitionBuilder();

    it("Should throw error if no hl7Message is provided", () =>{    
        expect(() => {definitionBuilder.addDefinitionToHl7Message(null)}).toThrow( new Error("hl7Message is not provided or incorrect hl7Message is provided"));
    });

    it("Should add definition to hl7Message", () =>{
        let hl7Message = new Hl7Message();
        hl7Message.children = Array<Element>();
        hl7Message.children[0] = new Element("ACC-1", "11/20/2017");

        definitionBuilder.addDefinitionToHl7Message(hl7Message);

        expect(hl7Message.children[0].definition.description).toBe("Accident Date/Time");
        expect(hl7Message.children[0].definition.length).toBe(24);
    });
})