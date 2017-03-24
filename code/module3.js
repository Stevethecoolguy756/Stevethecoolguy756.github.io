//
(function(){
 var btn = document.createElement('button);
 btn.innerHTML = 'Add Sprite';
 btn.onclick = function(e){
  var newSprite = document.createElement('img');
  newSprite.src = 'images/guard copy 2.png';
  document.body.appendChild(newSprite);
 };
 document.body.appendChild(btn);
})()
