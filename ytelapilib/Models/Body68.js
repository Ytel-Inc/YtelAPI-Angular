/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Body68
 *
 * @constructor
 */
angular.module('YtelAPILib')
    .factory('Body68', ['BaseModel', Body68Model]);

    function Body68Model(BaseModel) {
        var Body68 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.firstName = this.getValue(obj.firstName);
            this.lastName = this.getValue(obj.lastName);
            this.email = this.getValue(obj.email);
            this.friendlyName = this.getValue(obj.friendlyName);
            this.password = this.getValue(obj.password);
        };

        Body68.prototype = new BaseModel();
        Body68.prototype.constructor = Body68;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Body68.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'firstName', realName: 'FirstName' },
                { name: 'lastName', realName: 'LastName' },
                { name: 'email', realName: 'Email' },
                { name: 'friendlyName', realName: 'FriendlyName' },
                { name: 'password', realName: 'Password' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Body68.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * Sub account user first name
         *
         * @return {string}
         */
        Body68.prototype.getFirstName = function () {
            return this.firstName;
        };
    
        /**
         * Setter for FirstName
         * 
         * @param {string} value 
         */
        Body68.prototype.setFirstName = function (value) {
            this.firstName = value;
        };
    
        /**
         * sub account user last name
         *
         * @return {string}
         */
        Body68.prototype.getLastName = function () {
            return this.lastName;
        };
    
        /**
         * Setter for LastName
         * 
         * @param {string} value 
         */
        Body68.prototype.setLastName = function (value) {
            this.lastName = value;
        };
    
        /**
         * Sub account email address
         *
         * @return {string}
         */
        Body68.prototype.getEmail = function () {
            return this.email;
        };
    
        /**
         * Setter for Email
         * 
         * @param {string} value 
         */
        Body68.prototype.setEmail = function (value) {
            this.email = value;
        };
    
        /**
         * Descriptive name of the sub account
         *
         * @return {string}
         */
        Body68.prototype.getFriendlyName = function () {
            return this.friendlyName;
        };
    
        /**
         * Setter for FriendlyName
         * 
         * @param {string} value 
         */
        Body68.prototype.setFriendlyName = function (value) {
            this.friendlyName = value;
        };
    
        /**
         * The password of the sub account.  Please make sure to make as password that is at least 8 characters long,
         * contain a symbol, uppercase and a number.
         *
         * @return {string}
         */
        Body68.prototype.getPassword = function () {
            return this.password;
        };
    
        /**
         * Setter for Password
         * 
         * @param {string} value 
         */
        Body68.prototype.setPassword = function (value) {
            this.password = value;
        };
    
        return Body68;
    }

}(angular));
