# Cielo24.JobOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerApprovalSteps** | **[String]** | Requires your approval of a job at specified points in the workflow. When the job is ready for approval you will be emailed a link that will take you to a web based tool you can use to view, edit and approve the job. You may request approval at two points in the workflow: before translation and before the job is returned. | [optional] 
**customerApprovalTool** | **String** | Determines which web based tool to use for viewing, editing and approving jobs. | [optional] [default to &#39;CIELO24&#39;]
**customMetadata** | **Object** | A JSON dictionary of key value pairs. These will be used as substitution strings when building the callback URL and custom DFXP caption header. | [optional] 
**notes** | **Object** | Allows you to provide text that will be displayed to the transcriber when the job is processed. An HTML included will be escaped. | [optional] 
**returnIwp** | [**[IWPEnum]**](IWPEnum.md) | Allows you to receive additional callbacks when interim versions of the job are completed. If you specified a callback_url, then a callback will sent for FINAL regardless of the value of this option. | [optional] 
**generateMediaIntelligenceIwp** | [**[IWPEnum]**](IWPEnum.md) | Requests that media intelligence be generated for the specified interim/final versions of the transcript. Media intelligence data is added to the ElementList and can be retrieve using the get_elementlist API call. See [ElementList](https://cielo24.readthedocs.io/en/latest/output_formats/elementlist.html#media-intelligence-label) for details. | [optional] 
**speakerId** | **String** | Requests that speaker names be identified. | [optional] [default to &#39;false&#39;]
**audioDescription** | **String** | Requests that all noises and sounds be identified. | [optional] [default to &#39;false&#39;]
**onScreenText** | **String** | Requests that any text that appears in the media be added to the transcription. | [optional] [default to &#39;false&#39;]
**musicLyrics** | **String** | Requests that lyrics to songs be transcribed instead of labeled [MUSIC]. | [optional] [default to &#39;false&#39;]
**customSpecialHandling** | **String** | Requests that transcribers follow submitted instruction set. | [optional] [default to &#39;false&#39;]



## Enum: [CustomerApprovalStepsEnum]


* `TRANSLATION` (value: `"TRANSLATION"`)

* `RETURN` (value: `"RETURN"`)





## Enum: CustomerApprovalToolEnum


* `AMARA` (value: `"AMARA"`)

* `CIELO24` (value: `"CIELO24"`)





## Enum: SpeakerIdEnum


* `true` (value: `"true"`)

* `false` (value: `"false"`)





## Enum: AudioDescriptionEnum


* `true` (value: `"true"`)

* `false` (value: `"false"`)





## Enum: OnScreenTextEnum


* `true` (value: `"true"`)

* `false` (value: `"false"`)





## Enum: MusicLyricsEnum


* `true` (value: `"true"`)

* `false` (value: `"false"`)





## Enum: CustomSpecialHandlingEnum


* `true` (value: `"true"`)

* `false` (value: `"false"`)




