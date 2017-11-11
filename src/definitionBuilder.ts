import { Version } from './models/version';
import { Hl7Message } from './models/hl7message.model';
import { Segment } from './models/segment.model';

import { FieldDefinitionV2_1 } from './data/fieldDefinitionV2_1';
import { FieldDefinitionV2_2 } from './data/fieldDefinitionV2_2';
import { FieldDefinitionV2_3 } from './data/fieldDefinitionV2_3';
import { FieldDefinitionV2_3_1 } from './data/fieldDefinitionV2_3_1';
import { FieldDefinitionV2_4 } from './data/fieldDefinitionV2_4';
import { FieldDefinitionV2_5 } from './data/fieldDefinitionV2_5';
import { FieldDefinitionV2_5_1 } from './data/fieldDefinitionV2_5_1';
import { FieldDefinitionV2_6 } from './data/fieldDefinitionV2_6';
import { FieldDefinitionV2_7 } from './data/fieldDefinitionV2_7';

export class DefinitionBuilder{
    private _version:Version;

    constructor(version:Version) {
        this._version = version;
    }

    public addDefinitionToHl7Message(hl7Message: Hl7Message){
        this.addDefinition(hl7Message.children)
    }

    private addDefinition(children: Segment[]){
        if(!children) return;
        
        for(var i = 0; i < children.length; i++){
            children[i].definition = this.getDefinition(children[i].name);
            this.addDefinition(children[i].children);
        }
    }

    private getDefinition(hl7FieldName:string){
        switch(this._version){
            case Version.v2_1:
                return FieldDefinitionV2_1[hl7FieldName];
            case Version.v2_2:
                return FieldDefinitionV2_2[hl7FieldName];
            case Version.v2_3:
                return FieldDefinitionV2_3[hl7FieldName];
            case Version.v2_3_1:
                return FieldDefinitionV2_3_1[hl7FieldName];
            case Version.v2_4:
                return FieldDefinitionV2_4[hl7FieldName];
            case Version.v2_5:
                return FieldDefinitionV2_5[hl7FieldName];
            case Version.v2_5_1:
                return FieldDefinitionV2_5_1[hl7FieldName];
            case Version.v2_6:
                return FieldDefinitionV2_6[hl7FieldName];
            case Version.v2_7:
                return FieldDefinitionV2_7[hl7FieldName];
            default:
                throw (`version ${this._version} is not found!`);
        }
    }
}

















