# HL7Parser
HL7 (Health Level Seven) message parser.

Gets raw hl7 message string and returns structured typescript object of the hl7 message.

# Steps:

# 1 - Install library.
npm i health-level-seven-parser

# 2 - Import library into your project.
import { Hl7Message, DefinitionBuilder, Hl7Parser,  Version } from 'health-level-seven-parser';

# 3 - Create instance of the class Hl7Parser.
var hl7Parser = new Hl7Parser();

//Definition Builder will build hl7 fields definition on top of Hl7Message object.
i.e. It will add description "Sending Facility" and length "5" to MSH-4 field (description and length based on Hl7 Version which you need to pass to DefinitionBuilder's constructor)
var definitionBuilder = new DefinitionBuilder(Version.v2_1);

definitionBuilder.addDefinitionToHl7Message(this.hl7Message);

# Methods
#### raw hl7 -> typescript object Hl7Message:
 > `hl7Parser.getHl7Model(rawHl7Message: string)`

#### typescript object Hl7Message -> raw hl7:
> `hl7Parser.getHl7Message(hl7Message:Hl7Message); (to be implemented)`
