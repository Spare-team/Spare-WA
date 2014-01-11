var Products = angular.module("products", ['ngRoute']);

Products.controller('product', ['$scope', '$http', 
	function($scope, $http){
		$http.get('/products/', {dataType: 'json', headers: {'Content-Type' : 'application/json'}, data:''})
			.success(function(data,status, header, config){
				$scope._products = data;	
			})
			.error(function(data, status, headers, config){
				alert("mamaste");
			});
	}
]);

Products.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
      /*  templateUrl: 'partials/phone-detail.html',*/
        controller: 'product'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
