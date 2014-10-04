(function(angular) {
    'use strict';

    // Startup Resources service used for resources REST endpoint
    var resourcesFactory = [
        '$resource',
        function($resource) {
            return $resource('/api/v1/resources/:_id', {_id: '@_id'}, {
                update: {
                    method: 'PUT'
                },
                search: {
                    method: 'GET',
                    isArray: true
                },
                spam: {
                    method: 'PUT',
                    url: '/api/v1/resources/:_id/spam'
                }
            });
        }
    ];

    angular.module('startupwichita.services').factory('Resources', resourcesFactory);
})(window.angular);
