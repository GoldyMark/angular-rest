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
			//tree
			$scope.my_data = [];
			$scope.method = 'GET';
			$scope.url = 'data/treedata.json';

			$scope.fetch = function() {
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

			//xml display textarea
			$scope.editorOptions = {
				lineWrapping: true,
				lineNumbers: true,
				theme: 'twilight',
				readOnly: 'nocursor',
				mode: 'xml',
			};
			//accordion-group status
			$scope.accordion_group_status = {
				one: {
					open: true,
					heading: 'Empty'
				},
				two: {
					open: true,
					heading: 'Empty'
				},
				three: {
					open: true,
					heading: 'Empty'
				}

			}



		}
	]);