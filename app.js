var app = angular.module("concertApp",[]);

// app.controller("concertController", ["$http", "$scope", function($http, $scope) {

// 	$http.get("http://apis.is/concerts"). then(function(response) {
// 		$scope.data = response.data.results;
// 	}, function(response) {
// 		$scope.data = response;
// 	});


// }]);

app.controller('concertController', ['$scope', 'concerts', 'carpools', function($scope, concerts, carpools) {
  {concerts.success(function(data) {
    $scope.concerts = data.results;
  })};
  {carpools.success(function(data) {
    $scope.carpools = data.results;
  })};
}]);

app.factory('concerts', ['$http', function($http) {
  return $http.get('http://apis.is/concerts')
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
}]);

app.factory('carpools', ['$http', function($http) {
  return $http.get('http://apis.is/rides/samferda-drivers/')
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
}]);