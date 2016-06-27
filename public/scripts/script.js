var myApp = angular.module( 'myApp', [] );

myApp.controller( 'mondayController',[ '$scope', '$http', function( $scope, $http ){
  // test get user input
  $scope.whatAreWeTryingToDo = function(){
    console.log( 'in whatAreWeTryingToDo: ' + $scope.notATextArea );
  };
}]);
