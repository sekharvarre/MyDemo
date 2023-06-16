(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.lunchItems = '';
      $scope.message = '';
  
      $scope.checkLunchItems = function () {
        if ($scope.lunchItems.trim() === '') {
          $scope.message = 'Please enter data first';
        } else {
          var items = $scope.lunchItems.split(',');
          var itemCount = countNonEmptyItems(items);
  
          if (itemCount === 0) {
            $scope.message = 'Please enter data first';
          } else if (itemCount <= 3) {
            $scope.message = 'Enjoy!';
          } else {
            $scope.message = 'Too much!';
          }
        }
      };
  
      function countNonEmptyItems(items) {
        var count = 0;
        for (var i = 0; i < items.length; i++) {
          if (items[i].trim() !== '') {
            count++;
          }
        }
        return count;
      }
    }
  })();
  