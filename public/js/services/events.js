(function(angular) {
    'use strict';

    // Events service used for events REST endpoint
    var EventsService = [
        '$resource',
        function($resource) {
            return $resource('/api/v1/events/:_id', {_id: '@_id'}, {
                update: {
                    method: 'PUT'
                },
                search: {
                    method: 'GET',
                    isArray: true
                },
                spam: {
                    method: 'PUT',
                    url: '/api/v1/events/:_id/spam'
                }
            });
        }
    ];

    angular.module('startupwichita.services').factory('Events', EventsService);
})(window.angular);
