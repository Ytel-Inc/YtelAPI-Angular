/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Body58
 *
 * @constructor
 */
angular.module('YtelAPILib')
    .factory('Body58', ['BaseModel', Body58Model]);

    function Body58Model(BaseModel) {
        var Body58 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.page = this.getValue(obj.page);
            this.pagesize = this.getValue(obj.pagesize);
            this.from = this.getValue(obj.from);
            this.shortcode = this.getValue(obj.shortcode);
            this.datecreated = this.getValue(obj.datecreated);
        };

        Body58.prototype = new BaseModel();
        Body58.prototype.constructor = Body58;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Body58.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'page', realName: 'page' },
                { name: 'pagesize', realName: 'pagesize' },
                { name: 'from', realName: 'From' },
                { name: 'shortcode', realName: 'Shortcode' },
                { name: 'datecreated', realName: 'Datecreated' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Body58.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * The page count to retrieve from the total results in the collection. Page indexing starts at 1.
         *
         * @return {int|null}
         */
        Body58.prototype.getPage = function () {
            return this.page;
        };
    
        /**
         * Setter for Page
         * 
         * @param {int|null} value 
         */
        Body58.prototype.setPage = function (value) {
            this.page = value;
        };
    
        /**
         * Number of individual resources listed in the response per page
         *
         * @return {int|null}
         */
        Body58.prototype.getPagesize = function () {
            return this.pagesize;
        };
    
        /**
         * Setter for Pagesize
         * 
         * @param {int|null} value 
         */
        Body58.prototype.setPagesize = function (value) {
            this.pagesize = value;
        };
    
        /**
         * Only list SMS messages sent from this number
         *
         * @return {string|null}
         */
        Body58.prototype.getFrom = function () {
            return this.from;
        };
    
        /**
         * Setter for From
         * 
         * @param {string|null} value 
         */
        Body58.prototype.setFrom = function (value) {
            this.from = value;
        };
    
        /**
         * Only list SMS messages sent to Shortcode
         *
         * @return {string|null}
         */
        Body58.prototype.getShortcode = function () {
            return this.shortcode;
        };
    
        /**
         * Setter for Shortcode
         * 
         * @param {string|null} value 
         */
        Body58.prototype.setShortcode = function (value) {
            this.shortcode = value;
        };
    
        /**
         * Only list SMS messages sent in the specified date MAKE REQUEST
         *
         * @return {string|null}
         */
        Body58.prototype.getDatecreated = function () {
            return this.datecreated;
        };
    
        /**
         * Setter for Datecreated
         * 
         * @param {string|null} value 
         */
        Body58.prototype.setDatecreated = function (value) {
            this.datecreated = value;
        };
    
        return Body58;
    }

}(angular));