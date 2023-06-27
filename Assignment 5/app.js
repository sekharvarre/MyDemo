angular.module('RestaurantApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'signup.html',
        controller: 'SignUpController'
      })
      .when('/myinfo', {
        templateUrl: 'myinfo.html',
        controller: 'MyInfoController'
      })
      .otherwise({
        redirectTo: '/signup'
      });
  })
  .controller('SignUpController', function ($scope, $http) {
    $scope.form = {};
    $scope.favoriteItem = {};

    $scope.submitForm = function () {
      if ($scope.signupForm.$valid) {
        var categoryShortName = $scope.form.favoriteItem.short_name;

        $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json')
          .then(function (response) {
            if (response.data !== null) {
              $scope.favoriteItem = response.data;
              // Save user's preference using a service or any desired approach
              // Example: MyInfoService.saveFavoriteItem($scope.favoriteItem);
              $scope.saved = true;
            } else {
              $scope.invalidFavorite = true;
            }
          });
      }
    };
  })
  .controller('MyInfoController', function ($scope) {
    // Retrieve user's preference from service or any desired approach
    // Example: var favoriteItem = MyInfoService.getFavoriteItem();
    // $scope.favoriteItem = favoriteItem;
    // Note: You'll need to implement the service and storage mechanism
  });
