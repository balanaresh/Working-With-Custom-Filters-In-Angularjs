/*
 Working With Filters in Angularjs 1.5
 (c) 2016 
 License: MIT
*/
myApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
        when('/',{
            'templateUrl': 'template-parts/home.html',
            controller: 'homeCTRL'
        }).
        when('/404', {
            templateUrl: 'template-parts/404.html',
        }).
        when('/shipping-policy', {
            templateUrl: 'template-parts/shipping-policy.html',
        }).
        when('/about-us', {
            templateUrl: 'template-parts/about-us.html',
        }).
        when('/products', {
            templateUrl: 'template-parts/products.html',
            controller: 'productsCTRL'
        }).
        when('/products/:productId', {
            templateUrl: 'template-parts/product.html',
            controller: 'productCTRL'
        }).
        otherwise({
            redirectTo: '/404'
        });
        // use the HTML5 History API
        $locationProvider.hashPrefix('!');
    }
]);