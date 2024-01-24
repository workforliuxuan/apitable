/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Upload Employee Template Request Parameters
*/
export class UploadMemberTemplateRo {
    'file': HttpFile;
    /**
    * Password login for human-machine verification, and the front end obtains the value of get NVC Val function (human-machine verification will be performed when not logged in)
    */
    'data'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "file",
            "baseName": "file",
            "type": "HttpFile",
            "format": "binary"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UploadMemberTemplateRo.attributeTypeMap;
    }

    public constructor() {
    }
}

