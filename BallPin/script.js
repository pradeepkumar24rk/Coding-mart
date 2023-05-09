const ball =document.getElementById("Ball");
const pin=document.getElementById("Pin");
function jumps(){
    if(dispatchEvent.classList!="jump"){

        ball.classList.add("jump");
     
         setTimeout(function(){
             ball.classList.remove('jump');
         },300)
    }
}

const checkAlive=setInterval(()=>{
let ballt=parseInt(window.getComputedStyle("ball").getPropertyValue("top"));
let pinl=parseInt(window.getComputedStyle("pin").getPropertyValue("left"));
},10);

document.addEventListener('keydown',function(e){
    jumps();
})