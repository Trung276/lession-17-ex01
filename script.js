
function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 100;
    console.log('ok: ' + this.left);
  }
  this.moveDown = function(){
    this.top += 100;
    console.log('ok: ' + this.top);
  }

}

var hero = new Hero('doraemon.png', 20, 30, 200);

function start(){
  if(hero.left < window.innerWidth - hero.size){
    hero.moveRight();
    hero.moveDown();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();