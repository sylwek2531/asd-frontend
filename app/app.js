(function ()
{
    'use strict';
    var module = angular.module('app', ['ngResource', 'ngRoute']);

    module.config(function ($provide, $routeProvider)
    {

        $routeProvider
                .when('/', {
                    templateUrl: 'view/fistLayout.html', controller: 'MainController', controllerAs: 'MainCtrl'

                })
                .otherwise({
                    redirectTo: '/'
                });
        //add routing here

    });
})();
