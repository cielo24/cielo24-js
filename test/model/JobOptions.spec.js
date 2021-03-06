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
    instance = new Cielo24.JobOptions();
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

  describe('JobOptions', function() {
    it('should create an instance of JobOptions', function() {
      // uncomment below and update the code to test JobOptions
      //var instance = new Cielo24.JobOptions();
      //expect(instance).to.be.a(Cielo24.JobOptions);
    });

    it('should have the property customerApprovalSteps (base name: "customer_approval_steps")', function() {
      // uncomment below and update the code to test the property customerApprovalSteps
      //var instance = new Cielo24.JobOptions();
      //expect(instance).to.be();
    });

    it('should have the property customerApprovalTool (base name: "customer_approval_tool")', function() {
      // uncomment below and update the code to test the property customerApprovalTool
      //var instance = new Cielo24.JobOptions();
      //expect(instance).to.be();
    });

    it('should have the property customMetadata (base name: "custom_metadata")', function() {
      // uncomment below and update the code to test the property customMetadata
      //var instance = new Cielo24.JobOptions();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new Cielo24.JobOptions();
      //expect(instance).to.be();
    });

    it('should have the property returnIwp (base name: "return_iwp")', function() {
      // uncomment below and update the code to test the property returnIwp
      //var instance = new Cielo24.JobOptions();
      //expect(instance).to.be();
    });

    it('should have the property generateMediaIntelligenceIwp (base name: "generate_media_intelligence_iwp")', function() {
      // uncomment below and update the code to test the property generateMediaIntelligenceIwp
      //var instance = new Cielo24.JobOptions();
      //expect(instance).to.be();
    });

    it('should have the property speakerId (base name: "speaker_id")', function() {
      // uncomment below and update the code to test the property speakerId
      //var instance = new Cielo24.JobOptions();
      //expect(instance).to.be();
    });

    it('should have the property audioDescription (base name: "audio_description")', function() {
      // uncomment below and update the code to test the property audioDescription
      //var instance = new Cielo24.JobOptions();
      //expect(instance).to.be();
    });

    it('should have the property onScreenText (base name: "on_screen_text")', function() {
      // uncomment below and update the code to test the property onScreenText
      //var instance = new Cielo24.JobOptions();
      //expect(instance).to.be();
    });

    it('should have the property musicLyrics (base name: "music_lyrics")', function() {
      // uncomment below and update the code to test the property musicLyrics
      //var instance = new Cielo24.JobOptions();
      //expect(instance).to.be();
    });

    it('should have the property customSpecialHandling (base name: "custom_special_handling")', function() {
      // uncomment below and update the code to test the property customSpecialHandling
      //var instance = new Cielo24.JobOptions();
      //expect(instance).to.be();
    });

  });

}));
