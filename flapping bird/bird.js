//screen
let screen;
let swidth=340;
let sheight=640;
let c;

//bird
let birdwidth=34 ; //ratio of bird==>w:h==>408:228==>17:12
let birdheight=24;
let birdX=swidth/8;
let birdY=sheight/2;

let bird={
  x:birdX,
  y:birdY,
  width:birdwidth,
  height:birdheight
};

//pipes
let pipes=[];
let pipeWidth=64; // ratio==>w:h==>384:3072==>1:8
let pipeHeight=514;
let pipeX=swidth;
let pipeY=0;

//physics
let velocityX=-2;// moving the pipes
let velocityY=0;// moving the birds
let gravity=0.4;

let openingspace=pipeHeight/4;
let gameOver=false;
let score=0;

window.onload=function(){
  screen=document.querySelector("canvas");
  screen.width=swidth;
  screen.height=sheight;
  c=screen.getContext("2d");
  
  //bird
  c.fillStyle="green";
  c.fillRect(bird.x,bird.y,bird.width,bird.height);
  
  //bird image
  // birdImg=new Image();
  // birdImg.src="./path";
  // birdImg.onload=()=>{
  //   c.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height);
  // }

  update();
  setInterval(placePipes,2500);
  
  document.addEventListener("keydown",birdMovingVelocity);

  
    
}

function update(){
  requestAnimationFrame(update);
  c.clearRect(0,0,swidth,sheight); 

  if(gameOver){
    alert(score);
    return;
  }

  //bird
  c.fillStyle="green";
  velocityY+=gravity;
  // bird.y+=velocityY; 
  bird.y=Math.max(bird.y+velocityY,0); //apply gravity to current bird.y,limit the bird.y to top of canvas
  c.fillRect(bird.x,bird.y,bird.width,bird.height);

  if(bird.y > sheight)
    gameOver=true;

  for(let i=0;i<pipes.length;i++){
    let pipe=pipes[i];
    pipe.x += velocityX;
    //pipe
    c.fillStyle="red";
    c.fillRect(pipe.x,pipe.y,pipe.width,pipe.height);

    if(!pipe.passed && bird.x > pipe.x + pipe.width)
    {
      score += 0.5; //0.5 because there are 2 pipes so 0.5*2=1
      pipe.passed=true;
    }
    
    if(detectCollision(bird,pipe))
      gameOver=true; 
  }

  //clearpipes
  while(pipes.length>0 && pipes[0].x<-pipeWidth)
    pipes.shift();   //remove the first element from the array

  //score
  c.fillStyle="white";
  c.font="45px sans-serif";
  c.fillText(score,5,45);
}
function placePipes(){

  if(gameOver)
    return;

  let randomY=pipeY-pipeHeight/4-(Math.random()*pipeHeight/2);
  let topPipes={
    x:pipeX,
    y:randomY,
    height:pipeHeight,
    width:pipeWidth,
    passed:false,
  }
  pipes.push(topPipes);
  
  let bottomPipes={
    x:pipeX,
    y:randomY+pipeHeight+openingspace,
    height:pipeHeight,
    width:pipeWidth,
    passed:false,
  }
  pipes.push(bottomPipes);
}

function birdMovingVelocity(e){
  if(e.code=="Space" || e.code=="ArrowUp"){
    //jump
    velocityY=-6;
  }
}

function detectCollision(bir,pip){
  return bir.x < pip.x+pip.width &&        //a's top left corner doesn't reach b's top right corner   
          bir.x + bir.width > pip.x &&    //a's top right corner passes b's top left corner
          bir.y < pip.y + pip.height &&  //a's top left corner doesn't reach b's bottom left corner
          bir.y + bir.height > pip.y;   //a's bottom left corner passes b's top left corner
}