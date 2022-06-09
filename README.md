# cielo24

Cielo24 - JavaScript client for cielo24
The cielo24 Web Services Platform API allows developers to easily integrate transcription, captioning and keyword extraction into their applications without having to use a manual web portal.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cielo24 --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your cielo24 from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/cielo24/cielo24-js
then install it via:

```shell
    npm install cielo24/cielo24-js --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Cielo24 = require('cielo24');

var defaultClient = Cielo24.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['api_token'] = "Token"

var api = new Cielo24.AccountApi()
var v = 1; // {Number} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getSettings(v, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.cielo24.com/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Cielo24.AccountApi* | [**getSettings**](docs/AccountApi.md#getSettings) | **GET** /account/get_settings | 
*Cielo24.AccountApi* | [**login**](docs/AccountApi.md#login) | **POST** /account/login | 
*Cielo24.AccountApi* | [**logout**](docs/AccountApi.md#logout) | **POST** /account/logout | 
*Cielo24.AccountApi* | [**verifyKey**](docs/AccountApi.md#verifyKey) | **GET** /account/verify_key | 
*Cielo24.JobApi* | [**addMediaFile**](docs/JobApi.md#addMediaFile) | **POST** /job/add_media | 
*Cielo24.JobApi* | [**addMediaUrl**](docs/JobApi.md#addMediaUrl) | **GET** /job/add_media | 
*Cielo24.JobApi* | [**authorizeJob**](docs/JobApi.md#authorizeJob) | **POST** /job/authorize | 
*Cielo24.JobApi* | [**getCaption**](docs/JobApi.md#getCaption) | **GET** /job/get_caption | 
*Cielo24.JobApi* | [**jobInfo**](docs/JobApi.md#jobInfo) | **GET** /job/info | 
*Cielo24.JobApi* | [**newJob**](docs/JobApi.md#newJob) | **POST** /job/new | 
*Cielo24.JobApi* | [**performTranscription**](docs/JobApi.md#performTranscription) | **POST** /job/perform_transcription | 
*Cielo24.JobApi* | [**performTranslation**](docs/JobApi.md#performTranslation) | **POST** /job/perform_translation | 


## Documentation for Models

 - [Cielo24.AddMediaResponse](docs/AddMediaResponse.md)
 - [Cielo24.ErrorResponse](docs/ErrorResponse.md)
 - [Cielo24.IWPEnum](docs/IWPEnum.md)
 - [Cielo24.JobInfoResponse](docs/JobInfoResponse.md)
 - [Cielo24.JobOptions](docs/JobOptions.md)
 - [Cielo24.LoginBody](docs/LoginBody.md)
 - [Cielo24.LoginResponse](docs/LoginResponse.md)
 - [Cielo24.NewJobBody](docs/NewJobBody.md)
 - [Cielo24.NewJobResponse](docs/NewJobResponse.md)
 - [Cielo24.PerformTranscriptionBody](docs/PerformTranscriptionBody.md)
 - [Cielo24.PerformTranscriptionResponse](docs/PerformTranscriptionResponse.md)
 - [Cielo24.PerformTranslationResponse](docs/PerformTranslationResponse.md)
 - [Cielo24.VerifyKeyResponse](docs/VerifyKeyResponse.md)


## Documentation for Authorization



### ApiKeyAuth


- **Type**: API key
- **API key parameter name**: api_token
- **Location**: URL query string

