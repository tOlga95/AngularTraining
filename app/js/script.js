var underscore = angular.module('underscore', [])
underscore.factory('_', ['$window', function($window) {
  return $window._
}])
	
var app = angular.module('myApp', ['underscore'])
	
app
	.controller('MyCtrl', function ($scope, _) {
		$scope.sum = function () {
			var numbers = _.values(_.pick($scope, 'first', 'second'))
			if (_.isEmpty(numbers)) return 0
			return _.reduce(numbers, function (memo, num) { return memo + parseInt(num) }, 0)
		}
	})
	.directive('numbersSum', function() {
		return {
			restrict: 'E',
			templateUrl: "templates/Sum.html"
		}
	})