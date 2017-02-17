(function(){

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController)

LunchCheckController.$inject=['$scope','$filter']
function LunchCheckController ($scope,$filter){
$scope.lunch="";

$scope.checkFood= function(){
var sep=",";
$scope.food= $scope.lunch.split(sep);
var numberOffood=$scope.food.length;

console.log('The original string is: "' + $scope.food + '"');
console.log('The array has ' +  numberOffood + ' elements: ' +  $scope.food[0]);
$scope.style= {
 "color" : "green",
 //"background-color" : "green",
 "border": "1px solid #f00",
  "border-color" : "green"
}

 if(numberOffood==1 &$scope.food[0]==""){
     console.log('The array has ' +  $scope.food.length + ' elements: ' +  $scope.food[0] );
      $scope.msg="Please enter data first"
      $scope.style= {
       "color" : "red",
       //"background-color" : "red",
       "border": "1px solid #f00",
       "border-color" : "red"
      }
 }
 else if(numberOffood<4 ){
   $scope.msg= "Enjoy!"

 }
 else{
  $scope.msg= "Too much!"
 }

};


}


//console.log('The separator is: "' + food + '"');
})();
