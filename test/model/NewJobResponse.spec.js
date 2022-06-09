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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Cielo24);
  }
}(this, function(expect, Cielo24) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Cielo24.NewJobResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('NewJobResponse', function() {
    it('should create an instance of NewJobResponse', function() {
      // uncomment below and update the code to test NewJobResponse
      //var instance = new Cielo24.NewJobResponse();
      //expect(instance).to.be.a(Cielo24.NewJobResponse);
    });

    it('should have the property jobId (base name: "JobId")', function() {
      // uncomment below and update the code to test the property jobId
      //var instance = new Cielo24.NewJobResponse();
      //expect(instance).to.be();
    });

    it('should have the property taskId (base name: "TaskId")', function() {
      // uncomment below and update the code to test the property taskId
      //var instance = new Cielo24.NewJobResponse();
      //expect(instance).to.be();
    });

  });

}));