/*
 Working With Filters in Angularjs 1.5
 (c) 2016 
 License: MIT
*/
myApp.controller('homeCTRL', ['siteContent','$rootScope', '$scope', function(content, $rootScope, $scope, $log){
	$rootScope.content = content;
	$scope.slider = content.home.slider;
	$scope.mostview_products = content.home.mostviewed_products;
}]);

myApp.controller('productsCTRL', ['siteContent','$rootScope', '$scope', function(content, $rootScope, $scope){
	$rootScope.content = $rootScope.content || content;
	$scope.products = {};
	$scope.products.list = content.products.list;
	$scope.products.filters = [];
	for(filter in content.products.filters){
		for(sf in content.products.filters[filter]){
			$scope.products.filters[sf] = content.products.filters[filter][sf];
		}
	}
}]);

myApp.controller('productCTRL', ['siteContent', '$rootScope', '$scope', '$routeParams', '$location', '$sce', function(content, $rootScope, $scope, $routeParams, $location,$sce){
	$rootScope.content = $rootScope.content || content;
	if(arrayKeyExists($routeParams.productId,$rootScope.content.products.list).status){
		$scope.product = $rootScope.content.products.list[$routeParams.productId];
		$scope.product.description = $sce.trustAsHtml($scope.product.description);
		console.log($scope.product);
	}
	else{
		$location.path('#!/404');
	}
}])