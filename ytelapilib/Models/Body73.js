/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Body73
 *
 * @constructor
 */
angular.module('YtelAPILib')
    .factory('Body73', ['BaseModel', Body73Model]);

    function Body73Model(BaseModel) {
        var Body73 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.numberType = this.getValue(obj.numberType);
            this.areaCode = this.getValue(obj.areaCode);
            this.quantity = this.getValue(obj.quantity);
            this.leftover = this.getValue(obj.leftover);
        };

        Body73.prototype = new BaseModel();
        Body73.prototype.constructor = Body73;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Body73.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'numberType', realName: 'NumberType' },
                { name: 'areaCode', realName: 'AreaCode' },
                { name: 'quantity', realName: 'Quantity' },
                { name: 'leftover', realName: 'Leftover' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Body73.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * The capability the number supports.
         *
         * @return {NumberType2Enum}
         */
        Body73.prototype.getNumberType = function () {
            return this.numberType;
        };
    
        /**
         * Setter for NumberType
         * 
         * @param {NumberType2Enum} value 
         */
        Body73.prototype.setNumberType = function (value) {
            this.numberType = value;
        };
    
        /**
         * Specifies the area code for the returned list of available numbers. Only available for North American
         * numbers.
         *
         * @return {string}
         */
        Body73.prototype.getAreaCode = function () {
            return this.areaCode;
        };
    
        /**
         * Setter for AreaCode
         * 
         * @param {string} value 
         */
        Body73.prototype.setAreaCode = function (value) {
            this.areaCode = value;
        };
    
        /**
         * A positive integer that tells how many number you want to buy at a time.
         *
         * @return {string}
         */
        Body73.prototype.getQuantity = function () {
            return this.quantity;
        };
    
        /**
         * Setter for Quantity
         * 
         * @param {string} value 
         */
        Body73.prototype.setQuantity = function (value) {
            this.quantity = value;
        };
    
        /**
         * If desired quantity is unavailable purchase what is available .
         *
         * @return {string|null}
         */
        Body73.prototype.getLeftover = function () {
            return this.leftover;
        };
    
        /**
         * Setter for Leftover
         * 
         * @param {string|null} value 
         */
        Body73.prototype.setLeftover = function (value) {
            this.leftover = value;
        };
    
        return Body73;
    }

}(angular));