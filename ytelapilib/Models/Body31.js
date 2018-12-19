/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Body31
 *
 * @constructor
 */
angular.module('YtelAPILib')
    .factory('Body31', ['BaseModel', Body31Model]);

    function Body31Model(BaseModel) {
        var Body31 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.offset = this.getValue(obj.offset);
            this.limit = this.getValue(obj.limit);
        };

        Body31.prototype = new BaseModel();
        Body31.prototype.constructor = Body31;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Body31.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'offset', realName: 'Offset' },
                { name: 'limit', realName: 'Limit' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Body31.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * The starting point of the list of bounced emails that should be returned.
         *
         * @return {string|null}
         */
        Body31.prototype.getOffset = function () {
            return this.offset;
        };
    
        /**
         * Setter for Offset
         * 
         * @param {string|null} value 
         */
        Body31.prototype.setOffset = function (value) {
            this.offset = value;
        };
    
        /**
         * The count of results that should be returned.
         *
         * @return {string|null}
         */
        Body31.prototype.getLimit = function () {
            return this.limit;
        };
    
        /**
         * Setter for Limit
         * 
         * @param {string|null} value 
         */
        Body31.prototype.setLimit = function (value) {
            this.limit = value;
        };
    
        return Body31;
    }

}(angular));
