/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Body50
 *
 * @constructor
 */
angular.module('YtelAPILib')
    .factory('Body50', ['BaseModel', Body50Model]);

    function Body50Model(BaseModel) {
        var Body50 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.page = this.getValue(obj.page);
            this.pagesize = this.getValue(obj.pagesize);
            this.status = this.getValue(obj.status);
            this.dateTranscribed = this.getValue(obj.dateTranscribed);
        };

        Body50.prototype = new BaseModel();
        Body50.prototype.constructor = Body50;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Body50.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'page', realName: 'page' },
                { name: 'pagesize', realName: 'pagesize' },
                { name: 'status', realName: 'status' },
                { name: 'dateTranscribed', realName: 'dateTranscribed' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Body50.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * The page count to retrieve from the total results in the collection. Page indexing starts at 1.
         *
         * @return {int|null}
         */
        Body50.prototype.getPage = function () {
            return this.page;
        };
    
        /**
         * Setter for Page
         * 
         * @param {int|null} value 
         */
        Body50.prototype.setPage = function (value) {
            this.page = value;
        };
    
        /**
         * The count of objects to return per page.
         *
         * @return {int|null}
         */
        Body50.prototype.getPagesize = function () {
            return this.pagesize;
        };
    
        /**
         * Setter for Pagesize
         * 
         * @param {int|null} value 
         */
        Body50.prototype.setPagesize = function (value) {
            this.pagesize = value;
        };
    
        /**
         * The state of the transcription.
         *
         * @return {StatusEnum|null}
         */
        Body50.prototype.getStatus = function () {
            return this.status;
        };
    
        /**
         * Setter for Status
         * 
         * @param {StatusEnum|null} value 
         */
        Body50.prototype.setStatus = function (value) {
            this.status = value;
        };
    
        /**
         * The date the transcription took place.
         *
         * @return {string|null}
         */
        Body50.prototype.getDateTranscribed = function () {
            return this.dateTranscribed;
        };
    
        /**
         * Setter for DateTranscribed
         * 
         * @param {string|null} value 
         */
        Body50.prototype.setDateTranscribed = function (value) {
            this.dateTranscribed = value;
        };
    
        return Body50;
    }

}(angular));