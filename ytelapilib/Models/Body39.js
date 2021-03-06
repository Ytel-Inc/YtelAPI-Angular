/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Body39
 *
 * @constructor
 */
angular.module('YtelAPILib')
    .factory('Body39', ['BaseModel', Body39Model]);

    function Body39Model(BaseModel) {
        var Body39 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.page = this.getValue(obj.page);
            this.pagesize = this.getValue(obj.pagesize);
            this.from = this.getValue(obj.from);
            this.shortcode = this.getValue(obj.shortcode);
        };

        Body39.prototype = new BaseModel();
        Body39.prototype.constructor = Body39;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Body39.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'page', realName: 'page' },
                { name: 'pagesize', realName: 'pagesize' },
                { name: 'from', realName: 'from' },
                { name: 'shortcode', realName: 'Shortcode' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Body39.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * The page count to retrieve from the total results in the collection. Page indexing starts at 1.
         *
         * @return {int|null}
         */
        Body39.prototype.getPage = function () {
            return this.page;
        };
    
        /**
         * Setter for Page
         * 
         * @param {int|null} value 
         */
        Body39.prototype.setPage = function (value) {
            this.page = value;
        };
    
        /**
         * Number of individual resources listed in the response per page
         *
         * @return {int|null}
         */
        Body39.prototype.getPagesize = function () {
            return this.pagesize;
        };
    
        /**
         * Setter for Pagesize
         * 
         * @param {int|null} value 
         */
        Body39.prototype.setPagesize = function (value) {
            this.pagesize = value;
        };
    
        /**
         * From Number to Inbound ShortCode
         *
         * @return {string|null}
         */
        Body39.prototype.getFrom = function () {
            return this.from;
        };
    
        /**
         * Setter for From
         * 
         * @param {string|null} value 
         */
        Body39.prototype.setFrom = function (value) {
            this.from = value;
        };
    
        /**
         * Only list messages sent to this Short Code
         *
         * @return {string|null}
         */
        Body39.prototype.getShortcode = function () {
            return this.shortcode;
        };
    
        /**
         * Setter for Shortcode
         * 
         * @param {string|null} value 
         */
        Body39.prototype.setShortcode = function (value) {
            this.shortcode = value;
        };
    
        return Body39;
    }

}(angular));
