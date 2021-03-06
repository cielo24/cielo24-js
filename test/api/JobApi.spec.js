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
    instance = new Cielo24.JobApi();
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

  describe('JobApi', function() {
    describe('addMediaFile', function() {
      it('should call addMediaFile successfully', function(done) {
        //uncomment below and update the code to test addMediaFile
        //instance.addMediaFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addMediaUrl', function() {
      it('should call addMediaUrl successfully', function(done) {
        //uncomment below and update the code to test addMediaUrl
        //instance.addMediaUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('authorizeJob', function() {
      it('should call authorizeJob successfully', function(done) {
        //uncomment below and update the code to test authorizeJob
        //instance.authorizeJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCaption', function() {
      it('should call getCaption successfully', function(done) {
        //uncomment below and update the code to test getCaption
        //instance.getCaption(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('jobInfo', function() {
      it('should call jobInfo successfully', function(done) {
        //uncomment below and update the code to test jobInfo
        //instance.jobInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newJob', function() {
      it('should call newJob successfully', function(done) {
        //uncomment below and update the code to test newJob
        //instance.newJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('performTranscription', function() {
      it('should call performTranscription successfully', function(done) {
        //uncomment below and update the code to test performTranscription
        //instance.performTranscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('performTranslation', function() {
      it('should call performTranslation successfully', function(done) {
        //uncomment below and update the code to test performTranslation
        //instance.performTranslation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
