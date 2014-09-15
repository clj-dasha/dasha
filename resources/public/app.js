var app  = angular.module('app', []);

app.run(function($rootScope, $interval){
  var soc = new WebSocket("ws://" + window.location.host +"/jeki/chan");
  soc.onmessage = function(ev) {
    $rootScope.$apply(function (){
      var data = JSON.parse(ev.data)
      $rootScope[data.id] = data.data
      console.log(data.id, data.data)
    })
  };

  $rootScope.window = 0
  $interval(function(){
    w = $rootScope.window + 1
    if(w > parseInt($rootScope.windowNum)){ w = 0 }
    console.log(w)
    $rootScope.window = w
  }, 10000)
})
