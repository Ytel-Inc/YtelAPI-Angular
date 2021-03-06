/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Body41
 *
 * @constructor
 */
angular.module('YtelAPILib')
    .factory('Body41', ['BaseModel', Body41Model]);

    function Body41Model(BaseModel) {
        var Body41 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.page = this.getValue(obj.page);
            this.pageSize = this.getValue(obj.pageSize);
            this.from = this.getValue(obj.from);
            this.to = this.getValue(obj.to);
            this.dateSent = this.getValue(obj.dateSent);
        };

        Body41.prototype = new BaseModel();
        Body41.prototype.constructor = Body41;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Body41.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'page', realName: 'Page' },
                { name: 'pageSize', realName: 'PageSize' },
                { name: 'from', realName: 'From' },
                { name: 'to', realName: 'To' },
                { name: 'dateSent', realName: 'DateSent' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Body41.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * The page count to retrieve from the total results in the collection. Page indexing starts at 1.
         *
         * @return {int|null}
         */
        Body41.prototype.getPage = function () {
            return this.page;
        };
    
        /**
         * Setter for Page
         * 
         * @param {int|null} value 
         */
        Body41.prototype.setPage = function (value) {
            this.page = value;
        };
    
        /**
         * Number of individual resources listed in the response per page
         *
         * @return {int|null}
         */
        Body41.prototype.getPageSize = function () {
            return this.pageSize;
        };
    
        /**
         * Setter for PageSize
         * 
         * @param {int|null} value 
         */
        Body41.prototype.setPageSize = function (value) {
            this.pageSize = value;
        };
    
        /**
         * Filter SMS message objects from this valid 10-digit phone number (E.164 format).
         *
         * @return {string|null}
         */
        Body41.prototype.getFrom = function () {
            return this.from;
        };
    
        /**
         * Setter for From
         * 
         * @param {string|null} value 
         */
        Body41.prototype.setFrom = function (value) {
            this.from = value;
        };
    
        /**
         * Filter SMS message objects to this valid 10-digit phone number (E.164 format).
         *
         * @return {string|null}
         */
        Body41.prototype.getTo = function () {
            return this.to;
        };
    
        /**
         * Setter for To
         * 
         * @param {string|null} value 
         */
        Body41.prototype.setTo = function (value) {
            this.to = value;
        };
    
        /**
         * Only list SMS messages sent in the specified date range
         *
         * @return {string|null}
         */
        Body41.prototype.getDateSent = function () {
            return this.dateSent;
        };
    
        /**
         * Setter for DateSent
         * 
         * @param {string|null} value 
         */
        Body41.prototype.setDateSent = function (value) {
            this.dateSent = value;
        };
    
        return Body41;
    }

}(angular));
