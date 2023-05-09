let canvas;
let c;
let canvasWidth=560;
let canvasHeight=400;

//dino
let dinos=[];
let dinoX=500;
let dinoY=340;
let dinoHeight=50;
let dinoWidth=50;

//rock
let rocks=[];
let rockX=0;
let rockY=0;
let rockHeight=40;
let rockWidth=40;


let dino={
    x:dinoX,
    y:dinoY,
    height:dinoHeight,
    width:dinoWidth
}

let score=0;
let gameOver=false
 
window.onload=function(){
    canvas=document.querySelector("canvas");
    canvas.width=canvasWidth;
    canvas.height=canvasHeight;
    c=canvas.getContext("2d");
    c.fillStyle="red";
    c.fillRect(dino.x,dino.y,dino.width,dino.height);
    update();
    setInterval(createDino,900);
    document.addEventListener("click",rock)
}

function update(){
    requestAnimationFrame(update);
    c.clearRect(0,0,canvasWidth,canvasHeight);

    if(gameOver)
    {
        alert("score :"+score);
        return;
    }

    if(dinos.length>0 && rocks.length>0){
        detectCollision();
    }

    //rock moment
    for(let i=0;i<rocks.length;i++){
       let r=rocks[i];
        r.y+=5;
        c.fillStyle="green";
        c.fillRect(r.x,r.y,r.width,r.height);
    }


    //dino moment
    for(let i=0;i<dinos.length;i++){
        let d=dinos[i];
        d.x-=5;
        c.fillStyle="red";
        c.fillRect(d.x,d.y,d.width,d.height);
    }

    //remove dino
    while(dinos.length>0 && dinos[0].x<-dinoWidth){
        dinos.shift();
        gameOver=true;
    }
    
}

function createDino(){
    let cdino={
        x:dinoX,
        y:dinoY,
        height:dinoHeight,
        width:dinoWidth,
    }
    dinos.push(cdino);
}

function rock(e){
    const rect=canvas.getBoundingClientRect();

    let crock={
        x:e.clientX-rect.left,
        y:e.clientY-rect.top,
        height:rockHeight,
        width:rockWidth,
    }
    rocks.push(crock);
}

function detectCollision(){
    for(let i=0;i<dinos.length;i++){
        for(let j=0;j<rocks.length;j++){
            if(rocks[j].x < dinos[i].x+dinos[i].width &&
                rocks[j].x + rocks[j].width > dinos[i].x &&
                rocks[j].y < dinos[i].y + dinos[i].height && 
                rocks[j].y+rocks[j].height > dinos[i].y){
                    score++;
                    rocks.splice(j,1);
                    dinos.splice(i,1);
                }
        }
    }
}