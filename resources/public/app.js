var app  = angular.module('app', []);

app.run(function($rootScope){
  var soc = new WebSocket("ws://" + window.location.host +"/jeki/chan");
  soc.onmessage = function(ev) {
    $rootScope.$apply(function (){
      var data = JSON.parse(ev.data)
      $rootScope[data.id] = data.data
      console.log(data)
    })
  };
})
