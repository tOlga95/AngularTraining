function MyCtrl($scope) {
    $scope.sum = function () {
        return parseInt($scope.first) + parseInt($scope.second);
    };
}