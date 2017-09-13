myApp.config(function($stateProvider , $urlRouterProvider)

                  {

    $stateProvider

    .state('/' , {
        url: '/' ,
        templateUrl: 'login.html',

    })

    

    .when('/dashboard',{

        templateUrl: 'dashboard.html',

    })
    

});

