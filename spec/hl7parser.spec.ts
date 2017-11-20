import { Hl7Parser } from '../src/hl7parser';
import { Hl7Message } from '../src/models/hl7message.model';
import { DefinitionBuilder } from '../src/definitionBuilder';

describe("Hl7 Parser",  () => {
    let definitionBuilder = new DefinitionBuilder();
    let hl7Parser = new Hl7Parser(definitionBuilder);

    it("Should throw error if no hl7Message is provided", () =>{  
        expect(() => { hl7Parser.getHl7Model(null) }).toThrow(new Error("Hl7 message was not provided"));
    });

    it("Should parse rawHl7Message into Hl7Message model", () =>{
        let rawHl7Message = 
        `MSH|^~\@|PMS|MSHA^JCMC|||201704071850||ADT^A01|CHPFQP02||2.3
EVN|A01|201704071850|201704070931||ADMNWD
PID|1|test184000|16665^^^SSH^MR||ALI^JAMES^M^^MR^^L||19361121|M|||1200 MAIN LANE^^ELIZABETHTON^TN^37643^^^^019||(411)123-4567^PRN^^^^411^1234567|||M||accountNumber|411584657
NK1|0001|ANTONY^WATSON^^^^^L|U|107 JIM MORRELL LOOP^^ELIZABETHTON^TN^37643|(423)344-0423^PRN^^^^433^2220620|(433)375-7787^WPN^^^^477^4743322|EMCON||||||||U
NK1|0002|OTHER RETIRED^^^^^^L|||||PTEMP
PV1|1|O||R|test||00877^ALEX^BROD^M|||INT||||HM|||00877^KALLY^MALLY^M|T||M^20170407||||||||||||||||||||||||201705120931||||||test||`;

        let hl7Model = hl7Parser.getHl7Model(rawHl7Message);
        expect(hl7Model.getElementByName("EVN-1").value).toBe("A01");
    });
    
    
})