var myApp = angular.module( 'myApp', [] );

myApp.controller( 'mondayController',[ '$scope', '$http', function( $scope, $http ){
  // test get user input
  $scope.saveMango = function(){
    console.log( 'in saveMango: ' + $scope.nameIn + " " + $scope.weightIn );
    var objectToSend={
      name: $scope.nameIn,
      weight: $scope.weightIn
    }; // end object
    $http({
      method:'POST',
      url:"/addMango",
      data: objectToSend
    }); // end http
  }; // end saveMango button click
}]); // end mondayController
