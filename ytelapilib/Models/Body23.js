/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Body23
 *
 * @constructor
 */
angular.module('YtelAPILib')
    .factory('Body23', ['BaseModel', Body23Model]);

    function Body23Model(BaseModel) {
        var Body23 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.callSid = this.getValue(obj.callSid);
            this.record = this.getValue(obj.record);
            this.direction = this.getValue(obj.direction);
            this.timeLimit = this.getValue(obj.timeLimit);
            this.callBackUrl = this.getValue(obj.callBackUrl);
            this.fileformat = this.getValue(obj.fileformat);
        };

        Body23.prototype = new BaseModel();
        Body23.prototype.constructor = Body23;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Body23.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'callSid', realName: 'CallSid' },
                { name: 'record', realName: 'Record' },
                { name: 'direction', realName: 'Direction' },
                { name: 'timeLimit', realName: 'TimeLimit' },
                { name: 'callBackUrl', realName: 'CallBackUrl' },
                { name: 'fileformat', realName: 'Fileformat' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Body23.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * The unique identifier of each call resource
         *
         * @return {string}
         */
        Body23.prototype.getCallSid = function () {
            return this.callSid;
        };
    
        /**
         * Setter for CallSid
         * 
         * @param {string} value 
         */
        Body23.prototype.setCallSid = function (value) {
            this.callSid = value;
        };
    
        /**
         * Set true to initiate recording or false to terminate recording
         *
         * @return {bool}
         */
        Body23.prototype.getRecord = function () {
            return this.record;
        };
    
        /**
         * Setter for Record
         * 
         * @param {bool} value 
         */
        Body23.prototype.setRecord = function (value) {
            this.record = value;
        };
    
        /**
         * The leg of the call to record
         *
         * @return {DirectionEnum|null}
         */
        Body23.prototype.getDirection = function () {
            return this.direction;
        };
    
        /**
         * Setter for Direction
         * 
         * @param {DirectionEnum|null} value 
         */
        Body23.prototype.setDirection = function (value) {
            this.direction = value;
        };
    
        /**
         * Time in seconds the recording duration should not exceed
         *
         * @return {int|null}
         */
        Body23.prototype.getTimeLimit = function () {
            return this.timeLimit;
        };
    
        /**
         * Setter for TimeLimit
         * 
         * @param {int|null} value 
         */
        Body23.prototype.setTimeLimit = function (value) {
            this.timeLimit = value;
        };
    
        /**
         * URL consulted after the recording completes
         *
         * @return {string|null}
         */
        Body23.prototype.getCallBackUrl = function () {
            return this.callBackUrl;
        };
    
        /**
         * Setter for CallBackUrl
         * 
         * @param {string|null} value 
         */
        Body23.prototype.setCallBackUrl = function (value) {
            this.callBackUrl = value;
        };
    
        /**
         * Format of the recording file. Can be .mp3 or .wav
         *
         * @return {FileformatEnum|null}
         */
        Body23.prototype.getFileformat = function () {
            return this.fileformat;
        };
    
        /**
         * Setter for Fileformat
         * 
         * @param {FileformatEnum|null} value 
         */
        Body23.prototype.setFileformat = function (value) {
            this.fileformat = value;
        };
    
        return Body23;
    }

}(angular));
