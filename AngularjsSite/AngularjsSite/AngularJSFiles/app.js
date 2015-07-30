
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

    app.controller('homeController', ['$scope', 'MenuItems', 'subMenuItems', function ($scope, MenuItems, subMenuItems) {
        $scope.MenuItems = MenuItems;
        $scope.subMenuItems = subMenuItems;
        $scope.menuButtonClick = function (id) {
            for (i = 0; i < MenuItems.data.length; i++) {
                console.log("id = " + id)
                console.log("i = " + i)
                console.log(i==id)
                if (i == id) {
                    $scope.MenuItems.data[i].show = true;
                }
                else {
                    $scope.MenuItems.data[i].show = false;
                }
            }
        }
    }]);

    app.controller('addUserController', ['$scope', 'listUsers', function ($scope, listUsers) {
        $scope.listUsers = listUsers;
        $scope.UserDetails = UserInfo;
        console.log($scope.UserDetails);
        $scope.add = function (index) {
            listUsers.data.push($scope.UserDetails);
            console.log($scope.UserDetails);
            $scope.UserDetails = null;
        }
        $scope.delete = function (index) {
            listUsers.data.splice(index, 1);
        }
    }]);

    app.factory('listUsers', function () {
        var listUsers = {};
        listUsers.data = [{
            id: '0',
            title: 'Item 1'
        }, {
            id: '1',
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

    app.factory('MenuItems', function () {
        var MenuItems = {};
        MenuItems.data = [{
            id: '0',
            title: 'Item 1',
            show: false
        }, {
            id: '1',
            title: 'Item 2',
            show: false
        }, {
            id: '2',
            title: 'Item 3',
            show: false
        }];
        return MenuItems;
    });

    app.factory('subMenuItems', function () {
        var subMenuItems = {};
        subMenuItems.data = [{
            id: '0',
            title: 'subItem 1',
            show: false
        }, {
            id: '1',
            title: 'subItem 2',
            show: false
        }, {
            id: '2',
            title: 'subItem 3',
            show: false
        }];
        return subMenuItems;
    });



