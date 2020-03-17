"use strict";
//adding jQuery lib
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js";
document.head.append(script)
var space = {
    x: 300,
    y: 300,
    id: 15
};
var arrDiv = [];
arrDiv[15]={'x':300,'y':300}

window.onload = hedra
function hedra(){
    init();
    $("#shufflebutton").click(function () {
        shuffle();
    })
    $("#puzzlearea div").mouseenter(function(){

        move($(this))
    });

}



var init = function() {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");

    // initialize each piece
    for (var i=0; i< divs.length; i++) {
        var div = divs[i];

        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        // div.style.backgroundImage = url("background.jpg") ;
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

        // store x and y for later
        div.x = x;
        div.y = y;
        var ni=i
        ni={'x':x, 'y':y}
        arrDiv [i]=ni

    }
};

 var shuffle=  function () {
      var  arrDive = $(arrDiv)
     arrDiv.sort(() => Math.random() - 0.5);

     $("#puzzlearea div").each(function ( idx ) {

        $(this).css("top",arrDiv[idx].x+"px")
        $(this).css("left",arrDiv[idx].y+"px")
     })
     space.x=arrDiv[15].x
     space.y=arrDiv[15].y

console.log(space.x +" "+space.y )
}


function ableToMove( el) {
    var xe= parseInt(el.css("top"))
    var ye= parseInt(el.css("left"))

    if(xe==space.x)
    {
        if(ye +100 == space.y || ye-100==space.y)
        {

            return true
        }
    }
    if(ye==space.y)
    {
        if(xe +100 == space.x || xe-100==space.x)
        {

            return true
        }
    }
    return false;
}

function doMove(el) {


    var xe= parseInt(el.css("top"))
    var ye= parseInt(el.css("left"))


    $(el).css("top",space.x+"px")
    $(el).css("left",space.y+"px")

    space.x=xe
    space.y=ye

}

var move= function (el) {

     if(ableToMove(el))
     {
         el.addClass("movablepiece")
         el.click(function () {
             if(ableToMove(el)){
             doMove(el)
             el.removeClass("movablepiece")
             }
         })
         el.mouseleave(function () {
             el.removeClass("movablepiece")
         })
     }
}

