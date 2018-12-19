/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

angular.module('YtelAPILib')
    .factory('SubAccountController', ['$q',
        'Configuration',
        'HttpClient',
        'APIHelper',
        'BaseController',
        SubAccountController
    ]);

    function SubAccountController($q, Configuration, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * Create a sub user account under the parent account
             *
             * @param {string} firstName Sub account user first name
             * @param {string} lastName sub account user last name
             * @param {string} email Sub account email address
             * @param {string} friendlyName Descriptive name of the sub account
             * @param {string} password The password of the sub account.  Please make sure to make as password that
             * is at least 8 characters long, contain a symbol, uppercase and a number.
             *
             * @return {promise<String>}
             */
            createSubaccount: function (firstName, lastName, email, friendlyName, password) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/user/createsubaccount.json';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'FirstName': firstName,
                    'LastName': lastName,
                    'Email': email,
                    'FriendlyName': friendlyName,
                    'Password': password
                };

                // Remove null values
                APIHelper.cleanObject(_form);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    username: Configuration.basicAuthUserName,
                    password: Configuration.basicAuthPassword,
                    form: _form,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    _deffered.reject(APIHelper.appendContext({
                        errorMessage:'HTTP Response Not OK',
                        errorCode: _result.code,
                        errorResponse: _result.message
                    }, _result.getContext()));
                });
                
                return _deffered.promise;
            },
            /**
             * Delete sub account or merge numbers into parent
             *
             * @param {string} subAccountSID The SubaccountSid to be deleted
             * @param {MergeNumberEnum} mergeNumber 0 to delete or 1 to merge numbers to parent account.
             *
             * @return {promise<String>}
             */
            createDeleteSubaccount: function (subAccountSID, mergeNumber) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/user/deletesubaccount.json';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'SubAccountSID': subAccountSID,
                    'MergeNumber': (mergeNumber !== null) ? mergeNumber : null
                };

                // Remove null values
                APIHelper.cleanObject(_form);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    username: Configuration.basicAuthUserName,
                    password: Configuration.basicAuthPassword,
                    form: _form,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    _deffered.reject(APIHelper.appendContext({
                        errorMessage:'HTTP Response Not OK',
                        errorCode: _result.code,
                        errorResponse: _result.message
                    }, _result.getContext()));
                });
                
                return _deffered.promise;
            },
            /**
             * Suspend or unsuspend
             *
             * @param {string} subAccountSID The SubaccountSid to be activated or suspended
             * @param {ActivateEnum} activate 0 to suspend or 1 to activate
             *
             * @return {promise<String>}
             */
            createToggleSubaccountStatus: function (subAccountSID, activate) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/user/subaccountactivation.json';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'SubAccountSID': subAccountSID,
                    'Activate': (activate !== null) ? activate : null
                };

                // Remove null values
                APIHelper.cleanObject(_form);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    username: Configuration.basicAuthUserName,
                    password: Configuration.basicAuthPassword,
                    form: _form,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    _deffered.reject(APIHelper.appendContext({
                        errorMessage:'HTTP Response Not OK',
                        errorCode: _result.code,
                        errorResponse: _result.message
                    }, _result.getContext()));
                });
                
                return _deffered.promise;
            }
        };
    }

}(angular));
