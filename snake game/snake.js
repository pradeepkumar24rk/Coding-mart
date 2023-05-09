var blockWidth=25;
var row=20;
var col=20;
var board;
var c;
var snakeX=blockWidth*10;
var snakeY=blockWidth*10;
var foodX;
var foodY;
var velocityX=0;
var velocityY=0;
var snakeblock=[];
var gameover=false;
var score=0;

window.onload=function(){
  board=document.querySelector("canvas");
  board.width=row*blockWidth;
  board.height=col*blockWidth;
  c=board.getContext("2d");
  placefood();
  document.addEventListener("keyup",pressAction);
  // update();
  setInterval(update,100);
}

function update(){
  if(gameover)
    return;

  //board
  c.fillStyle='black'
  c.fillRect(0,0,row*blockWidth,col*blockWidth);
  
  //food
  c.fillStyle="red";
  c.fillRect(foodX,foodY,blockWidth,blockWidth);
  
  //eated food collection
  if(snakeX==foodX && snakeY==foodY){
    snakeblock.push([foodX,foodY]);
    score+=1;
    placefood();
    console.log(foodX,foodY);
  }
  for(let i=snakeblock.length-1;i>0;i--)
    snakeblock[i]=snakeblock[i-1];
  if(snakeblock.length)
     snakeblock[0]=[snakeX,snakeY];
 

  //snack
  c.fillStyle="lime";
  snakeX+=velocityX*blockWidth;
  snakeY+=velocityY*blockWidth;
  c.fillRect(snakeX,snakeY,blockWidth,blockWidth);
  for(let i=0;i<snakeblock.length;i++)
     c.fillRect(snakeblock[i][0],snakeblock[i][1],blockWidth,blockWidth);
  
  
  //game over
  if(snakeX<0 || snakeX>=col*blockWidth || snakeY<0 || snakeY>=row*blockWidth ){
    gameover=true;
    alert("game over...dude,score: "+score);
  }
  
  for(let i=0;i<snakeblock.length;i++){
    if(snakeX==snakeblock[i][0] && snakeY==snakeblock[i][1] ){
      gameover=true;
    alert("game over...dude,score: "+score);
    }
  }
  
}

function placefood(){
  foodX=Math.floor(Math.random()*col)*blockWidth;
  foodY=Math.floor(Math.random()*row)*blockWidth;
}

function pressAction(e){
  if(e.code=="ArrowUp" && velocityY!=1){
    velocityX=0;
    velocityY=-1;
  }
  else if(e.code=="ArrowDown" && velocityY!=-1){
    velocityX=0;
    velocityY=1;
  }
  else if(e.code=="ArrowLeft" && velocityX!=1){
    velocityX=-1;
    velocityY=0;
  }
  else if(e.code=="ArrowRight" && velocityX!=-1){
    velocityX=1;
    velocityY=0;
  }
  
 
}