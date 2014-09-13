console.log('here');
// var source = new EventSource("/async");
// source.onmessage = function(ev) {
//   alert('here')
//   console.log("SSE:", ev)
// }

var soc = new WebSocket("ws://localhost:8080/async");
console.log(soc);
soc.onopen = function() {
  console.log('open');
  soc.send('hi');
};
soc.onmessage = function(ev) {
  console.log('>>>>>', ev);
};
