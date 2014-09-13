console.log('here');
// var source = new EventSource("/async");
// source.onmessage = function(ev) {
//   alert('here')
//   console.log("SSE:", ev)
// }

var app  = angular.module('app', []);

app.controller('main', function($scope) {
    $scope.cts = {}
    var soc = new WebSocket("ws://localhost:8080/async");
    console.log(soc);
    soc.onmessage = function(ev) {
        $scope.$apply(function (){
            var data = JSON.parse(ev.data)
            console.log('soc', data);
            if(data.name){
              $scope.weather = data
            }
        })
    };

    console.log($scope)
});
