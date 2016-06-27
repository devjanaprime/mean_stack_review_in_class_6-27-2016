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
    }).then( function(){
      $scope.getMangoes();
    }); // end http
  }; // end saveMango button click

  $scope.getMangoes = function(){
    console.log( 'in getMangoes' );
    $http({
      method:'GET',
      url:'/getMangoes'
    }).then( function( response ){ // run this as a function after GET, the res.send is held in "response"
      $scope.mangoes=response.data;
      console.log( '$scope.mangoes: ' + $scope.mangoes );
    }); // end http
  }; // end get mangoes

  $scope.getMangoes();

}]); // end mondayController
