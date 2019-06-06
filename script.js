angular.module('hearthApp', [ 'ngSanitize'])



  .controller('hearthCtrl', function($scope, $http){
  

 
  $scope.playerClass = "Shaman";
  
  $scope.pclass = function(input){
    
    $scope.playerClass = input;
    $scope.apply();
    
  };

  $scope.newQuote = function()
  {
      $http.get('https://api.hearthstonejson.com/v1/15590/enUS/cards.collectible.json')
       .then(function(res){
          $scope.info = res.data;                
        });

   
  };
  
  $scope.newQuote();
  
});








$(function() {
    $('.nav-item a').on('click', function(){ 
        if($('.navbar-toggler').css('display') !='none'){
            $(".navbar-toggler").trigger( "click" );
        }
    });
});
