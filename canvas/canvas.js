var canvas=document.querySelector("canvas");
console.log(canvas);
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext("2d");
c.fillRect(100,100,100,100);
c.beginPath();
c.moveTo(10,30);
c.lineTo(300,10);
c.stroke();

c.beginPath();
c.arc(390,320,60,0,Math.PI*2,false);
c.stroke();