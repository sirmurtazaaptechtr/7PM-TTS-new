$(document).ready(function () 
{
    $('#hide').click(function(){
        $('.para').hide();
    });
    $('#show').click(function(){
        $('.para').show();
    });
    $('.para').click(function(){
        $(this).hide();
    });    
});