var Spare = angular.module("Spare", ['ngRoute']);

Spare.config(['$routeProvider',
    function($routeProvider){
        $routeProvider
            .when('/',{      
                controller : 'HomeController',          
                templateUrl : '/templates/welcome.html',
            })
            .when('/products',{
                controller : 'ProductsController',
                templateUrl : '/templates/products_all.html',
            })
            .otherwise({
                redirectTo : '/'
            });
}]);


Spare.controller('HomeController',['$scope', function($scope){ }]);

Spare.controller('ProductsController', ['$scope', '$http',
    function($scope, $http){
        $http.get('/products', {dataType: 'json', headers: {'Content-Type' : 'application/json'}, data:''})
            .success(function(data){
                $scope._products = data;
            });
    }
]);