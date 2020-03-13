 $(document).ready(function(){
    $("#start").click(start);

});

 function lose() {
     $("#status").html('you are loser ')
         $(".boundary").addClass("youlose")

 }
 function win() {
     if (!$(".boundary").hasClass( "youlose" ))
     {
	$("#status").html('you are winer ')
         alert("YOU WON!")
     }

 }

 function rest() {
     $("#status").html(' hit "E" to end the game')
     $(".boundary").removeClass("youlose")
 }

 function start(){
     rest();

      $(".boundary").mouseenter(lose)
     $("#maze").mouseleave(lose)
     $("#maze").on("contextmenu",function(e){
         return false;
     });

     $("#end").mouseenter(win)


 }
