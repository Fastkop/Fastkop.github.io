"use strict";
function animationTextChange() {

    let e=document.getElementById("animation");
    let Sanima=e.options[e.selectedIndex].value
    document.getElementById("text-area").value = ANIMATIONS[Sanima];

}


function start() {
    document.getElementById("animation").disabled= true;
    document.getElementById("start").disabled= true;
    document.getElementById("stop").disabled= false;

    countfram=0;
    timer=0
    let val=document.getElementById("text-area").value;
     let t=document.getElementById("turbo").checked


    arr=val.split("=====");
    framNum =arr.length

    if(t) {
        intervaltime=50
    }
        timer= setInterval(draw,intervaltime)

}
var intervaltime=250
var timer=0
var framNum
var arr=[]
var countfram=0;
function draw() {
    if(countfram===framNum)
    {
        countfram=0
    }
    document.getElementById("text-area").value=arr[countfram]
    countfram++
}

function stop() {
    document.getElementById("animation").disabled = false;
    document.getElementById("stop").disabled= true;
    document.getElementById("start").disabled= false;
    animationTextChange()
    clearInterval(timer)
}


function fontsizeChange() {
    let e=document.getElementById("fontsize");
    let Sfont=e.options[e.selectedIndex].value;
 document.getElementById("text-area").style.fontSize=Sfont;
}

function turboChange() {

    if(timer&&intervaltime===250)
    {
        clearInterval(timer)
        timer= setInterval(draw,50)
    }
else if(timer&&intervaltime===50)
    {
        clearInterval(timer)
        timer= setInterval(draw,250)
    }
}


window.onload=function () {
    document.getElementById("start").onclick= start;
    document.getElementById("stop").onclick= stop;

    document.getElementById("animation").onchange=animationTextChange;
    document.getElementById("fontsize").onchange=fontsizeChange;
    document.getElementById("turbo").onchange=turboChange;

}
