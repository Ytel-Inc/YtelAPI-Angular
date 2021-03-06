/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Body9
 *
 * @constructor
 */
angular.module('YtelAPILib')
    .factory('Body9', ['BaseModel', Body9Model]);

    function Body9Model(BaseModel) {
        var Body9 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.transcriptionsid = this.getValue(obj.transcriptionsid);
        };

        Body9.prototype = new BaseModel();
        Body9.prototype.constructor = Body9;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Body9.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'transcriptionsid', realName: 'transcriptionsid' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Body9.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * The unique identifier for a transcription object.
         *
         * @return {string}
         */
        Body9.prototype.getTranscriptionsid = function () {
            return this.transcriptionsid;
        };
    
        /**
         * Setter for Transcriptionsid
         * 
         * @param {string} value 
         */
        Body9.prototype.setTranscriptionsid = function (value) {
            this.transcriptionsid = value;
        };
    
        return Body9;
    }

}(angular));
