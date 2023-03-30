$(document).ready(function(){
    /*
    $("p").click(function(){
        $(this).css("background-color","hotpink");
    });
    $("p").dblclick(function(){
        $(this).css("background-color","white");
    });
    $("p").mouseenter(function(){
        $(this).css("border","2px solid red");
    });
    $("p").mouseleave(function(){
        $(this).css("border","0px");
    });
    $("p").mousedown(function(){
        $(this).css("width","50%");
    });
    $("p").mouseup(function(){
        $("p").css("width","100%");
    });
    $("p").hover(function(){
        $("p").css("color","gray");
    });
    $("p").mouseenter(function(){
        $("p").css("color","gray");
    });
    $("p").mouseleave(function(){
        $("p").css("color","black");
    });
    */
    $("p").on({
        click: function() {
            $(this).css("background-color","hotpink");
        },
        dblclick: function(){
            $(this).css("background-color","white");
        },
        mouseenter: function(){
            $(this).css("border","2px solid red");
        },
        mouseleave: function(){
            $(this).css("border","0px");
        },
        mousedown: function(){
            $(this).css("width","50%");
        },
        mouseup: function(){
            $(this).css("width","100%");
        },
        hover: function(){
            $(this).css("color","gray");
        }
    });
    $("input").focus(function(){
        $(this).css("background-color", "lightgray");
    });
    $("input").blur(function(){
        $(this).css("background-color", "white");
    });
    $("#btnShow").click(function(){
        $("p").show(3000)

    });
    $("#btnHide").click(function(){
        $("p").hide(3000)

    });
    $("#btnToggle").click(function(){
        $("p").toggle(3000)
        $(".box").toggle(1000)

    });
});