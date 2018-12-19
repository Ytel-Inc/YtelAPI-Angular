/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Body18
 *
 * @constructor
 */
angular.module('YtelAPILib')
    .factory('Body18', ['BaseModel', Body18Model]);

    function Body18Model(BaseModel) {
        var Body18 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.email = this.getValue(obj.email);
        };

        Body18.prototype = new BaseModel();
        Body18.prototype.constructor = Body18;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Body18.prototype.mappingInfo = function() {
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
        Body18.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * The email address to be remove from the blocked list.
         *
         * @return {string}
         */
        Body18.prototype.getEmail = function () {
            return this.email;
        };
    
        /**
         * Setter for Email
         * 
         * @param {string} value 
         */
        Body18.prototype.setEmail = function (value) {
            this.email = value;
        };
    
        return Body18;
    }

}(angular));