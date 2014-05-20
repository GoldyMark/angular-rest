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
            $scope.resource_id = '';
            $scope.method = 'GET';

            $scope.url = {
                resource_base: 'rest/res/',
                resource_tree: 'rest/res/load/resourceTree',
                resource_definition: 'rest/res/definition/'
            };

            //tree
            $scope.tree_data = [];
            $scope.resource_tree = {};
            //ace
            $scope.resource_editor_model = '';
            $scope.result_editor_model = '';
            $scope.editorOptions = {
                // lineWrapping: true,
                lineNumbers: true,
                theme: 'twilight',
                // readOnly: 'nocursor',
                mode: 'xml'
            };

            //accordion-group status


            $scope.accordion_group_status = {
                one: {
                    open: true,
                    heading: 'Rest资源:'
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

            $scope.tree_handler = function(branch) {

                if (branch.data.isLeaf) {
                    $http({
                        method: $scope.method,
                        url: $scope.url.resource_definition + branch.data.rid
                    }).
                    success(function(data) {
                        $scope.resource_editor_model = data;
                        $scope.resource_id = branch.data.rid;
                        $scope.accordion_group_status.one.heading = 'Rest资源:' + $scope.resource_id;
                    }).
                    error(function(data) {
                        $window.alert("Request sqlResource failed!");
                    });

                }
            };
            $scope.fetch_tree = function() {
                $http({
                    method: $scope.method,
                    url: $scope.url.resource_tree
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

            //splice form
            $scope.radioModel = 'xml';
            $scope.splice = {
                filter: '',
                limit: '',
                offset: '',
                orderby: '',
                query: '',
                output: $scope.radioModel,
                link: '?'
            };
            $scope.splice_query = function() {

                if (!$scope.check_empty($scope.resource_id)) {
                    var val = $scope.url.resource_base + $scope.resource_id;
                    if (!$scope.check_empty($scope.splice.filter)) {
                        val = val + $scope.splice.link + '_filter=' + $scope.splice.filter;
                        $scope.splice.link = '&';
                    }
                    if (!$scope.check_empty($scope.splice.limit)) {
                        val = val + $scope.splice.link + '_limit=' + $scope.splice.limit;
                        $scope.splice.link = '&';
                    }
                    if (!$scope.check_empty($scope.splice.offset)) {
                        val = val + $scope.splice.link + '_offset=' + $scope.splice.offset;
                        $scope.splice.link = '&';
                    }
                    if (!$scope.check_empty($scope.splice.orderby)) {
                        val = val + $scope.splice.link + '_orderby=' + $scope.splice.orderby;
                        $scope.splice.link = '&';
                    }
                    val = val + $scope.splice.link + '_output=' + $scope.splice.output;

                    $scope.splice.link = '?';
                    $scope.splice.query = val;
                }
            };

            $scope.check_empty = function(str) {

                return str === null || str === '' || str.match(/^ *$/) !== null;

            };

            $scope.change = function() {

                $scope.splice.output = $scope.radioModel;

            };


        }
    ]);
