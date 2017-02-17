(function ()
{
    'use strict';
    function UserDAO($resource)
    {
        var userApi = $resource('/api/user');
        return {
            getUser: function ()
            {
                return userApi.get().$promise
            }, saveUser: function (user)
            {
                return userApi.save(user).$promise
            }
        }
    }

    angular.module('app').service('UserDAO', UserDAO);
})();
