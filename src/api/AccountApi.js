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


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import LoginBody from '../model/LoginBody';
import LoginResponse from '../model/LoginResponse';
import VerifyKeyResponse from '../model/VerifyKeyResponse';

/**
* Account service.
* @module api/AccountApi
* @version 1.0.0
*/
export default class AccountApi {

    /**
    * Constructs a new AccountApi. 
    * @alias module:api/AccountApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getSettings operation.
     * @callback module:api/AccountApi~getSettingsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Account Settings
     * @param {Number} v 
     * @param {module:api/AccountApi~getSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getSettings(v, callback) {
      let postBody = null;
      // verify the required parameter 'v' is set
      if (v === undefined || v === null) {
        throw new Error("Missing the required parameter 'v' when calling getSettings");
      }

      let pathParams = {
      };
      let queryParams = {
        'v': v
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/account/get_settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the login operation.
     * @callback module:api/AccountApi~loginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Login to the cielo24 API to obtain an API access token for use when calling other methods. Optional arguments may be passed either as HTTP headers or query string parameters. Required arguments must be passed as query string parameters.
     * @param {Number} v 
     * @param {module:model/LoginBody} loginBody 
     * @param {module:api/AccountApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoginResponse}
     */
    login(v, loginBody, callback) {
      let postBody = loginBody;
      // verify the required parameter 'v' is set
      if (v === undefined || v === null) {
        throw new Error("Missing the required parameter 'v' when calling login");
      }
      // verify the required parameter 'loginBody' is set
      if (loginBody === undefined || loginBody === null) {
        throw new Error("Missing the required parameter 'loginBody' when calling login");
      }

      let pathParams = {
      };
      let queryParams = {
        'v': v
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LoginResponse;
      return this.apiClient.callApi(
        '/account/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the logout operation.
     * @callback module:api/AccountApi~logoutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Logout of the current session, invalidating the API token.
     * @param {Number} v 
     * @param {module:api/AccountApi~logoutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    logout(v, callback) {
      let postBody = null;
      // verify the required parameter 'v' is set
      if (v === undefined || v === null) {
        throw new Error("Missing the required parameter 'v' when calling logout");
      }

      let pathParams = {
      };
      let queryParams = {
        'v': v
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/account/logout', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the verifyKey operation.
     * @callback module:api/AccountApi~verifyKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VerifyKeyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test Auth
     * @param {Number} v 
     * @param {module:api/AccountApi~verifyKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VerifyKeyResponse}
     */
    verifyKey(v, callback) {
      let postBody = null;
      // verify the required parameter 'v' is set
      if (v === undefined || v === null) {
        throw new Error("Missing the required parameter 'v' when calling verifyKey");
      }

      let pathParams = {
      };
      let queryParams = {
        'v': v
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VerifyKeyResponse;
      return this.apiClient.callApi(
        '/account/verify_key', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}