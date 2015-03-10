  var paper = new Raphael('paper','100%');
  var cx = 150;
  var cy = 150;

  var circle = paper.circle(0, 0, 110).attr({stroke:'#870C4F', 'stroke-width': 25});
 
  var list = document.getElementById("paper").childNodes[0].childNodes;
  for(var i = 0, l = list.length; i < l; i++){
      list[i].setAttribute("transform", "translate(150,150)");
    }

  var duration = moment.duration({
    'seconds': 30,
        'hour': 2,
        'minutes': 10
});

  