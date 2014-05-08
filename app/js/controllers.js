'use strict';

/* Controllers 

angular.module('restUI.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);

*/

angular.module('restUI.controllers', [])
	.controller('AbnTestController', ['$scope', '$http', '$window',
		function($scope, $http, $window) {
			$scope.my_data = [];
			$scope.method = 'GET';
			$scope.url = 'data/treedata.json';

			$scope.fetch = function() {
				$scope.code = null;
				$scope.response = null;

				$http({
					method: $scope.method,
					url: $scope.url
				}).
				success(function(data) {
					$scope.my_data = data.treedata;
				}).
				error(function(data) {
					$scope.my_data = [];
					$window.alert("Request failed!");
				});
			};

			$scope.fetch();

		}
	]);