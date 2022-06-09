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
 * The PerformTranscriptionBody model module.
 * @module model/PerformTranscriptionBody
 * @version 1.0.0
 */
class PerformTranscriptionBody {
    /**
     * Constructs a new <code>PerformTranscriptionBody</code>.
     * @alias module:model/PerformTranscriptionBody
     * @param jobId {String} The ID of the job
     * @param transcriptionFidelity {module:model/PerformTranscriptionBody.TranscriptionFidelityEnum} The desired fidelity of the transcription
     * @param priority {module:model/PerformTranscriptionBody.PriorityEnum} The desired priority of the transcription
     */
    constructor(jobId, transcriptionFidelity, priority) { 
        
        PerformTranscriptionBody.initialize(this, jobId, transcriptionFidelity, priority);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, jobId, transcriptionFidelity, priority) { 
        obj['job_id'] = jobId;
        obj['transcription_fidelity'] = transcriptionFidelity;
        obj['priority'] = priority;
    }

    /**
     * Constructs a <code>PerformTranscriptionBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PerformTranscriptionBody} obj Optional instance to populate.
     * @return {module:model/PerformTranscriptionBody} The populated <code>PerformTranscriptionBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PerformTranscriptionBody();

            if (data.hasOwnProperty('job_id')) {
                obj['job_id'] = ApiClient.convertToType(data['job_id'], 'String');
            }
            if (data.hasOwnProperty('transcription_fidelity')) {
                obj['transcription_fidelity'] = ApiClient.convertToType(data['transcription_fidelity'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
            }
            if (data.hasOwnProperty('callback_url')) {
                obj['callback_url'] = ApiClient.convertToType(data['callback_url'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], 'String');
            }
            if (data.hasOwnProperty('target_language')) {
                obj['target_language'] = ApiClient.convertToType(data['target_language'], 'String');
            }
            if (data.hasOwnProperty('turnaround_hours')) {
                obj['turnaround_hours'] = ApiClient.convertToType(data['turnaround_hours'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The ID of the job
 * @member {String} job_id
 */
PerformTranscriptionBody.prototype['job_id'] = undefined;

/**
 * The desired fidelity of the transcription
 * @member {module:model/PerformTranscriptionBody.TranscriptionFidelityEnum} transcription_fidelity
 */
PerformTranscriptionBody.prototype['transcription_fidelity'] = undefined;

/**
 * The desired priority of the transcription
 * @member {module:model/PerformTranscriptionBody.PriorityEnum} priority
 */
PerformTranscriptionBody.prototype['priority'] = undefined;

/**
 * A URL with query string which will be called on completion. If submitting the callback_url as a query string parameter, rather than a value in the POST data, the callback_url should be URL encoded. The callback URL can contain tags that will be replaced with job specific data when the callback is called. Below is the list of tags that are supported: {job_id}, {job_name}, {elementlist_version}, {iwp_name} (The Interim Work Product name associated with this ElementList version)
 * @member {String} callback_url
 */
PerformTranscriptionBody.prototype['callback_url'] = undefined;

/**
 * A job options json. See JobOptions object for details.
 * @member {String} options
 */
PerformTranscriptionBody.prototype['options'] = undefined;

/**
 * An RFC 5646 language code to translate this job into. If not specified, then no translation will be performed. If specified, but the language code specified matches the language code on the job request, then no translation will be performed.
 * @member {String} target_language
 */
PerformTranscriptionBody.prototype['target_language'] = undefined;

/**
 * The number of hours after submission that the job will be returned. If not specified, it will be set to a default based on the value of the priority parameter. The defaults are 24 and 48 for the PRIORITY and STANDARD priorities respectively. If you request a smaller number of hours than the default for the priority you have selected, the priority will be automatically changed. For example if you request a turnaround_hours of 16 with a priority of STANDARD, the priority will be automatically, and silently, changed to PRIORITY.
 * @member {Number} turnaround_hours
 */
PerformTranscriptionBody.prototype['turnaround_hours'] = undefined;





/**
 * Allowed values for the <code>transcription_fidelity</code> property.
 * @enum {String}
 * @readonly
 */
PerformTranscriptionBody['TranscriptionFidelityEnum'] = {

    /**
     * value: "MECHANICAL"
     * @const
     */
    "MECHANICAL": "MECHANICAL",

    /**
     * value: "PREMIUM"
     * @const
     */
    "PREMIUM": "PREMIUM",

    /**
     * value: "PROFESSIONAL"
     * @const
     */
    "PROFESSIONAL": "PROFESSIONAL"
};


/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */
PerformTranscriptionBody['PriorityEnum'] = {

    /**
     * value: "STANDARD"
     * @const
     */
    "STANDARD": "STANDARD",

    /**
     * value: "PRIORITY"
     * @const
     */
    "PRIORITY": "PRIORITY"
};



export default PerformTranscriptionBody;

