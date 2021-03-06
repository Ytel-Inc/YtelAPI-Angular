/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Body20
 *
 * @constructor
 */
angular.module('YtelAPILib')
    .factory('Body20', ['BaseModel', Body20Model]);

    function Body20Model(BaseModel) {
        var Body20 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.conferenceSid = this.getValue(obj.conferenceSid);
        };

        Body20.prototype = new BaseModel();
        Body20.prototype.constructor = Body20;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Body20.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'conferenceSid', realName: 'ConferenceSid' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Body20.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * The unique identifier of each conference resource
         *
         * @return {string}
         */
        Body20.prototype.getConferenceSid = function () {
            return this.conferenceSid;
        };
    
        /**
         * Setter for ConferenceSid
         * 
         * @param {string} value 
         */
        Body20.prototype.setConferenceSid = function (value) {
            this.conferenceSid = value;
        };
    
        return Body20;
    }

}(angular));
