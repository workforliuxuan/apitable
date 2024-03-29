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
* URL Content Recognition Results
*/
export class UrlAwareContentVo {
    'isAware'?: boolean;
    'favicon'?: string;
    'title'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isAware",
            "baseName": "isAware",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "favicon",
            "baseName": "favicon",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UrlAwareContentVo.attributeTypeMap;
    }

    public constructor() {
    }
}

