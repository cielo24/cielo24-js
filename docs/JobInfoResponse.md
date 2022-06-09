# Cielo24.JobInfoResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | **String** |  | [optional] 
**jobName** | **String** |  | [optional] 
**mediaLengthSeconds** | **Number** |  | [optional] 
**externalId** | **String** | Depends on third-party integrations. | [optional] 
**priority** | **String** |  | [optional] 
**fidelity** | **String** |  | [optional] 
**jobStatus** | **String** |  | [optional] 
**options** | [**JobOptions**](JobOptions.md) |  | [optional] 
**returnTargets** | **Object** |  | [optional] 
**sourceLanguage** | **String** | RFC 5646 Language Code | [optional] 
**targetLanguage** | **String** | RFC 5646 Language Code | [optional] 
**creationDate** | **String** | ISO 8601 Date String | [optional] 
**startDate** | **String** | ISO 8601 Date String | [optional] 
**dueDate** | **String** | ISO 8601 Date String | [optional] 
**completedDate** | **String** | ISO 8601 Date String | [optional] 
**returnDate** | **String** | ISO 8601 Date String | [optional] 
**authorizationDate** | **String** | ISO 8601 Date String | [optional] 
**jobDifficulty** | **String** |  | [optional] 



## Enum: PriorityEnum


* `STANDARD` (value: `"STANDARD"`)

* `PRIORITY` (value: `"PRIORITY"`)





## Enum: FidelityEnum


* `MECHANICAL` (value: `"MECHANICAL"`)

* `PREMIUM` (value: `"PREMIUM"`)

* `PROFESSIONAL` (value: `"PROFESSIONAL"`)





## Enum: JobStatusEnum


* `Authorizing` (value: `"Authorizing"`)

* `Pending` (value: `"Pending"`)

* `In Process` (value: `"In Process"`)

* `Complete` (value: `"Complete"`)

* `Media Failure` (value: `"Media Failure"`)

* `Reviewing` (value: `"Reviewing"`)





## Enum: JobDifficultyEnum


* `Good` (value: `"Good"`)

* `Bad` (value: `"Bad"`)

* `Unknown` (value: `"Unknown"`)




