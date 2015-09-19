var app = angular.module("concertApp",[]);

app.controller("concertController", ["$http", "$scope", function($http, $scope) {
	//$scope.greeting = "howdy";

	$http.get("http://apis.is/concerts"). then(function(response) {
		$scope.data = response.data.results[0];
	}, function(response) {
		$scope.data = response;
	});
}]);