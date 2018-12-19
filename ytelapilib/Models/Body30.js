/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Body30
 *
 * @constructor
 */
angular.module('YtelAPILib')
    .factory('Body30', ['BaseModel', Body30Model]);

    function Body30Model(BaseModel) {
        var Body30 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.email = this.getValue(obj.email);
        };

        Body30.prototype = new BaseModel();
        Body30.prototype.constructor = Body30;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Body30.prototype.mappingInfo = function() {
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
        Body30.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * The email address to be remove from the bounced email list.
         *
         * @return {string}
         */
        Body30.prototype.getEmail = function () {
            return this.email;
        };
    
        /**
         * Setter for Email
         * 
         * @param {string} value 
         */
        Body30.prototype.setEmail = function (value) {
            this.email = value;
        };
    
        return Body30;
    }

}(angular));
