$(document).ready(function(){
    
     //hides all panels when a panel is clicked
 $(".theButton").click(function(){
   $("#panel .container").siblings().hide();
   }) 
   
   //hides only the panel that was clicked
  $(".theButton").click(function(){
  $(this).hide();
   })
   
   
   
});