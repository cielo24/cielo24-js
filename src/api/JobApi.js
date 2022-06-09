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
import AddMediaResponse from '../model/AddMediaResponse';
import ErrorResponse from '../model/ErrorResponse';
import JobInfoResponse from '../model/JobInfoResponse';
import NewJobBody from '../model/NewJobBody';
import NewJobResponse from '../model/NewJobResponse';
import PerformTranscriptionBody from '../model/PerformTranscriptionBody';
import PerformTranscriptionResponse from '../model/PerformTranscriptionResponse';
import PerformTranslationResponse from '../model/PerformTranslationResponse';

/**
* Job service.
* @module api/JobApi
* @version 1.0.0
*/
export default class JobApi {

    /**
    * Constructs a new JobApi. 
    * @alias module:api/JobApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addMediaFile operation.
     * @callback module:api/JobApi~addMediaFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddMediaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a piece of media to an existing job using a local file. No content-type should be included in the HTTP header. The media should be uploaded as raw binary, no encoding (base64, hex, etc) is required. Chunk-transfer encoding is NOT supported. File size is limited to 10 gb
     * @param {Number} v 
     * @param {String} jobId 
     * @param {Number} contentLength 
     * @param {File} body 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.isDuplicate  (default to 'false')
     * @param {module:api/JobApi~addMediaFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddMediaResponse}
     */
    addMediaFile(v, jobId, contentLength, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'v' is set
      if (v === undefined || v === null) {
        throw new Error("Missing the required parameter 'v' when calling addMediaFile");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling addMediaFile");
      }
      // verify the required parameter 'contentLength' is set
      if (contentLength === undefined || contentLength === null) {
        throw new Error("Missing the required parameter 'contentLength' when calling addMediaFile");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addMediaFile");
      }

      let pathParams = {
      };
      let queryParams = {
        'v': v,
        'job_id': jobId,
        'is_duplicate': opts['isDuplicate']
      };
      let headerParams = {
        'Content-Length': contentLength
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['video/mp4'];
      let accepts = ['application/json'];
      let returnType = AddMediaResponse;
      return this.apiClient.callApi(
        '/job/add_media', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addMediaUrl operation.
     * @callback module:api/JobApi~addMediaUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddMediaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a piece of media to an existing job using a public media url. A job may only have a single piece of media associated with it, attempting to add additional media will return an error code.
     * @param {Number} v 
     * @param {String} jobId 
     * @param {String} mediaUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.isDuplicate  (default to 'false')
     * @param {module:api/JobApi~addMediaUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddMediaResponse}
     */
    addMediaUrl(v, jobId, mediaUrl, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'v' is set
      if (v === undefined || v === null) {
        throw new Error("Missing the required parameter 'v' when calling addMediaUrl");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling addMediaUrl");
      }
      // verify the required parameter 'mediaUrl' is set
      if (mediaUrl === undefined || mediaUrl === null) {
        throw new Error("Missing the required parameter 'mediaUrl' when calling addMediaUrl");
      }

      let pathParams = {
      };
      let queryParams = {
        'v': v,
        'job_id': jobId,
        'media_url': mediaUrl,
        'is_duplicate': opts['isDuplicate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AddMediaResponse;
      return this.apiClient.callApi(
        '/job/add_media', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the authorizeJob operation.
     * @callback module:api/JobApi~authorizeJobCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authorize an existing job. If your account has the \"customer authorization\" feature enabled (it is not enabled by default) jobs you create will be held in the \"Authorizing\" state until you call this method. Calling this method on a job that is not the \"Authorizing\" state has no effect and will return success. Please contact support@cielo24.com to enable the \"customer authorization\" feature.
     * @param {Number} v 
     * @param {String} jobId 
     * @param {module:api/JobApi~authorizeJobCallback} callback The callback function, accepting three arguments: error, data, response
     */
    authorizeJob(v, jobId, callback) {
      let postBody = null;
      // verify the required parameter 'v' is set
      if (v === undefined || v === null) {
        throw new Error("Missing the required parameter 'v' when calling authorizeJob");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling authorizeJob");
      }

      let pathParams = {
      };
      let queryParams = {
        'v': v,
        'job_id': jobId
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
        '/job/authorize', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCaption operation.
     * @callback module:api/JobApi~getCaptionCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the caption file for a job. The job must have completed transcription before a caption can be downloaded.
     * @param {Number} v 
     * @param {String} jobId 
     * @param {module:model/String} captionFormat 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.buildUrl Rather than returning the file, return a permanent URL to the file. (default to 'false')
     * @param {Number} opts.captionWordsMin Minimum number of words allowed in a caption. (default to 1)
     * @param {module:model/String} opts.captionBySentence When true, puts each sentence into its own caption. When false, more than one sentence may appear in a single caption. (default to 'true')
     * @param {Number} opts.charactersPerCaptionLine Maximum number of characters to be displayed on each caption line. (default to 42)
     * @param {String} opts.dfxpHeader Allows you to specify a custom header for your DFXP caption file. The header should be the entire contents of the header including the opening and closing tags. Ignored if caption_format does not equal DFXP. (default to '')
     * @param {module:model/String} opts.disallowDangling Will prevent captions from having the last word in a sentence start a new line. Last words will ALWAYS be kept on the same line, even if it breaks the characters_per_caption_line option. (default to 'false')
     * @param {String} opts.displayEffectsSpeakerAs Determines what speaker name should used for sound effects. (default to 'Effects')
     * @param {module:model/String} opts.displaySpeakerId Determines the way speakers are identified in the captions. Choose \"no\" to not display speaker identities at all: \">> example\" Choose \"number\" to display only the speaker number: \">> Speaker 1: example\" Choose \"name\" to display the speaker name: \">> John Doe: example\". If you choose \"name\", the speaker number will be displayed if the name is not available. (default to 'name')
     * @param {module:model/String} opts.iwpName The named version of element list to generate the transcript from. If not specified, the transcript will be generated from the latest version. (default to '')
     * @param {String} opts.elementlistVersion The version of element list to generate the captions from. If not specified, the caption will be generated from the latest version. (ISO 8601 Date String) (default to '')
     * @param {String} opts.emitSpeakerChangeTokensAs Determine what characters to use to denote speaker changes. (default to '>>')
     * @param {module:model/String} opts.forceCase Force the contents of the captions to be all UPPER or lower case. If blank, the case of the captions is not changed. (default to '')
     * @param {module:model/String} opts.includeDfxpMetadata When true, and the caption format requested is DFXP, the jobs name, ID and language will be added to the DFXP metadata header. When false, these data are omitted from the header. Ignored if caption_format does not equal DFXP. (default to 'true')
     * @param {Number} opts.layoutTargetCaptionLengthMs Captions generated will, on average, be this duration. However, they may vary significantly based on other parameters you set. (default to 5000)
     * @param {module:model/String} opts.lineBreakOnSentence Inserts a line break in between sentences that are in the same caption. (default to 'false')
     * @param {module:model/String} opts.lineEndingFormat Determine the end of line (EOL) character to use for the captions. (default to 'UNIX')
     * @param {Number} opts.linesPerCaption Number of lines to be displayed for each caption. (default to 2)
     * @param {module:model/String} opts.maskProfanity Replace profanity with asterisks. (default to 'false')
     * @param {Number} opts.maximumCaptionDuration No captions longer than this (in milliseconds) will be produced. If not specified, there is no maximum.
     * @param {Number} opts.mergeGapInterval Captions with a gap between them that is smaller than this (in milliseconds) will have their start and/or end times changed so there is no time gap between the captions. (default to 1000)
     * @param {Number} opts.minimumCaptionLengthMs Extends the duration of short captions to the this minimum length. Additional time is taken from later caption blocks to meet this minimum time.
     * @param {Number} opts.minimumGapBetweenCaptionsMs Adds a minimum time between captions such as there will always be some time between captions where no text is displayed. When captions are very close together, time will be removed from the caption duration to make the gap.
     * @param {module:model/String} opts.qtSeamless Does not put time gaps of any kind between caption blocks. Ignored if caption_format does not equal QT. (default to 'false')
     * @param {module:model/String} opts.removeDisfluencies Remove verbal disfluencies from the generated transcript. Common disfluencies such as \"um\" and \"ah\" are removed while maintaining appropriate punctuation. (default to 'true')
     * @param {Array.<module:model/String>} opts.removeSoundsList A list of sounds to not show in the caption. This is a JSON style list, and should look like [\"MUSIC\", \"LAUGH\"]. Ignored if remove_sound_references is true.
     * @param {module:model/String} opts.removeSoundReferences Remove ALL non-verbal sound and noise references from the generated transcript. Sounds and unidentified noises are depicted in the caption as [SOUND], [COUGH] and [NOISE]. If this parameter is set, these identifiers are omitted from the caption. (default to 'true')
     * @param {module:model/String} opts.replaceSlang Replace common slang terms from the generated transcript. Common replacements are \"want to\" for \"wanna\", \"going to\" for \"gonna\", etc. (default to 'false')
     * @param {Number} opts.silenceMaxMs If there is a interval of silence in the middle of a sentence longer than this, then the caption will be split. (default to 2000)
     * @param {module:model/String} opts.singleSpeakerPerCaption When true, puts each speaker into its own caption. When false, more than one speaker may appear in a single caption. (default to 'true')
     * @param {Array.<String>} opts.soundBoundaries Specifies the characters to surround sound references with. The default will generate sound references that look like this: [MUSIC].
     * @param {Number} opts.soundThreshold Sound references that are longer than this threshold will be made their own caption entirely, and will not have any text included with them. If not set, Sound references will be included back to back with text no matter the duration of the sound.
     * @param {module:model/String} opts.soundTokensByCaption If true, all sound references will always be in their own caption. If false, more than one sound reference may appear in a single caption. (default to 'false')
     * @param {module:model/String} opts.soundTokensByLine If true, all sound references will always be in their own line. If false, more than one sound reference may appear in a single line. (default to 'false')
     * @param {Array.<module:model/String>} opts.soundTokensByCaptionList If non-empty, the specified sound references will always be in their own caption. If empty, more than one sound reference may appear in a single caption. Ignored if sound_tokens_by_caption is true.
     * @param {Array.<module:model/String>} opts.soundTokensByLineList If non-empty, the specified sound references will always be in their own line. If empty, more than one sound reference may appear in a single line. Ignored if sound_tokens_by_line is true.
     * @param {module:model/String} opts.speakerOnNewLine If true, a speaker change will cause a new caption to be made. If false, multiple speakers may appear in a single caption. (default to 'true')
     * @param {String} opts.srtFormat If the caption format is SRT, determines what the caption blocks will look like. The default, prints caption blocks that look like this:    1:   00:00:06,060 --> 00:00:16,060   This is the caption text.  You can alter the caption block by re-arranging or removing the substitution string values, shown enclosed in braces \"{}\" in the default value below. Substitution strings may used more than once if desired. Any text that is not a substitution string will be displayed as written. To add new lines, include a \\n. Note, you may need to escape the \\n with an extra backslash when encoding the request.  (default to '{caption_number:d}\n{start_hour:02d}:{start_minute:02d}:{start_second:02d},{start_millisecond:03d} -->{end_hour:02d}:{end_minute:02d}:{end_second:02d},{end_millisecond:03d}\n{caption_text}\n\n')
     * @param {module:model/String} opts.stripSquareBrackets Removes all square brackets like '[' or ']' from captions. By default square brackets surround sound references like '[MUSIC]', but they may exist as part of the caption text as well. (default to 'false')
     * @param {module:model/String} opts.utf8Mark Adds a utf8 bytemark to the beginning of the caption. This should only be used if the system you are loading the caption files into needs a byte marker. The vast majority of systems do not. (default to 'false')
     * @param {module:model/String} opts.replaceEnglishSpelling Replaces English spelling with location accurate spelling. i.e. Color --> Colour  A: American  B: British  Z: British ize  U: Australian  C: Canadian  (default to 'A')
     * @param {module:api/JobApi~getCaptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCaption(v, jobId, captionFormat, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'v' is set
      if (v === undefined || v === null) {
        throw new Error("Missing the required parameter 'v' when calling getCaption");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling getCaption");
      }
      // verify the required parameter 'captionFormat' is set
      if (captionFormat === undefined || captionFormat === null) {
        throw new Error("Missing the required parameter 'captionFormat' when calling getCaption");
      }

      let pathParams = {
      };
      let queryParams = {
        'v': v,
        'job_id': jobId,
        'caption_format': captionFormat,
        'build_url': opts['buildUrl'],
        'caption_words_min': opts['captionWordsMin'],
        'caption_by_sentence': opts['captionBySentence'],
        'characters_per_caption_line': opts['charactersPerCaptionLine'],
        'dfxp_header': opts['dfxpHeader'],
        'disallow_dangling': opts['disallowDangling'],
        'display_effects_speaker_as': opts['displayEffectsSpeakerAs'],
        'display_speaker_id': opts['displaySpeakerId'],
        'iwp_name': opts['iwpName'],
        'elementlist_version': opts['elementlistVersion'],
        'emit_speaker_change_tokens_as': opts['emitSpeakerChangeTokensAs'],
        'force_case': opts['forceCase'],
        'include_dfxp_metadata': opts['includeDfxpMetadata'],
        'layout_target_caption_length_ms': opts['layoutTargetCaptionLengthMs'],
        'line_break_on_sentence': opts['lineBreakOnSentence'],
        'line_ending_format': opts['lineEndingFormat'],
        'lines_per_caption': opts['linesPerCaption'],
        'mask_profanity': opts['maskProfanity'],
        'maximum_caption_duration': opts['maximumCaptionDuration'],
        'merge_gap_interval': opts['mergeGapInterval'],
        'minimum_caption_length_ms': opts['minimumCaptionLengthMs'],
        'minimum_gap_between_captions_ms': opts['minimumGapBetweenCaptionsMs'],
        'qt_seamless': opts['qtSeamless'],
        'remove_disfluencies': opts['removeDisfluencies'],
        'remove_sounds_list': this.apiClient.buildCollectionParam(opts['removeSoundsList'], 'multi'),
        'remove_sound_references': opts['removeSoundReferences'],
        'replace_slang': opts['replaceSlang'],
        'silence_max_ms': opts['silenceMaxMs'],
        'single_speaker_per_caption': opts['singleSpeakerPerCaption'],
        'sound_boundaries': this.apiClient.buildCollectionParam(opts['soundBoundaries'], 'multi'),
        'sound_threshold': opts['soundThreshold'],
        'sound_tokens_by_caption': opts['soundTokensByCaption'],
        'sound_tokens_by_line': opts['soundTokensByLine'],
        'sound_tokens_by_caption_list': this.apiClient.buildCollectionParam(opts['soundTokensByCaptionList'], 'multi'),
        'sound_tokens_by_line_list': this.apiClient.buildCollectionParam(opts['soundTokensByLineList'], 'multi'),
        'speaker_on_new_line': opts['speakerOnNewLine'],
        'srt_format': opts['srtFormat'],
        'strip_square_brackets': opts['stripSquareBrackets'],
        'utf8_mark': opts['utf8Mark'],
        'replace_english_spelling': opts['replaceEnglishSpelling']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/job/get_caption', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the jobInfo operation.
     * @callback module:api/JobApi~jobInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} v 
     * @param {String} jobId 
     * @param {module:api/JobApi~jobInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JobInfoResponse}
     */
    jobInfo(v, jobId, callback) {
      let postBody = null;
      // verify the required parameter 'v' is set
      if (v === undefined || v === null) {
        throw new Error("Missing the required parameter 'v' when calling jobInfo");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobInfo");
      }

      let pathParams = {
      };
      let queryParams = {
        'v': v,
        'job_id': jobId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = JobInfoResponse;
      return this.apiClient.callApi(
        '/job/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the newJob operation.
     * @callback module:api/JobApi~newJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NewJobResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new job. A job is a container into which you can upload media and request that transcription be performed. Creating a job is prerequisite for virtually all other methods.
     * @param {Number} v 
     * @param {module:model/NewJobBody} newJobBody 
     * @param {module:api/JobApi~newJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NewJobResponse}
     */
    newJob(v, newJobBody, callback) {
      let postBody = newJobBody;
      // verify the required parameter 'v' is set
      if (v === undefined || v === null) {
        throw new Error("Missing the required parameter 'v' when calling newJob");
      }
      // verify the required parameter 'newJobBody' is set
      if (newJobBody === undefined || newJobBody === null) {
        throw new Error("Missing the required parameter 'newJobBody' when calling newJob");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = NewJobResponse;
      return this.apiClient.callApi(
        '/job/new', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the performTranscription operation.
     * @callback module:api/JobApi~performTranscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PerformTranscriptionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request that transcription be performed on the specified job. A callback URL, if specified, will be called when the transcription is complete. See [callback documentation](https://cielo24.readthedocs.io/en/latest/basics.html#callbacks-label) for details.
     * @param {Number} v 
     * @param {module:model/PerformTranscriptionBody} performTranscriptionBody 
     * @param {module:api/JobApi~performTranscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PerformTranscriptionResponse}
     */
    performTranscription(v, performTranscriptionBody, callback) {
      let postBody = performTranscriptionBody;
      // verify the required parameter 'v' is set
      if (v === undefined || v === null) {
        throw new Error("Missing the required parameter 'v' when calling performTranscription");
      }
      // verify the required parameter 'performTranscriptionBody' is set
      if (performTranscriptionBody === undefined || performTranscriptionBody === null) {
        throw new Error("Missing the required parameter 'performTranscriptionBody' when calling performTranscription");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PerformTranscriptionResponse;
      return this.apiClient.callApi(
        '/job/perform_transcription', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the performTranslation operation.
     * @callback module:api/JobApi~performTranslationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PerformTranslationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request that orders a new Translation language for a video that has been previously Transcribed and/or Translated. The New Job ID and job target language will be returned upon completion.
     * @param {Number} v 
     * @param {String} jobId 
     * @param {String} targetLanguages The language(s) being ordered (Any RFC 5646 language code) separated by comma (,)
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.approveUplevel 
     * @param {module:api/JobApi~performTranslationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PerformTranslationResponse}
     */
    performTranslation(v, jobId, targetLanguages, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'v' is set
      if (v === undefined || v === null) {
        throw new Error("Missing the required parameter 'v' when calling performTranslation");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling performTranslation");
      }
      // verify the required parameter 'targetLanguages' is set
      if (targetLanguages === undefined || targetLanguages === null) {
        throw new Error("Missing the required parameter 'targetLanguages' when calling performTranslation");
      }

      let pathParams = {
      };
      let queryParams = {
        'v': v,
        'job_id': jobId,
        'target_languages': targetLanguages,
        'approve_uplevel': opts['approveUplevel']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PerformTranslationResponse;
      return this.apiClient.callApi(
        '/job/perform_translation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
