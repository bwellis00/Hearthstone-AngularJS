angular.module('hearthApp', [ 'ngSanitize'])



  .controller('hearthCtrl', function($scope, $http){
  

 
  $scope.cardClass = "Shaman";
  
  $scope.pclass = function(input){
    
    $scope.cardClass = input;
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
