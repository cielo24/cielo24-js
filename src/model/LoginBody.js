/**
 * Cielo24
 * The cielo24 Web Services Platform API allows developers to easily integrate transcription, captioning and keyword extraction into their applications without having to use a manual web portal.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: devs@cielo24.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The LoginBody model module.
 * @module model/LoginBody
 * @version 1.0.0
 */
class LoginBody {
    /**
     * Constructs a new <code>LoginBody</code>.
     * @alias module:model/LoginBody
     */
    constructor() { 
        
        LoginBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoginBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoginBody} obj Optional instance to populate.
     * @return {module:model/LoginBody} The populated <code>LoginBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginBody();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('securekey')) {
                obj['securekey'] = ApiClient.convertToType(data['securekey'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The username associated with this account
 * @member {String} username
 */
LoginBody.prototype['username'] = undefined;

/**
 * The password associated with this account
 * @member {String} password
 */
LoginBody.prototype['password'] = undefined;

/**
 * A long term security key generated via generate_api_key
 * @member {String} securekey
 */
LoginBody.prototype['securekey'] = undefined;






export default LoginBody;

