
// Create a new angularjs module.
var searchApp = angular.module('searchapp', []);




// Register a new controller to the searchapp
searchApp.controller('searchController', ['$scope', '$http', function($scope, $http) {
        // http request to get user data.
	$http.get('data.json').success(function(data)
		{
		     console.log(data);
		     $scope.users = data;
		});
	
}])

// Creating simple custom directive.
searchApp.directive('searchData', function()
{
	return {
	  restrict: 'A',  // A -- Only matches attribute name.
	  templateUrl: 'data.html' 
};
});



