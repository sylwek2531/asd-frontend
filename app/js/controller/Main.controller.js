(function ()
{
    'use strict';
    function MainController(UserDAO)
    {
        var ctrl = this;
        ctrl.details = {name: ""};
        function  fetchUsers()
        {
            UserDAO.getUser().then(function (data)
            {
                ctrl.users = data.result;
            });
        }

        fetchUsers();
        ctrl.saveUser = function ()
        {
            UserDAO.saveUser(ctrl.details).then(function (response)
            {
                fetchUsers();
            })
        }


    }

    angular.module('app').controller('MainController', MainController)
})();
