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
    instance = new Cielo24.JobInfoResponse();
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

  describe('JobInfoResponse', function() {
    it('should create an instance of JobInfoResponse', function() {
      // uncomment below and update the code to test JobInfoResponse
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be.a(Cielo24.JobInfoResponse);
    });

    it('should have the property jobId (base name: "JobId")', function() {
      // uncomment below and update the code to test the property jobId
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property jobName (base name: "JobName")', function() {
      // uncomment below and update the code to test the property jobName
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property mediaLengthSeconds (base name: "MediaLengthSeconds")', function() {
      // uncomment below and update the code to test the property mediaLengthSeconds
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "ExternalId")', function() {
      // uncomment below and update the code to test the property externalId
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "Priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property fidelity (base name: "Fidelity")', function() {
      // uncomment below and update the code to test the property fidelity
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property jobStatus (base name: "JobStatus")', function() {
      // uncomment below and update the code to test the property jobStatus
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "Options")', function() {
      // uncomment below and update the code to test the property options
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property returnTargets (base name: "ReturnTargets")', function() {
      // uncomment below and update the code to test the property returnTargets
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property sourceLanguage (base name: "SourceLanguage")', function() {
      // uncomment below and update the code to test the property sourceLanguage
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property targetLanguage (base name: "TargetLanguage")', function() {
      // uncomment below and update the code to test the property targetLanguage
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "CreationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "StartDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "DueDate")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property completedDate (base name: "CompletedDate")', function() {
      // uncomment below and update the code to test the property completedDate
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property returnDate (base name: "ReturnDate")', function() {
      // uncomment below and update the code to test the property returnDate
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property authorizationDate (base name: "AuthorizationDate")', function() {
      // uncomment below and update the code to test the property authorizationDate
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property jobDifficulty (base name: "JobDifficulty")', function() {
      // uncomment below and update the code to test the property jobDifficulty
      //var instance = new Cielo24.JobInfoResponse();
      //expect(instance).to.be();
    });

  });

}));