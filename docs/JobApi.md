# Cielo24.JobApi

All URIs are relative to *https://api.cielo24.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMediaFile**](JobApi.md#addMediaFile) | **POST** /job/add_media | 
[**addMediaUrl**](JobApi.md#addMediaUrl) | **GET** /job/add_media | 
[**authorizeJob**](JobApi.md#authorizeJob) | **POST** /job/authorize | 
[**getCaption**](JobApi.md#getCaption) | **GET** /job/get_caption | 
[**jobInfo**](JobApi.md#jobInfo) | **GET** /job/info | 
[**newJob**](JobApi.md#newJob) | **POST** /job/new | 
[**performTranscription**](JobApi.md#performTranscription) | **POST** /job/perform_transcription | 
[**performTranslation**](JobApi.md#performTranslation) | **POST** /job/translate | 



## addMediaFile

> AddMediaResponse addMediaFile(v, jobId, contentLength, body, opts)



Add a piece of media to an existing job using a local file. No content-type should be included in the HTTP header. The media should be uploaded as raw binary, no encoding (base64, hex, etc) is required. Chunk-transfer encoding is NOT supported. File size is limited to 10 gb

### Example

```javascript
import Cielo24 from 'cielo24';
let defaultClient = Cielo24.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Cielo24.JobApi();
let v = 1; // Number | 
let jobId = 0fbd6015910e42dca25a863c4925d77c; // String | 
let contentLength = 56; // Number | 
let body = "/path/to/file"; // File | 
let opts = {
  'isDuplicate': "'false'" // String | 
};
apiInstance.addMediaFile(v, jobId, contentLength, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v** | **Number**|  | [default to 1]
 **jobId** | **String**|  | 
 **contentLength** | **Number**|  | 
 **body** | **File**|  | 
 **isDuplicate** | **String**|  | [optional] [default to &#39;false&#39;]

### Return type

[**AddMediaResponse**](AddMediaResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: video/mp4
- **Accept**: application/json


## addMediaUrl

> AddMediaResponse addMediaUrl(v, jobId, mediaUrl, opts)



Add a piece of media to an existing job using a public media url. A job may only have a single piece of media associated with it, attempting to add additional media will return an error code.

### Example

```javascript
import Cielo24 from 'cielo24';
let defaultClient = Cielo24.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Cielo24.JobApi();
let v = 1; // Number | 
let jobId = 0fbd6015910e42dca25a863c4925d77c; // String | 
let mediaUrl = http://www.domain.com/video.mp4; // String | 
let opts = {
  'isDuplicate': "'false'" // String | 
};
apiInstance.addMediaUrl(v, jobId, mediaUrl, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v** | **Number**|  | [default to 1]
 **jobId** | **String**|  | 
 **mediaUrl** | **String**|  | 
 **isDuplicate** | **String**|  | [optional] [default to &#39;false&#39;]

### Return type

[**AddMediaResponse**](AddMediaResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authorizeJob

> authorizeJob(v, jobId)



Authorize an existing job. If your account has the \&quot;customer authorization\&quot; feature enabled (it is not enabled by default) jobs you create will be held in the \&quot;Authorizing\&quot; state until you call this method. Calling this method on a job that is not the \&quot;Authorizing\&quot; state has no effect and will return success. Please contact support@cielo24.com to enable the \&quot;customer authorization\&quot; feature.

### Example

```javascript
import Cielo24 from 'cielo24';
let defaultClient = Cielo24.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Cielo24.JobApi();
let v = 1; // Number | 
let jobId = 0fbd6015910e42dca25a863c4925d77c; // String | 
apiInstance.authorizeJob(v, jobId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v** | **Number**|  | [default to 1]
 **jobId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCaption

> String getCaption(v, jobId, captionFormat, opts)



Get the caption file for a job. The job must have completed transcription before a caption can be downloaded.

### Example

```javascript
import Cielo24 from 'cielo24';
let defaultClient = Cielo24.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Cielo24.JobApi();
let v = 1; // Number | 
let jobId = 0fbd6015910e42dca25a863c4925d77c; // String | 
let captionFormat = SRT; // String | 
let opts = {
  'buildUrl': false, // String | Rather than returning the file, return a permanent URL to the file.
  'captionWordsMin': 3, // Number | Minimum number of words allowed in a caption.
  'captionBySentence': false, // String | When true, puts each sentence into its own caption. When false, more than one sentence may appear in a single caption.
  'charactersPerCaptionLine': 30, // Number | Maximum number of characters to be displayed on each caption line.
  'dfxpHeader': <head></head>, // String | Allows you to specify a custom header for your DFXP caption file. The header should be the entire contents of the header including the opening and closing tags. Ignored if caption_format does not equal DFXP.
  'disallowDangling': true, // String | Will prevent captions from having the last word in a sentence start a new line. Last words will ALWAYS be kept on the same line, even if it breaks the characters_per_caption_line option.
  'displayEffectsSpeakerAs': Sounds, // String | Determines what speaker name should used for sound effects.
  'displaySpeakerId': number, // String | Determines the way speakers are identified in the captions. Choose \"no\" to not display speaker identities at all: \">> example\" Choose \"number\" to display only the speaker number: \">> Speaker 1: example\" Choose \"name\" to display the speaker name: \">> John Doe: example\". If you choose \"name\", the speaker number will be displayed if the name is not available.
  'iwpName': MECHANICAL, // String | The named version of element list to generate the transcript from. If not specified, the transcript will be generated from the latest version.
  'elementlistVersion': 2014-07-31T12:35:52.324389, // String | The version of element list to generate the captions from. If not specified, the caption will be generated from the latest version. (ISO 8601 Date String)
  'emitSpeakerChangeTokensAs': -->, // String | Determine what characters to use to denote speaker changes.
  'forceCase': lower, // String | Force the contents of the captions to be all UPPER or lower case. If blank, the case of the captions is not changed.
  'includeDfxpMetadata': false, // String | When true, and the caption format requested is DFXP, the jobs name, ID and language will be added to the DFXP metadata header. When false, these data are omitted from the header. Ignored if caption_format does not equal DFXP.
  'layoutTargetCaptionLengthMs': 4000, // Number | Captions generated will, on average, be this duration. However, they may vary significantly based on other parameters you set.
  'lineBreakOnSentence': true, // String | Inserts a line break in between sentences that are in the same caption.
  'lineEndingFormat': OSX, // String | Determine the end of line (EOL) character to use for the captions.
  'linesPerCaption': 3, // Number | Number of lines to be displayed for each caption.
  'maskProfanity': true, // String | Replace profanity with asterisks.
  'maximumCaptionDuration': 10000, // Number | No captions longer than this (in milliseconds) will be produced. If not specified, there is no maximum.
  'mergeGapInterval': 1500, // Number | Captions with a gap between them that is smaller than this (in milliseconds) will have their start and/or end times changed so there is no time gap between the captions.
  'minimumCaptionLengthMs': 1500, // Number | Extends the duration of short captions to the this minimum length. Additional time is taken from later caption blocks to meet this minimum time.
  'minimumGapBetweenCaptionsMs': 100, // Number | Adds a minimum time between captions such as there will always be some time between captions where no text is displayed. When captions are very close together, time will be removed from the caption duration to make the gap.
  'qtSeamless': true, // String | Does not put time gaps of any kind between caption blocks. Ignored if caption_format does not equal QT.
  'removeDisfluencies': false, // String | Remove verbal disfluencies from the generated transcript. Common disfluencies such as \"um\" and \"ah\" are removed while maintaining appropriate punctuation.
  'removeSoundsList': ["MUSIC","LAUGH"], // [String] | A list of sounds to not show in the caption. This is a JSON style list, and should look like [\"MUSIC\", \"LAUGH\"]. Ignored if remove_sound_references is true.
  'removeSoundReferences': false, // String | Remove ALL non-verbal sound and noise references from the generated transcript. Sounds and unidentified noises are depicted in the caption as [SOUND], [COUGH] and [NOISE]. If this parameter is set, these identifiers are omitted from the caption.
  'replaceSlang': true, // String | Replace common slang terms from the generated transcript. Common replacements are \"want to\" for \"wanna\", \"going to\" for \"gonna\", etc.
  'silenceMaxMs': 1000, // Number | If there is a interval of silence in the middle of a sentence longer than this, then the caption will be split.
  'singleSpeakerPerCaption': false, // String | When true, puts each speaker into its own caption. When false, more than one speaker may appear in a single caption.
  'soundBoundaries': ["(",")"], // [String] | Specifies the characters to surround sound references with. The default will generate sound references that look like this: [MUSIC].
  'soundThreshold': 5000, // Number | Sound references that are longer than this threshold will be made their own caption entirely, and will not have any text included with them. If not set, Sound references will be included back to back with text no matter the duration of the sound.
  'soundTokensByCaption': true, // String | If true, all sound references will always be in their own caption. If false, more than one sound reference may appear in a single caption.
  'soundTokensByLine': true, // String | If true, all sound references will always be in their own line. If false, more than one sound reference may appear in a single line.
  'soundTokensByCaptionList': [], // [String] | If non-empty, the specified sound references will always be in their own caption. If empty, more than one sound reference may appear in a single caption. Ignored if sound_tokens_by_caption is true.
  'soundTokensByLineList': ["NOISE"], // [String] | If non-empty, the specified sound references will always be in their own line. If empty, more than one sound reference may appear in a single line. Ignored if sound_tokens_by_line is true.
  'speakerOnNewLine': false, // String | If true, a speaker change will cause a new caption to be made. If false, multiple speakers may appear in a single caption.
  'srtFormat': {caption_number:d}\n{start_hour:02d}:{start_minute:02d}:{start_second:02d},{start_millisecond:03d} -->{end_hour:02d}:{end_minute:02d}:{end_second:02d},{end_millisecond:03d}\n{caption_text}\n\n, // String | If the caption format is SRT, determines what the caption blocks will look like. The default, prints caption blocks that look like this:    1:   00:00:06,060 --> 00:00:16,060   This is the caption text.  You can alter the caption block by re-arranging or removing the substitution string values, shown enclosed in braces \"{}\" in the default value below. Substitution strings may used more than once if desired. Any text that is not a substitution string will be displayed as written. To add new lines, include a \\n. Note, you may need to escape the \\n with an extra backslash when encoding the request. 
  'stripSquareBrackets': true, // String | Removes all square brackets like '[' or ']' from captions. By default square brackets surround sound references like '[MUSIC]', but they may exist as part of the caption text as well.
  'utf8Mark': true, // String | Adds a utf8 bytemark to the beginning of the caption. This should only be used if the system you are loading the caption files into needs a byte marker. The vast majority of systems do not.
  'replaceEnglishSpelling': B // String | Replaces English spelling with location accurate spelling. i.e. Color --> Colour  A: American  B: British  Z: British ize  U: Australian  C: Canadian 
};
apiInstance.getCaption(v, jobId, captionFormat, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v** | **Number**|  | [default to 1]
 **jobId** | **String**|  | 
 **captionFormat** | **String**|  | 
 **buildUrl** | **String**| Rather than returning the file, return a permanent URL to the file. | [optional] [default to &#39;false&#39;]
 **captionWordsMin** | **Number**| Minimum number of words allowed in a caption. | [optional] [default to 1]
 **captionBySentence** | **String**| When true, puts each sentence into its own caption. When false, more than one sentence may appear in a single caption. | [optional] [default to &#39;true&#39;]
 **charactersPerCaptionLine** | **Number**| Maximum number of characters to be displayed on each caption line. | [optional] [default to 42]
 **dfxpHeader** | **String**| Allows you to specify a custom header for your DFXP caption file. The header should be the entire contents of the header including the opening and closing tags. Ignored if caption_format does not equal DFXP. | [optional] [default to &#39;&#39;]
 **disallowDangling** | **String**| Will prevent captions from having the last word in a sentence start a new line. Last words will ALWAYS be kept on the same line, even if it breaks the characters_per_caption_line option. | [optional] [default to &#39;false&#39;]
 **displayEffectsSpeakerAs** | **String**| Determines what speaker name should used for sound effects. | [optional] [default to &#39;Effects&#39;]
 **displaySpeakerId** | **String**| Determines the way speakers are identified in the captions. Choose \&quot;no\&quot; to not display speaker identities at all: \&quot;&gt;&gt; example\&quot; Choose \&quot;number\&quot; to display only the speaker number: \&quot;&gt;&gt; Speaker 1: example\&quot; Choose \&quot;name\&quot; to display the speaker name: \&quot;&gt;&gt; John Doe: example\&quot;. If you choose \&quot;name\&quot;, the speaker number will be displayed if the name is not available. | [optional] [default to &#39;name&#39;]
 **iwpName** | **String**| The named version of element list to generate the transcript from. If not specified, the transcript will be generated from the latest version. | [optional] [default to &#39;&#39;]
 **elementlistVersion** | **String**| The version of element list to generate the captions from. If not specified, the caption will be generated from the latest version. (ISO 8601 Date String) | [optional] [default to &#39;&#39;]
 **emitSpeakerChangeTokensAs** | **String**| Determine what characters to use to denote speaker changes. | [optional] [default to &#39;&gt;&gt;&#39;]
 **forceCase** | **String**| Force the contents of the captions to be all UPPER or lower case. If blank, the case of the captions is not changed. | [optional] [default to &#39;&#39;]
 **includeDfxpMetadata** | **String**| When true, and the caption format requested is DFXP, the jobs name, ID and language will be added to the DFXP metadata header. When false, these data are omitted from the header. Ignored if caption_format does not equal DFXP. | [optional] [default to &#39;true&#39;]
 **layoutTargetCaptionLengthMs** | **Number**| Captions generated will, on average, be this duration. However, they may vary significantly based on other parameters you set. | [optional] [default to 5000]
 **lineBreakOnSentence** | **String**| Inserts a line break in between sentences that are in the same caption. | [optional] [default to &#39;false&#39;]
 **lineEndingFormat** | **String**| Determine the end of line (EOL) character to use for the captions. | [optional] [default to &#39;UNIX&#39;]
 **linesPerCaption** | **Number**| Number of lines to be displayed for each caption. | [optional] [default to 2]
 **maskProfanity** | **String**| Replace profanity with asterisks. | [optional] [default to &#39;false&#39;]
 **maximumCaptionDuration** | **Number**| No captions longer than this (in milliseconds) will be produced. If not specified, there is no maximum. | [optional] 
 **mergeGapInterval** | **Number**| Captions with a gap between them that is smaller than this (in milliseconds) will have their start and/or end times changed so there is no time gap between the captions. | [optional] [default to 1000]
 **minimumCaptionLengthMs** | **Number**| Extends the duration of short captions to the this minimum length. Additional time is taken from later caption blocks to meet this minimum time. | [optional] 
 **minimumGapBetweenCaptionsMs** | **Number**| Adds a minimum time between captions such as there will always be some time between captions where no text is displayed. When captions are very close together, time will be removed from the caption duration to make the gap. | [optional] 
 **qtSeamless** | **String**| Does not put time gaps of any kind between caption blocks. Ignored if caption_format does not equal QT. | [optional] [default to &#39;false&#39;]
 **removeDisfluencies** | **String**| Remove verbal disfluencies from the generated transcript. Common disfluencies such as \&quot;um\&quot; and \&quot;ah\&quot; are removed while maintaining appropriate punctuation. | [optional] [default to &#39;true&#39;]
 **removeSoundsList** | [**[String]**](String.md)| A list of sounds to not show in the caption. This is a JSON style list, and should look like [\&quot;MUSIC\&quot;, \&quot;LAUGH\&quot;]. Ignored if remove_sound_references is true. | [optional] 
 **removeSoundReferences** | **String**| Remove ALL non-verbal sound and noise references from the generated transcript. Sounds and unidentified noises are depicted in the caption as [SOUND], [COUGH] and [NOISE]. If this parameter is set, these identifiers are omitted from the caption. | [optional] [default to &#39;true&#39;]
 **replaceSlang** | **String**| Replace common slang terms from the generated transcript. Common replacements are \&quot;want to\&quot; for \&quot;wanna\&quot;, \&quot;going to\&quot; for \&quot;gonna\&quot;, etc. | [optional] [default to &#39;false&#39;]
 **silenceMaxMs** | **Number**| If there is a interval of silence in the middle of a sentence longer than this, then the caption will be split. | [optional] [default to 2000]
 **singleSpeakerPerCaption** | **String**| When true, puts each speaker into its own caption. When false, more than one speaker may appear in a single caption. | [optional] [default to &#39;true&#39;]
 **soundBoundaries** | [**[String]**](String.md)| Specifies the characters to surround sound references with. The default will generate sound references that look like this: [MUSIC]. | [optional] 
 **soundThreshold** | **Number**| Sound references that are longer than this threshold will be made their own caption entirely, and will not have any text included with them. If not set, Sound references will be included back to back with text no matter the duration of the sound. | [optional] 
 **soundTokensByCaption** | **String**| If true, all sound references will always be in their own caption. If false, more than one sound reference may appear in a single caption. | [optional] [default to &#39;false&#39;]
 **soundTokensByLine** | **String**| If true, all sound references will always be in their own line. If false, more than one sound reference may appear in a single line. | [optional] [default to &#39;false&#39;]
 **soundTokensByCaptionList** | [**[String]**](String.md)| If non-empty, the specified sound references will always be in their own caption. If empty, more than one sound reference may appear in a single caption. Ignored if sound_tokens_by_caption is true. | [optional] 
 **soundTokensByLineList** | [**[String]**](String.md)| If non-empty, the specified sound references will always be in their own line. If empty, more than one sound reference may appear in a single line. Ignored if sound_tokens_by_line is true. | [optional] 
 **speakerOnNewLine** | **String**| If true, a speaker change will cause a new caption to be made. If false, multiple speakers may appear in a single caption. | [optional] [default to &#39;true&#39;]
 **srtFormat** | **String**| If the caption format is SRT, determines what the caption blocks will look like. The default, prints caption blocks that look like this:    1:   00:00:06,060 --&gt; 00:00:16,060   This is the caption text.  You can alter the caption block by re-arranging or removing the substitution string values, shown enclosed in braces \&quot;{}\&quot; in the default value below. Substitution strings may used more than once if desired. Any text that is not a substitution string will be displayed as written. To add new lines, include a \\n. Note, you may need to escape the \\n with an extra backslash when encoding the request.  | [optional] [default to &#39;{caption_number:d}\n{start_hour:02d}:{start_minute:02d}:{start_second:02d},{start_millisecond:03d} --&gt;{end_hour:02d}:{end_minute:02d}:{end_second:02d},{end_millisecond:03d}\n{caption_text}\n\n&#39;]
 **stripSquareBrackets** | **String**| Removes all square brackets like &#39;[&#39; or &#39;]&#39; from captions. By default square brackets surround sound references like &#39;[MUSIC]&#39;, but they may exist as part of the caption text as well. | [optional] [default to &#39;false&#39;]
 **utf8Mark** | **String**| Adds a utf8 bytemark to the beginning of the caption. This should only be used if the system you are loading the caption files into needs a byte marker. The vast majority of systems do not. | [optional] [default to &#39;false&#39;]
 **replaceEnglishSpelling** | **String**| Replaces English spelling with location accurate spelling. i.e. Color --&gt; Colour  A: American  B: British  Z: British ize  U: Australian  C: Canadian  | [optional] [default to &#39;A&#39;]

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json


## jobInfo

> JobInfoResponse jobInfo(v, jobId)



### Example

```javascript
import Cielo24 from 'cielo24';
let defaultClient = Cielo24.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Cielo24.JobApi();
let v = 1; // Number | 
let jobId = 0fbd6015910e42dca25a863c4925d77c; // String | 
apiInstance.jobInfo(v, jobId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v** | **Number**|  | [default to 1]
 **jobId** | **String**|  | 

### Return type

[**JobInfoResponse**](JobInfoResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## newJob

> NewJobResponse newJob(v, newJobBody)



Create a new job. A job is a container into which you can upload media and request that transcription be performed. Creating a job is prerequisite for virtually all other methods.

### Example

```javascript
import Cielo24 from 'cielo24';
let defaultClient = Cielo24.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Cielo24.JobApi();
let v = 1; // Number | 
let newJobBody = new Cielo24.NewJobBody(); // NewJobBody | 
apiInstance.newJob(v, newJobBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v** | **Number**|  | [default to 1]
 **newJobBody** | [**NewJobBody**](NewJobBody.md)|  | 

### Return type

[**NewJobResponse**](NewJobResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## performTranscription

> PerformTranscriptionResponse performTranscription(v, performTranscriptionBody)



Request that transcription be performed on the specified job. A callback URL, if specified, will be called when the transcription is complete. See [callback documentation](https://cielo24.readthedocs.io/en/latest/basics.html#callbacks-label) for details.

### Example

```javascript
import Cielo24 from 'cielo24';
let defaultClient = Cielo24.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Cielo24.JobApi();
let v = 1; // Number | 
let performTranscriptionBody = new Cielo24.PerformTranscriptionBody(); // PerformTranscriptionBody | 
apiInstance.performTranscription(v, performTranscriptionBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v** | **Number**|  | [default to 1]
 **performTranscriptionBody** | [**PerformTranscriptionBody**](PerformTranscriptionBody.md)|  | 

### Return type

[**PerformTranscriptionResponse**](PerformTranscriptionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## performTranslation

> PerformTranslationResponse performTranslation(v, jobId, targetLanguages, opts)



Request that orders a new Translation language for a video that has been previously Transcribed and/or Translated. The New Job ID and job target language will be returned upon completion.

### Example

```javascript
import Cielo24 from 'cielo24';
let defaultClient = Cielo24.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Cielo24.JobApi();
let v = 1; // Number | 
let jobId = 0fbd6015910e42dca25a863c4925d77c; // String | 
let targetLanguages = fr,de; // String | The language(s) being ordered (Any RFC 5646 language code) separated by comma (,)
let opts = {
  'approveUplevel': true // String | 
};
apiInstance.performTranslation(v, jobId, targetLanguages, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v** | **Number**|  | [default to 1]
 **jobId** | **String**|  | 
 **targetLanguages** | **String**| The language(s) being ordered (Any RFC 5646 language code) separated by comma (,) | 
 **approveUplevel** | **String**|  | [optional] 

### Return type

[**PerformTranslationResponse**](PerformTranslationResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

