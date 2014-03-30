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
            .when('/products/:id',{
                controller : 'ProductController',
                templateUrl : '/templates/product_show.html',
            })
            .otherwise({
                redirectTo : '/'
            });
}]);
/*
[{"_id":"531668fcce5fb5df2ff89a9a","model":"XWDWS","brand":"SONY","description":"television","cat":"Electronics","subcat":"TV","__v":0,"_ranks":[],"images":["61evuTKNXjL._SL1500_.jpg","71uso7FdLvL._SL1500_.jpg","617AvgSF9BL._SL1500_.jpg"]}]
*/

Spare.controller('HomeController',['$scope', function($scope){ }]);

Spare.controller('ProductsController', ['$scope', '$http',
    function($scope, $http){
        $http.get('/products', {dataType: 'json', headers: {'Content-Type' : 'application/json'}, data:''})
            .success(function(data){
                $scope._products = data;
            });
    }
]);

Spare.controller('ProductController', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams){
        $http.get('/product/'+ $routeParams.id, {dataType: 'json', headers: {'Content-Type' : 'application/json'}, data:''})
            .success(function(data){
                $scope._products = data;
                for(var i in data[0])
                {
                    $scope[i] = data[0][i];

                    console.log(i + "----------" + data[0][i] )

                }
                
            });
    }
]);