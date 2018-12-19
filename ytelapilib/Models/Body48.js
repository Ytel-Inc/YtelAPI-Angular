/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Body48
 *
 * @constructor
 */
angular.module('YtelAPILib')
    .factory('Body48', ['BaseModel', Body48Model]);

    function Body48Model(BaseModel) {
        var Body48 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.page = this.getValue(obj.page);
            this.pagesize = this.getValue(obj.pagesize);
            this.datecreated = this.getValue(obj.datecreated);
            this.callsid = this.getValue(obj.callsid);
        };

        Body48.prototype = new BaseModel();
        Body48.prototype.constructor = Body48;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Body48.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'page', realName: 'page' },
                { name: 'pagesize', realName: 'pagesize' },
                { name: 'datecreated', realName: 'Datecreated' },
                { name: 'callsid', realName: 'callsid' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Body48.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * The page count to retrieve from the total results in the collection. Page indexing starts at 1.
         *
         * @return {int|null}
         */
        Body48.prototype.getPage = function () {
            return this.page;
        };
    
        /**
         * Setter for Page
         * 
         * @param {int|null} value 
         */
        Body48.prototype.setPage = function (value) {
            this.page = value;
        };
    
        /**
         * The count of objects to return per page.
         *
         * @return {int|null}
         */
        Body48.prototype.getPagesize = function () {
            return this.pagesize;
        };
    
        /**
         * Setter for Pagesize
         * 
         * @param {int|null} value 
         */
        Body48.prototype.setPagesize = function (value) {
            this.pagesize = value;
        };
    
        /**
         * Filter results by creation date
         *
         * @return {string|null}
         */
        Body48.prototype.getDatecreated = function () {
            return this.datecreated;
        };
    
        /**
         * Setter for Datecreated
         * 
         * @param {string|null} value 
         */
        Body48.prototype.setDatecreated = function (value) {
            this.datecreated = value;
        };
    
        /**
         * The unique identifier for a call.
         *
         * @return {string|null}
         */
        Body48.prototype.getCallsid = function () {
            return this.callsid;
        };
    
        /**
         * Setter for Callsid
         * 
         * @param {string|null} value 
         */
        Body48.prototype.setCallsid = function (value) {
            this.callsid = value;
        };
    
        return Body48;
    }

}(angular));