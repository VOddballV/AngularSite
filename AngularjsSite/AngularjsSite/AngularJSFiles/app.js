(function () {
    var app = angular.module('newSite', ['ui.router', 'ngAnimate']);
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'AngularJSFiles/View/home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'AngularJSFiles/View/about.html'
            })
    });

    app.controller('StoreController', function () {
        this.products = items;
    });
    var items = [
        {
            name: 'name1'
        },
        {
            name: 'name2'
        },
        {
            name: 'name3'
        },
        {
            name: 'name4'
        },
        {
            name: 'name5'
        },
        {
            name: 'name6'
        },
        {
            name: 'name7'
        }
    ];
})();


