/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Body25
 *
 * @constructor
 */
angular.module('YtelAPILib')
    .factory('Body25', ['BaseModel', Body25Model]);

    function Body25Model(BaseModel) {
        var Body25 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.email = this.getValue(obj.email);
        };

        Body25.prototype = new BaseModel();
        Body25.prototype.constructor = Body25;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Body25.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'email', realName: 'email' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Body25.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * A valid email address that is to be remove from the unsubscribe list.
         *
         * @return {string}
         */
        Body25.prototype.getEmail = function () {
            return this.email;
        };
    
        /**
         * Setter for Email
         * 
         * @param {string} value 
         */
        Body25.prototype.setEmail = function (value) {
            this.email = value;
        };
    
        return Body25;
    }

}(angular));
