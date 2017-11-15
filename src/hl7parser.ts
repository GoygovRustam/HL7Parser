import { Element } from './models/element.model';
import { Field } from './models/field.model';
import { Hl7Message } from './models/hl7message.model';
import { RepeatingField } from './models/repeating-field.model';
import { Segment } from './models/segment.model';
import { SubField } from './models/sub-field.model';

export class Hl7Parser {
  public getHl7Model(rawHl7Message:string){
    return this.buildHl7Message(rawHl7Message);
  }

  public getRawHl7Message(hl7Message:Hl7Message){
    //TODO
  }

  private buildHl7Message(rawHl7Message:string):Hl7Message{
    let hl7Message:Hl7Message = new Hl7Message();

    hl7Message.children = rawHl7Message.split('\n').map(rawSegment => {
        if(rawSegment.length > 3 && rawSegment.indexOf('|') > 2){
          return this.buildSegment(rawSegment);
        }
      });
    return hl7Message;
  }

  private buildSegment(rawSegment:string):Segment{
    let segment:Segment = new Segment();
    let rawSegmentArr = rawSegment.split('|');
    segment.name = rawSegmentArr[0];
    segment.value = rawSegment;
    let i = 0;
    segment.children = rawSegmentArr.map(rawElement => {
      //If element is special then skip one number
      if (rawElement == "^~\\&" || rawElement == "^~&" || rawElement == "^~\\@" || rawElement == "^~@"){
        i++;
      } 
      return  this.buildElement(rawElement, segment.name + "-" + i++);
    });
    return segment;
  }

  private buildElement(rawElement:string, elementName:string){
    let field = new Field();
    if (rawElement == "^~\\&" || rawElement == "^~&" || rawElement == "^~\\@" || rawElement == "^~@"){
        field.name = elementName;
        field.value = rawElement;
        return field;
    }else if (rawElement.indexOf("~") !== -1 && rawElement != "^~\\&" && rawElement != "^~\\" && rawElement != "\r" && rawElement !="\n"){	
        let repeatingField = new RepeatingField();
        repeatingField.name = elementName;
        repeatingField.value = rawElement;
        let i = 1;
        repeatingField.children = rawElement.split('~').map(rawRepeatingFieldElement => {
              return this.buildElement(rawRepeatingFieldElement, elementName + "/" + i++);
          })
        return repeatingField;
		}else if(rawElement.indexOf("^") !== -1){
        let subField = new SubField();
        subField.name = elementName;
        subField.value = rawElement;
        let i = 0;
        if(elementName.indexOf("/") !== -1){
          elementName = elementName.slice(0, elementName.indexOf("/"));
        }
        subField.children = rawElement.split('^').map(rawSubField => {
              return this.buildElement(rawSubField,elementName + "." + i++);
            });
        return subField;
    }
   
    field.value = rawElement;
    field.name = elementName;
    return field;
  }

  //HL7 v2.3 

  //   "PD1-1":new FieldParams("Living Dependency", 2),
  //   "PD1-2":new FieldParams("Living Arrangement", 2),
  //   "PD1-3":new FieldParams("Patient Primary Facility", 90),
  //   "PD1-4":new FieldParams("Patient Primary Care Provider Name & ID No.", 90),
  //   "PD1-5":new FieldParams("Student Indicator", 2),
  //   "PD1-6":new FieldParams("Handicap", 2),
  //   "PD1-7":new FieldParams("Living Will", 2),
  //   "PD1-8":new FieldParams("Organ Donor", 2),
  //   "PD1-9":new FieldParams("Separate Bill", 2),
  //   "PD1-10":new FieldParams("Duplicate Patient", 2),
  //   "PD1-11":new FieldParams("Publicity Indicator", 1),
  //   "PD1-12":new FieldParams("Protection Indicator", 1),

  //   "NK1-1":new FieldParams("Set ID - Next of Kin", 4),
  //   "NK1-2":new FieldParams("NK Name", 48),
  //   "NK1-3":new FieldParams("Relationship", 60),
  //   "NK1-4":new FieldParams("Address", 106),
  //   "NK1-5":new FieldParams("Phone Number", 40),
  //   "NK1-6":new FieldParams("Business Phone Number", 40),
  //   "NK1-7":new FieldParams("Contact Role", 60),
  //   "NK1-8":new FieldParams("Start Date", 8),
  //   "NK1-9":new FieldParams("End Date", 8),
  //   "NK1-10":new FieldParams("Next of Kin/Associated Parties Job Title", 60),
  //   "NK1-11":new FieldParams("Next of Kin Job/Associated Parties Code/Class", 20),
  //   "NK1-12":new FieldParams("Next of Kin/Associated Parties Employee Number", 20),
  //   "NK1-13":new FieldParams("Organization Name", 60),
  //   "NK1-14":new FieldParams("Marital Status", 1),
  //   "NK1-15":new FieldParams("Sex", 1),
  //   "NK1-16":new FieldParams("Date of Birth", 26),
  //   "NK1-17":new FieldParams("Living Dependency", 2),
  //   "NK1-18":new FieldParams("Ambulatory Status", 2),
  //   "NK1-19":new FieldParams("Citizenship", 4),
  //   "NK1-20":new FieldParams("Primary Language", 60),
  //   "NK1-21":new FieldParams("Living Arrangement", 2),
  //   "NK1-22":new FieldParams("Publicity Indicator", 1),
  //   "NK1-23":new FieldParams("Protection Indicator", 1),
  //   "NK1-24":new FieldParams("Student Indicator", 2),
  //   "NK1-25":new FieldParams("Religion", 3),
  //   "NK1-26":new FieldParams("Mother s Maiden Name", 48),
  //   "NK1-27":new FieldParams("Nationality Code", 80),
  //   "NK1-28":new FieldParams("Ethnic Group", 1),
  //   "NK1-29":new FieldParams("Contact Reason", 2),
  //   "NK1-30":new FieldParams("Contact Person's Name", 48),
  //   "NK1-31":new FieldParams("Contact Person s Telephone Number", 40),
  //   "NK1-32":new FieldParams("Contact Person s Address", 106),
  //   "NK1-33":new FieldParams("Associated Party s Identifiers", 32),
  //   "NK1-34":new FieldParams("Job Status", 2),
  //   "NK1-35":new FieldParams("Race", 1),
  //   "NK1-36":new FieldParams("Handicap", 2),
  //   "NK1-37":new FieldParams("Contact Person Social Security Number", 16),

  //   "PV1-1":new FieldParams("Patient Visit", 4),
  //   "PV1-2":new FieldParams("Patient Class", 1),
  //   "PV1-3":new FieldParams("Assigned Patient Location", 12),
  //   "PV1-4":new FieldParams("Admission Type", 2),
  //   "PV1-5":new FieldParams("Preadmit Number", 20),
  //   "PV1-6":new FieldParams("Prior Patient Location", 12),
  //   "PV1-7":new FieldParams("Attending Doctor", 60),
  //   "PV1-8":new FieldParams("Referring Doctor", 60),
  //   "PV1-9":new FieldParams("Consulting Doctor", 60),
  //   "PV1-10":new FieldParams("Hospital Service", 3),
  //   "PV1-11":new FieldParams("Temporary Location", 12),
  //   "PV1-12":new FieldParams("Preadmit Test Indicator", 2),
  //   "PV1-13":new FieldParams("Readmission Indicator", 2),
  //   "PV1-14":new FieldParams("Admit Source", 3),
  //   "PV1-15":new FieldParams("Ambulatory Status", 2),
  //   "PV1-16":new FieldParams("VIP Indicator", 2),
  //   "PV1-17":new FieldParams("Admitting Doctor", 60),
  //   "PV1-18":new FieldParams("Patient Type", 2),
  //   "PV1-19":new FieldParams("Visit Number", 15),
  //   "PV1-20":new FieldParams("Financial Class", 50),
  //   "PV1-21":new FieldParams("Charge Price Indicator", 2),
  //   "PV1-22":new FieldParams("Courtesy Code", 2),
  //   "PV1-23":new FieldParams("Credit Rating", 2),
  //   "PV1-24":new FieldParams("Contract Code", 2),
  //   "PV1-25":new FieldParams("Contract Effective Date", 8),
  //   "PV1-26":new FieldParams("Contract Amount", 12),
  //   "PV1-27":new FieldParams("Contract Period", 3),
  //   "PV1-28":new FieldParams("Interest Code", 2),
  //   "PV1-29":new FieldParams("Transfer to Bad Debt Code", 1),
  //   "PV1-30":new FieldParams("Transfer to Bad Debt Date", 8),
  //   "PV1-31":new FieldParams("Bad Debt Agency Code", 10),
  //   "PV1-32":new FieldParams("Bad Debt Transfer Amount", 12),
  //   "PV1-33":new FieldParams("Bad Debt Recovery Amount", 12),
  //   "PV1-34":new FieldParams("Delete Account Indicator", 1),
  //   "PV1-35":new FieldParams("Delete Account Date", 8),
  //   "PV1-36":new FieldParams("Discharge Disposition", 3),
  //   "PV1-37":new FieldParams("Discharged to Location", 25),
  //   "PV1-38":new FieldParams("Diet Type", 2),
  //   "PV1-39":new FieldParams("Servicing Facility", 2),
  //   "PV1-40":new FieldParams("Bed Status", 1),
  //   "PV1-41":new FieldParams("Account Status", 2),
  //   "PV1-42":new FieldParams("Pending Location", 12),
  //   "PV1-43":new FieldParams("Prior Temporary Location", 12),
  //   "PV1-44":new FieldParams("Admit Date/Time", 26),
  //   "PV1-45":new FieldParams("Discharge Date/Time", 26),
  //   "PV1-46":new FieldParams("Current Patient Balance", 12),
  //   "PV1-47":new FieldParams("Total Charges", 12),
  //   "PV1-48":new FieldParams("Total Adjustments", 12),
  //   "PV1-49":new FieldParams("Total Payments", 12),
  //   "PV1-50":new FieldParams("Alternate Visit ID", 20),
  //   "PV1-51":new FieldParams("Visit Indicator", 1),
  //   "PV1-52":new FieldParams("Other Healthcare Provider", 60),


  //   "PV2-1":new FieldParams("", 0),
  //   "PV2-2":new FieldParams("", 0),
  //   "PV2-3":new FieldParams("", 0),
  //   "PV2-4":new FieldParams("", 0),
  //   "PV2-5":new FieldParams("", 0),
  //   "PV2-6":new FieldParams("", 0),
  //   "PV2-7":new FieldParams("", 0),
  //   "PV2-8":new FieldParams("", 0),
  //   "PV2-9":new FieldParams("", 0),
  //   "PV2-10":new FieldParams("", 0),
  //   "PV2-11":new FieldParams("", 0),
  //   "PV2-12":new FieldParams("", 0),
  //   "PV2-13":new FieldParams("", 0),
  //   "PV2-14":new FieldParams("", 0),
  //   "PV2-15":new FieldParams("", 0),
  //   "PV2-16":new FieldParams("", 0),
  //   "PV2-17":new FieldParams("", 0),
  //   "PV2-18":new FieldParams("", 0),
  //   "PV2-19":new FieldParams("", 0),
  //   "PV2-20":new FieldParams("", 0),
  //   "PV2-21":new FieldParams("", 0),
  //   "PV2-22":new FieldParams("", 0),
  //   "PV2-23":new FieldParams("", 0),
  //   "PV2-24":new FieldParams("", 0),
  //   "PV2-25":new FieldParams("", 0),
  //   "PV2-26":new FieldParams("", 0),
  //   "PV2-27":new FieldParams("", 0),
  //   "PV2-28":new FieldParams("", 0),
  //   "PV2-29":new FieldParams("", 0),
  //   "PV2-30":new FieldParams("", 0),
  //   "PV2-31":new FieldParams("", 0),
  //   "PV2-32":new FieldParams("", 0),
  //   "PV2-33":new FieldParams("", 0),
  //   "PV2-34":new FieldParams("", 0),
  //   "PV2-35":new FieldParams("", 0),
  //   "PV2-36":new FieldParams("", 0),
  //   "PV2-37":new FieldParams("", 0),



  //   "GT1-1":new FieldParams("", 0),
  //   "GT1-2":new FieldParams("", 0),
  //   "GT1-3":new FieldParams("", 0),
  //   "GT1-4":new FieldParams("", 0),
  //   "GT1-5":new FieldParams("", 0),
  //   "GT1-6":new FieldParams("", 0),
  //   "GT1-7":new FieldParams("", 0),
  //   "GT1-8":new FieldParams("", 0),
  //   "GT1-9":new FieldParams("", 0),
  //   "GT1-10":new FieldParams("", 0),
  //   "GT1-11":new FieldParams("", 0),
  //   "GT1-12":new FieldParams("", 0),
  //   "GT1-13":new FieldParams("", 0),
  //   "GT1-14":new FieldParams("", 0),
  //   "GT1-15":new FieldParams("", 0),
  //   "GT1-16":new FieldParams("", 0),
  //   "GT1-17":new FieldParams("", 0),
  //   "GT1-18":new FieldParams("", 0),
  //   "GT1-19":new FieldParams("", 0),
  //   "GT1-20":new FieldParams("", 0),
  //   "GT1-21":new FieldParams("", 0),
  //   "GT1-22":new FieldParams("", 0),
  //   "GT1-23":new FieldParams("", 0),
  //   "GT1-24":new FieldParams("", 0),
  //   "GT1-25":new FieldParams("", 0),
  //   "GT1-26":new FieldParams("", 0),
  //   "GT1-27":new FieldParams("", 0),
  //   "GT1-28":new FieldParams("", 0),
  //   "GT1-29":new FieldParams("", 0),
  //   "GT1-30":new FieldParams("", 0),
  //   "GT1-31":new FieldParams("", 0),
  //   "GT1-32":new FieldParams("", 0),
  //   "GT1-33":new FieldParams("", 0),
  //   "GT1-34":new FieldParams("", 0),
  //   "GT1-35":new FieldParams("", 0),
  //   "GT1-36":new FieldParams("", 0),
  //   "GT1-37":new FieldParams("", 0),
  //   "GT1-38":new FieldParams("", 0),
  //   "GT1-39":new FieldParams("", 0),
  //   "GT1-40":new FieldParams("", 0),
  //   "GT1-41":new FieldParams("", 0),
  //   "GT1-42":new FieldParams("", 0),
  //   "GT1-43":new FieldParams("", 0),
  //   "GT1-44":new FieldParams("", 0),
  //   "GT1-45":new FieldParams("", 0),
  //   "GT1-46":new FieldParams("", 0),
  //   "GT1-47":new FieldParams("", 0),
  //   "GT1-48":new FieldParams("", 0),
  //   "GT1-49":new FieldParams("", 0),
  //   "GT1-50":new FieldParams("", 0),
  //   "GT1-51":new FieldParams("", 0),
  //   "GT1-52":new FieldParams("", 0),
  //   "GT1-53":new FieldParams("", 0),
  //   "GT1-54":new FieldParams("", 0),
  //   "GT1-55":new FieldParams("", 0),


  //   "IN1-1":new FieldParams("", 0),
  //   "IN1-2":new FieldParams("", 0),
  //   "IN1-3":new FieldParams("", 0),
  //   "IN1-4":new FieldParams("", 0),
  //   "IN1-5":new FieldParams("", 0),
  //   "IN1-6":new FieldParams("", 0),
  //   "IN1-7":new FieldParams("", 0),
  //   "IN1-8":new FieldParams("", 0),
  //   "IN1-9":new FieldParams("", 0),
  //   "IN1-10":new FieldParams("", 0),
  //   "IN1-11":new FieldParams("", 0),
  //   "IN1-12":new FieldParams("", 0),
  //   "IN1-13":new FieldParams("", 0),
  //   "IN1-14":new FieldParams("", 0),
  //   "IN1-15":new FieldParams("", 0),
  //   "IN1-16":new FieldParams("", 0),
  //   "IN1-17":new FieldParams("", 0),
  //   "IN1-18":new FieldParams("", 0),
  //   "IN1-19":new FieldParams("", 0),
  //   "IN1-20":new FieldParams("", 0),
  //   "IN1-21":new FieldParams("", 0),
  //   "IN1-22":new FieldParams("", 0),
  //   "IN1-23":new FieldParams("", 0),
  //   "IN1-24":new FieldParams("", 0),
  //   "IN1-25":new FieldParams("", 0),
  //   "IN1-26":new FieldParams("", 0),
  //   "IN1-27":new FieldParams("", 0),
  //   "IN1-28":new FieldParams("", 0),
  //   "IN1-29":new FieldParams("", 0),
  //   "IN1-30":new FieldParams("", 0),
  //   "IN1-31":new FieldParams("", 0),
  //   "IN1-32":new FieldParams("", 0),
  //   "IN1-33":new FieldParams("", 0),
  //   "IN1-34":new FieldParams("", 0),
  //   "IN1-35":new FieldParams("", 0),
  //   "IN1-36":new FieldParams("", 0),
  //   "IN1-37":new FieldParams("", 0),
  //   "IN1-38":new FieldParams("", 0),
  //   "IN1-39":new FieldParams("", 0),
  //   "IN1-40":new FieldParams("", 0),
  //   "IN1-41":new FieldParams("", 0),
  //   "IN1-42":new FieldParams("", 0),
  //   "IN1-43":new FieldParams("", 0),
  //   "IN1-44":new FieldParams("", 0),
  //   "IN1-45":new FieldParams("", 0),
  //   "IN1-46":new FieldParams("", 0),
  //   "IN1-47":new FieldParams("", 0),
  //   "IN1-48":new FieldParams("", 0),
  //   "IN1-49":new FieldParams("", 0),



  //   "IN2-1":new FieldParams("", 0),
  //   "IN2-2":new FieldParams("", 0),
  //   "IN2-3":new FieldParams("", 0),
  //   "IN2-4":new FieldParams("", 0),
  //   "IN2-5":new FieldParams("", 0),
  //   "IN2-6":new FieldParams("", 0),
  //   "IN2-7":new FieldParams("", 0),
  //   "IN2-8":new FieldParams("", 0),
  //   "IN2-9":new FieldParams("", 0),
  //   "IN2-10":new FieldParams("", 0),
  //   "IN2-11":new FieldParams("", 0),
  //   "IN2-12":new FieldParams("", 0),
  //   "IN2-13":new FieldParams("", 0),
  //   "IN2-14":new FieldParams("", 0),
  //   "IN2-15":new FieldParams("", 0),
  //   "IN2-16":new FieldParams("", 0),
  //   "IN2-17":new FieldParams("", 0),
  //   "IN2-18":new FieldParams("", 0),
  //   "IN2-19":new FieldParams("", 0),
  //   "IN2-20":new FieldParams("", 0),
  //   "IN2-21":new FieldParams("", 0),
  //   "IN2-22":new FieldParams("", 0),
  //   "IN2-23":new FieldParams("", 0),
  //   "IN2-24":new FieldParams("", 0),
  //   "IN2-25":new FieldParams("", 0),
  //   "IN2-26":new FieldParams("", 0),
  //   "IN2-27":new FieldParams("", 0),
  //   "IN2-28":new FieldParams("", 0),
  //   "IN2-29":new FieldParams("", 0),
  //   "IN2-30":new FieldParams("", 0),
  //   "IN2-31":new FieldParams("", 0),
  //   "IN2-32":new FieldParams("", 0),
  //   "IN2-33":new FieldParams("", 0),
  //   "IN2-34":new FieldParams("", 0),
  //   "IN2-35":new FieldParams("", 0),
  //   "IN2-36":new FieldParams("", 0),
  //   "IN2-37":new FieldParams("", 0),
  //   "IN2-38":new FieldParams("", 0),
  //   "IN2-39":new FieldParams("", 0),
  //   "IN2-40":new FieldParams("", 0),
  //   "IN2-41":new FieldParams("", 0),
  //   "IN2-42":new FieldParams("", 0),
  //   "IN2-43":new FieldParams("", 0),
  //   "IN2-44":new FieldParams("", 0),
  //   "IN2-45":new FieldParams("", 0),
  //   "IN2-46":new FieldParams("", 0),
  //   "IN2-47":new FieldParams("", 0),
  //   "IN2-48":new FieldParams("", 0),
  //   "IN2-49":new FieldParams("", 0),
  //   "IN2-50":new FieldParams("", 0),
  //   "IN2-51":new FieldParams("", 0),
  //   "IN2-52":new FieldParams("", 0),
  //   "IN2-53":new FieldParams("", 0),
  //   "IN2-54":new FieldParams("", 0),
  //   "IN2-55":new FieldParams("", 0),
  //   "IN2-56":new FieldParams("", 0),
  //   "IN2-57":new FieldParams("", 0),
  //   "IN2-58":new FieldParams("", 0),
  //   "IN2-59":new FieldParams("", 0),
  //   "IN2-60":new FieldParams("", 0),
  //   "IN2-61":new FieldParams("", 0),
  //   "IN2-62":new FieldParams("", 0),
  //   "IN2-63":new FieldParams("", 0),
  //   "IN2-64":new FieldParams("", 0),
  //   "IN2-65":new FieldParams("", 0),
  //   "IN2-66":new FieldParams("", 0),
  //   "IN2-67":new FieldParams("", 0),
  //   "IN2-68":new FieldParams("", 0),
  //   "IN2-69":new FieldParams("", 0),
  //   "IN2-70":new FieldParams("", 0),
  //   "IN2-71":new FieldParams("", 0),
  //   "IN2-72":new FieldParams("", 0),

  //   "IN3-1":new FieldParams("", 0),
  //   "IN3-2":new FieldParams("", 0),
  //   "IN3-3":new FieldParams("", 0),
  //   "IN3-4":new FieldParams("", 0),
  //   "IN3-5":new FieldParams("", 0),
  //   "IN3-6":new FieldParams("", 0),
  //   "IN3-7":new FieldParams("", 0),
  //   "IN3-8":new FieldParams("", 0),
  //   "IN3-9":new FieldParams("", 0),
  //   "IN3-10":new FieldParams("", 0),
  //   "IN3-11":new FieldParams("", 0),
  //   "IN3-12":new FieldParams("", 0),
  //   "IN3-13":new FieldParams("", 0),
  //   "IN3-14":new FieldParams("", 0),
  //   "IN3-15":new FieldParams("", 0),
  //   "IN3-16":new FieldParams("", 0),
  //   "IN3-17":new FieldParams("", 0),
  //   "IN3-18":new FieldParams("", 0),
  //   "IN3-19":new FieldParams("", 0),
  //   "IN3-20":new FieldParams("", 0),
  //   "IN3-21":new FieldParams("", 0),
  //   "IN3-22":new FieldParams("", 0),
  //   "IN3-23":new FieldParams("", 0),
  //   "IN3-24":new FieldParams("", 0),
  //   "IN3-25":new FieldParams("", 0),

  //   "UB1-1":new FieldParams("", 0),
  //   "UB1-2":new FieldParams("", 0),
  //   "UB1-3":new FieldParams("", 0),
  //   "UB1-4":new FieldParams("", 0),
  //   "UB1-5":new FieldParams("", 0),
  //   "UB1-6":new FieldParams("", 0),
  //   "UB1-7":new FieldParams("", 0),
  //   "UB1-8":new FieldParams("", 0),
  //   "UB1-9":new FieldParams("", 0),
  //   "UB1-10":new FieldParams("", 0),
  //   "UB1-11":new FieldParams("", 0),
  //   "UB1-12":new FieldParams("", 0),
  //   "UB1-13":new FieldParams("", 0),
  //   "UB1-14":new FieldParams("", 0),
  //   "UB1-15":new FieldParams("", 0),
  //   "UB1-16":new FieldParams("", 0),
  //   "UB1-17":new FieldParams("", 0),
  //   "UB1-18":new FieldParams("", 0),
  //   "UB1-19":new FieldParams("", 0),
  //   "UB1-20":new FieldParams("", 0),
  //   "UB1-21":new FieldParams("", 0),
  //   "UB1-22":new FieldParams("", 0),
  //   "UB1-23":new FieldParams("", 0),

  //   "UB2-1":new FieldParams("", 0),
  //   "UB2-2":new FieldParams("", 0),
  //   "UB2-3":new FieldParams("", 0),
  //   "UB2-4":new FieldParams("", 0),
  //   "UB2-5":new FieldParams("", 0),
  //   "UB2-6":new FieldParams("", 0),
  //   "UB2-7":new FieldParams("", 0),
  //   "UB2-8":new FieldParams("", 0),
  //   "UB2-9":new FieldParams("", 0),
  //   "UB2-10":new FieldParams("", 0),
  //   "UB2-11":new FieldParams("", 0),
  //   "UB2-12":new FieldParams("", 0),
  //   "UB2-13":new FieldParams("", 0),
  //   "UB2-14":new FieldParams("", 0),
  //   "UB2-15":new FieldParams("", 0),
  //   "UB2-16":new FieldParams("", 0),
  //   "UB2-17":new FieldParams("", 0),
  // };

}


