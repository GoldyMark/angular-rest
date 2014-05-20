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
            $scope.tree_data = [];
            $scope.method = 'GET';
            $scope.tree_url = 'rest/res/load/resourceTree';
            $scope.resource_tree = {};
            //xml display textarea
            $scope.resource_editor_model = '';
            $scope.result_editor_model = '';
            $scope.resource_base_url = 'rest/res/definition/';

            $scope.tree_handler = function(branch) {

                if (branch.data.isLeaf) {
                    $http({
                        method: $scope.method,
                        url: $scope.resource_base_url + branch.data.rid
                    }).
                    success(function(data) {
                        $scope.resource_editor_model = data;
                        $window.alert($scope.resource_base_url + branch.data.rid);
                    }).
                    error(function(data) {
                        $window.alert("Request sqlResource failed!");
                    });
                }
            };
            $scope.fetch_tree = function() {
                $http({
                    method: $scope.method,
                    url: $scope.tree_url
                }).
                success(function(data) {
                    $scope.tree_data = data.treedata;
                }).
                error(function(data) {
                    $scope.tree_data = [];
                    $window.alert("Request failed!");
                });
            };
            $scope.fetch_tree();

            $scope.editorOptions = {
                // lineWrapping: true,
                lineNumbers: true,
                theme: 'twilight',
                // readOnly: 'nocursor',
                mode: 'xml'
            };
            $scope.radioModel = 'Left';
            //accordion-group status
            var rest_resource = 'Rest资源:';
            $scope.accordion_group_status = {
                one: {
                    open: true,
                    heading: rest_resource
                },
                two: {
                    open: true,
                    heading: '数据查询'
                },
                three: {
                    open: false,
                    heading: '其他'
                }
            }
        }
    ]);
