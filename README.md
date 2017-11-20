# HL7Parser
HL7 (Health Level Seven) message parser.

Gets raw hl7 message string and returns structured object of the hl7 message.

# Steps:

# 1 - Install library.
> `npm i health-level-seven-parser`

# 2 - Import library into your project.
> `import { Hl7Message, Hl7Parser } from 'health-level-seven-parser';`

# 3 - Create instance of the class Hl7Parser.
>`var hl7Parser = new Hl7Parser();`

# Ready to use!

# Methods
#### raw hl7 ->  object Hl7Message:
 > `hl7Parser.getHl7Model(rawHl7Message: string, withDefinitions:boolean (optional))`
 "withDefinitions" flag with add definitions to the object, so every field in Hl7 will have definition (description and length for now). 

#### object Hl7Message -> raw hl7:
> `hl7Parser.getHl7Message(hl7Message:Hl7Message); (to be implemented)`
