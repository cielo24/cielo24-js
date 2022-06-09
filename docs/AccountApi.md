# Cielo24.AccountApi

All URIs are relative to *https://api.cielo24.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSettings**](AccountApi.md#getSettings) | **GET** /account/get_settings | 
[**login**](AccountApi.md#login) | **POST** /account/login | 
[**logout**](AccountApi.md#logout) | **POST** /account/logout | 
[**verifyKey**](AccountApi.md#verifyKey) | **GET** /account/verify_key | 



## getSettings

> Object getSettings(v)



Get Account Settings

### Example

```javascript
import Cielo24 from 'cielo24';
let defaultClient = Cielo24.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Cielo24.AccountApi();
let v = 1; // Number | 
apiInstance.getSettings(v, (error, data, response) => {
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

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## login

> LoginResponse login(v, loginBody)



Login to the cielo24 API to obtain an API access token for use when calling other methods. Optional arguments may be passed either as HTTP headers or query string parameters. Required arguments must be passed as query string parameters.

### Example

```javascript
import Cielo24 from 'cielo24';

let apiInstance = new Cielo24.AccountApi();
let v = 1; // Number | 
let loginBody = new Cielo24.LoginBody(); // LoginBody | 
apiInstance.login(v, loginBody, (error, data, response) => {
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
 **loginBody** | [**LoginBody**](LoginBody.md)|  | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## logout

> logout(v)



Logout of the current session, invalidating the API token.

### Example

```javascript
import Cielo24 from 'cielo24';
let defaultClient = Cielo24.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Cielo24.AccountApi();
let v = 1; // Number | 
apiInstance.logout(v, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## verifyKey

> VerifyKeyResponse verifyKey(v)



Test Auth

### Example

```javascript
import Cielo24 from 'cielo24';
let defaultClient = Cielo24.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Cielo24.AccountApi();
let v = 1; // Number | 
apiInstance.verifyKey(v, (error, data, response) => {
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

### Return type

[**VerifyKeyResponse**](VerifyKeyResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

