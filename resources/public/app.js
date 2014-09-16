$(function(){
  var stack = []
  var soc = new WebSocket("ws://" + window.location.host +"/jeki/chan");

  function render(stack){
    for (var i=0; i< 4; i++){
      d = stack[i]
      if(d){
        h = (i == 3 ? d.full : d.summary)
        $('#i-' + (i+1)).html(h).css({backgroundColor: d.color || "gray"})
      }
    }
  }
  soc.onmessage = function(ev) {
    var data = JSON.parse(ev.data)
    stack.unshift(data)
    stack = stack.splice(0, 4)
    console.log(stack)
    render(stack)
  };
})
