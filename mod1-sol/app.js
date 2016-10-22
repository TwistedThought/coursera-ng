(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.list = '';
  $scope.message = '';
  $scope.font = '';
  $scope.border = '';

  $scope.count = function () {
    var arr = $scope.list.split(',');
    var cnt = 0;
    for (var i = 0; i < arr.length; i++) {
    	if (arr[i].trim() != '') {
    		cnt++
    	}
    }
    return cnt;
  };

  $scope.showMessage = function (count) {
  	if ($scope.list == '') {
  		$scope.message = 'Please enter data first';
  		$scope.font = 'color: red'
  		$scope.border = 'border: 1px solid red'
  	}
  	else if (count <= 3) {
  		$scope.message = 'Enjoy!';
  		$scope.font = 'color: green'
  		$scope.border = 'border: 1px solid green'
  	}
  	else {
  		$scope.message = 'Too much!';
   		$scope.font = 'color: green'
  		$scope.border = 'border: 1px solid green'
  	};
  };
};

})();