function init() {
  canvas=document.getElementById("myCanvas");
  pen=canvas.getContext('2d');
  W= canvas.width;
  H=canvas.height;

food=getFood();

  snake={
    init_len : 5,
    color: 'green',
    score: 5,
    cells: [],
    direction: "right",

    createSnake : function(){
      for(var i=this.init_len-1; i>=0 ; i++){
        this.cells.push({x:i, y:0});
      }
    },

    drawSnake: function(){
      for(var i=0; i<this.cells.length;i++){
        pen.strokeStyle="brown";
        pen.fillStyle= this.color;
        pen.strokeRect(this.cells[i].x*10, this.cells[i].y*10,10,10);
        pen.fillRect(this.cells[i].x*10, this.cells[i].y*10,10,10);
      }
    },

    updateSnake: function(){
      headX= this.cells[0].x;
      headY= this.cells[0].y;

      if(headX== foodX && headY==foodY){
        food=getFood();
        score++;
      }

      else{
        this.cells.pop();
      }

      if(this.direction= 'up'){
        nextX=headX;
        nextY=headY-1
      }

      else if(this.direction= 'down'){
        nextX=headX;
        nextY=headY+1
      }

      else if(this.direction= 'right'){
        nextX=headX;
        nextY=headY-1
      }

      else{

      this.cells.unshift({x:nextX, y:0});
    }
  }

  snake.createSnake();

  function Keypressed(e) {
    if(e.key=="ArrowUp"){
      snake.direction= 'up';
    }

    else if(e.key=="ArrowDown"){
      snake.direction= 'down';
    }

    else if(e.key=="ArrowRight"){
      snake.direction= 'right';
    }

    else{
      snake.direction= 'left';
    }
  }
  document.addEventListener('keydown',Keypressed);


}

function draw() {
  pen.clearRect(0,0,W,H);
  snake.drawSnake();
  pen.fillStyle=food.color;
  pen.fillRect(food.x*10, food.y*10,10,10);
  pen.fillStyle='white';
  pen.fillText("Score: "+score, 10, 10);

}

function update() {
  snake.updateSnake();
}

function gameloop() {
  draw();
  update();
}

function getFood() {
  foodX= Math.round(Math.random()*(W*10)/10);
  foodY= Math.round(Math.random()*(H*10)/10);

  var food ={
    x:foodX,
    y: foodY,
    color: "red"
  }
}

init();
setInterval(gameloop,100)
