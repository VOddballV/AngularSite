
    var app = angular.module('newSite', ['ui.router', 'ngAnimate']);
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'AngularJSFiles/View/home.html',
                controller: 'homeController'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'AngularJSFiles/View/about.html'
            })
            .state('addUser', {
                url: '/AddUser',
                templateUrl: 'AngularJSFiles/View/addUser.html'
            })
    });

    app.controller('homeController', function ($scope, listUsers) {
        $scope.listUsers = listusers;
        $scope.UserInfoDetails = UserInfo;

        $scope.add = function (index) {
            listUsers.data.push(UserInfoDetails);
        }
    });
    app.factory("listUsers", function () {
        var listUsers = {};
        listUsers.data = [{
            id: "1",
            title: "Item 1"
        }, {
            id: "2",
            title: "Item 2"
        }, {
            id: "3",
            title: "Item 3"
        }, {
            id: "4",
            title: "Item 4"
        }];
        return listUsers;
    });
    var UserInfo = {
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: ''
    }



