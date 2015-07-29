
    var app = angular.module('newSite', ['ui.router', 'ngAnimate']);
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
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
                templateUrl: 'AngularJSFiles/View/addUser.html',
                controller: 'addUserController'
            })
    }]);

    app.controller('homeController', ['$scope', function ($scope) {

    }]);

    app.controller('addUserController', ['$scope', 'listUsers', function ($scope, listUsers) {
        $scope.listUsers = listUsers;
        $scope.UserDetails = UserInfo;
        $scope.add = function (index) {
            listUsers.data.push($scope.UserDetails);
            console.log($scope.UserTitle);
            $scope.UserDetails = {};
        }
        $scope.delete = function (index) {
            listUsers.data.splice(index, 1);
        }
    }]);

    app.factory('listUsers', function () {
        var listUsers = {};
        listUsers.data = [{
            id: '1',
            title: 'Item 1'
        }, {
            id: '2',
            title: 'Item 2'
        }];
        return listUsers;
    });

    var UserInfo = {
            title: '',
            FirstName:'',
            LastName:'',
            Email:'',
            PhoneNumber:'',
    };




