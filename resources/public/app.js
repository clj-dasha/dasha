var app  = angular.module('app', []);

app.controller('main', function($scope) {
  var soc = new WebSocket("ws://" + window.location.host +"/jeki/chan");
  soc.onmessage = function(ev) {
    $scope.$apply(function (){
      $scope.weather = JSON.parse(ev.data)
      console.log($scope.weather)
    })
  };
});
