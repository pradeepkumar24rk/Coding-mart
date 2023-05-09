let tank1 = document.getElementById("tank1");
let tank2 = document.getElementById("tank2");
let tank3 = document.getElementById("tank3");
let storage = document.getElementById("storage");
let storageWater = document.getElementById("storage-water");
let open;
let red = 0, blue = 0, green = 0;
let backgroundInterval;

tank1.addEventListener("mousedown", (event) =>{
    let empty1 = document.getElementById("empty1");
    let water1 = document.getElementById("water1");
    open = setInterval(function (){
        let emptyHeight = 
        parseInt(window.getComputedStyle(empty1).
        getPropertyValue("height"));
        let waterHeight = 
        parseInt(window.getComputedStyle(water1).
        getPropertyValue("height"));
        empty1.style.height = `${emptyHeight + 2}px`;
        water1.style.height = `${waterHeight - 2}px`;
    }, 125);
    let pipe = document.getElementById("pipe1");
    pipe.classList.add("flow");

    console.log(red, green, blue);
    backgroundInterval = setInterval(() => {
        red = (red == 250) ? 250 : red + 50;
        storageWater.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }, 1000);
});

tank1.addEventListener("mouseup", function (){
    clearInterval(open);
    clearInterval(backgroundInterval);
    let pipe = document.getElementById("pipe1");
    pipe.classList.remove("flow");
});

tank2.addEventListener("mousedown", (event) =>{
    let empty2 = document.getElementById("empty2");
    let water2 = document.getElementById("water2");
    open = setInterval(function (){
        let emptyHeight = 
        parseInt(window.getComputedStyle(empty2).
        getPropertyValue("height"));
        let waterHeight = 
        parseInt(window.getComputedStyle(water2).
        getPropertyValue("height"));
        empty2.style.height = `${emptyHeight + 2}px`;
        water2.style.height = `${waterHeight - 2}px`;
    }, 125);
    let pipe = document.getElementById("pipe2");
    pipe.classList.add("flow");

    backgroundInterval = setInterval(() => {
        green = (green == 250) ? 250 : green + 50;
        storageWater.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }, 1000);
});

tank2.addEventListener("mouseup", function (){
    clearInterval(open);
    clearInterval(backgroundInterval);
    let pipe = document.getElementById("pipe2");
    pipe.classList.remove("flow");
});

tank3.addEventListener("mousedown", (event) =>{
    let empty3 = document.getElementById("empty3");
    let water3 = document.getElementById("water3");
    open = setInterval(function (){
        let emptyHeight = 
        parseInt(window.getComputedStyle(empty3).
        getPropertyValue("height"));
        let waterHeight = 
        parseInt(window.getComputedStyle(water3).
        getPropertyValue("height"));
        empty3.style.height = `${emptyHeight + 2}px`;
        water3.style.height = `${waterHeight - 2}px`;
    }, 125);
    let pipe = document.getElementById("pipe3");
    pipe.classList.add("flow");

    backgroundInterval = setInterval(() => {
        blue = (blue == 250) ? 250 : blue + 50;
        storageWater.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }, 1000);
});

tank3.addEventListener("mouseup", function (){
    clearInterval(open);
    clearInterval(backgroundInterval);
    let pipe = document.getElementById("pipe3");
    pipe.classList.remove("flow");
});

