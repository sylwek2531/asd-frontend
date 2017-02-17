(function ()
{
    'use strict';
    function MainController(UserDAO)
    {
        var ctrl = this;
        ctrl.details = {name: ""};
        function init()
        {
            UserDAO.getUser().then(function (data)
            {
                ctrl.users = data.result;
            });
        }

        init();
        ctrl.saveUser = function ()
        {
            UserDAO.saveUser(ctrl.details).then(function (response)
            {
                init();
            })
        }


    }

    angular.module('app').controller('MainController', MainController)
})();
