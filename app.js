var app = angular.module("concertApp",[]);

app.controller("concertController", ["$http", "$scope", function($http, $scope) {

	$http.get("http://apis.is/concerts"). then(function(response) {
		$scope.data = response.data.results;
	}, function(response) {
		$scope.data = response;
	});


}]);