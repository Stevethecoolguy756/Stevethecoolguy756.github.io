//
(function(){
  var btn = document.createElement('button');
  btn.innerHTML = 'Add Sprite';
  btn.onclick = function(e){
    var newSprite = document.createElement('img');
    newSprite.src = 'images/guard.png';
    document.body.appendChild(newSprite);
  };
  document.body.appendChild(btn);
})
