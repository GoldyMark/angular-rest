'use strict';

/* Controllers 

angular.module('restUI.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);

*/

angular.module('restUI.controllers', [])
	.controller('AbnTestController', ['$scope',
		function($scope) {
			var treedata_avm = [{
				label: 'Animal',
				children: [{
					label: 'Dog',
					data: {
						description: "man's best friend"
					}
				}, {
					label: 'Cat',
					data: {
						description: "Felis catus"
					}
				}, {
					label: 'Hippopotamus',
					data: {
						description: "hungry, hungry"
					}
				}, {
					label: 'Chicken',
					children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
				}]
			}, {
				label: 'Animal',
				children: [{
					label: 'Dog',
					data: {
						description: "man's best friend"
					}
				}, {
					label: 'Cat',
					data: {
						description: "Felis catus"
					}
				}, {
					label: 'Hippopotamus',
					data: {
						description: "hungry, hungry"
					}
				}, {
					label: 'Chicken',
					children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
				}]
			}, {
				label: 'Animal',
				children: [{
					label: 'Dog',
					data: {
						description: "man's best friend"
					}
				}, {
					label: 'Cat',
					data: {
						description: "Felis catus"
					}
				}, {
					label: 'Hippopotamus',
					data: {
						description: "hungry, hungry"
					}
				}, {
					label: 'Chicken',
					children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
				}]
			}, {
				label: 'Animal',
				children: [{
					label: 'Dog',
					data: {
						description: "man's best friend"
					}
				}, {
					label: 'Cat',
					data: {
						description: "Felis catus"
					}
				}, {
					label: 'Hippopotamus',
					data: {
						description: "hungry, hungry"
					}
				}, {
					label: 'Chicken',
					children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
				}]
			}, {
				label: 'Animal',
				children: [{
					label: 'Dog',
					data: {
						description: "man's best friend"
					}
				}, {
					label: 'Cat',
					data: {
						description: "Felis catus"
					}
				}, {
					label: 'Hippopotamus',
					data: {
						description: "hungry, hungry"
					}
				}, {
					label: 'Chicken',
					children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
				}]
			}, {
				label: 'Animal',
				children: [{
					label: 'Dog',
					data: {
						description: "man's best friend"
					}
				}, {
					label: 'Cat',
					data: {
						description: "Felis catus"
					}
				}, {
					label: 'Hippopotamus',
					data: {
						description: "hungry, hungry"
					}
				}, {
					label: 'Chicken',
					children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
				}]
			}];
			$scope.my_data = treedata_avm;
		}
	]);