$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
        left: '250px',
        opacity: '0.5',
        height: '350px',
        width: '350px',
        fontSize: '24px'        
    },"slow");
  });
});