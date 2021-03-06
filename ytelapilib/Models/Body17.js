/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Body17
 *
 * @constructor
 */
angular.module('YtelAPILib')
    .factory('Body17', ['BaseModel', Body17Model]);

    function Body17Model(BaseModel) {
        var Body17 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.email = this.getValue(obj.email);
        };

        Body17.prototype = new BaseModel();
        Body17.prototype.constructor = Body17;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Body17.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'email', realName: 'Email' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Body17.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * A valid email address that is to be remove from the spam list.
         *
         * @return {string}
         */
        Body17.prototype.getEmail = function () {
            return this.email;
        };
    
        /**
         * Setter for Email
         * 
         * @param {string} value 
         */
        Body17.prototype.setEmail = function (value) {
            this.email = value;
        };
    
        return Body17;
    }

}(angular));
