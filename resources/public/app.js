$(function(){
  var soc = new WebSocket("ws://" + window.location.host +"/jeki/chan");
  var stop = false;
  stack = window.stack

  $('body').click(function(){
    stop = !stop
    console.log('Stop', stop)
  })

  function render(stack){
    for (var i=0; i< 4; i++){
      d = stack[i]
      if(d){
        h = (i == 3 ? d.full : d.summary)
        $('#i-' + (i+1)).html(h).css({backgroundColor: d.color || "gray"})
      }
    }
  }

  render(stack)

  soc.onmessage = function(ev) {
    if(stop){ return; }
    var data = JSON.parse(ev.data)
    stack.unshift(data)
    stack = stack.splice(0, 4)
    console.log(stack)
    render(stack)
  };
})
