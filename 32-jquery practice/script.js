$(document).ready(function(){
    // ===== p-0 =====
    $(".p_hide").click(function(){
        $(this).hide();
    });

    // ===== p-1 =====
    $("#btn").click(function(){
        $(".p_btn").hide();
    });

    // ===== p-2 =====
    $("#hide_id").click(function(){
        $("#id_btn").hide();
    });

    // ===== p-3 =====
    $(".duble").dblclick(function(){
        $(this).hide();
    });

    // ===== p-4 =====
    $(".mouse").mouseenter(function(){
        alert("mouse enter");
    });

    // ===== p-5 =====
    $(".m_leave").mouseleave(function(){
        alert("mouse leave");
    });

    // ===== p-6 =====
    $(".m_down").mousedown(function(){
        alert("mouse down");
    });

    // ===== p-7 =====
    $(".m_up").mouseup(function(){
        alert("mouse up");
    });

    // ===== p-8 =====
    $(".m_hover").hover(function(){
        alert("you are in para");
    }, function(){
        alert("you leave in para");
    });

    // ===== p-9 =====
    $(".i_focus").focus(function(){
        $(this).css("background-color", "teal");
    });
    $(".i_focus").blur(function(){
        $(this).css("background-color", "red");
    });

    // ===== p-10 =====
    $(".onc").on("click", function(){
        $(this).css("background-color", "green");
    });

    // ===== p-11 =====
    $(".memlc").on({
        mouseenter : function(){
            $(this).css("background-color", "red");
        },
        mouseleave : function(){
            $(this).css("background-color", "green");
        },
        click : function(){
            $(this).css("background-color", "teal");
        }
    });

    // ===== p-12 =====
    $("#show").click(function(){
        $(".shhi").show();
    });
    $("#hide").click(function(){
        $(".shhi").hide();
    });

    // ===== p-13 =====
    $("#hide_btn").click(function(){
        $(".hideanimation").hide(1000);
    });

    // ===== p-14 =====
    $("#toggle_btn").click(function(){
        $(".toggle").toggle();
    });

    // ===== p-15 =====
    $("#fadeInBtn").click(function(){
        $("#box1").fadeIn();
        $("#box2").fadeIn("slow");
        $("#box3").fadeIn(2000);
    });

    // ===== p-16 =====
    $("#fadeOutBtn").click(function(){
        $("#box4").fadeOut();
        $("#box5").fadeOut("show");
        $("#box6").fadeOut(2000);
    });

    // ===== p-17 =====
    $("#fadeToggleBtn").click(function(){
        $("#box7").fadeToggle();
        $("#box8").fadeToggle("slow");
        $("#box9").fadeToggle(2000);
    });

    // ===== p-18 =====
    $("#fadeToBtn").click(function(){
        $("#box10").fadeTo("slow", 0.15);
        $("#box11").fadeTo("slow", 0.10);
        $("#box12").fadeTo("slow", 1.5);
    });

    // ===== p-19 =====
    $("#slide_btn").click(function(){
        $("#slide_para").slideDown("slow");
    });

    // ===== p-20 =====
    $("#slideUp_btn").click(function(){
        $("#slideUp_para").slideUp();
    });

    // ===== p-21 =====
    $("#slideToggle_btn").click(function(){
        $("#slideToggle_para").slideToggle();
    });

    // ===== p-22 =====
    $("#box_ani_btn").click(function(){
        $("#animates_boxs").animate({
            left: "50%",
        });
    });

    // ===== p-23 =====
    $("#box_animate_btn").click(function(){
        $("#animate_box").animate({
            left: "50%",
            opacity: "0.5",
            width: "50px",
            height: "50px",
        });
    });

    // ===== p-24 =====
    $("#box_animates_btn").click(function(){
        $("#animate_boxs").animate({
            left: "50%",
            width: "+=30px",
            height: "+=30px"
        });
    });

    // ===== p-25 =====
    $("#box_animates_toggle").click(function(){
        $("#animate_box_toggle").animate({
            height: "toggle",
        });
    });

    // ===== p-26 =====
    $("#box_ani_toggle").click(function(){
        let div_ani = $("#ani_box_toggle");
        div_ani.animate({height: "100px", opacity: "0.5"}, "slow");
        div_ani.animate({width: "200px", opacity: "0.8"}, "slow");
        div_ani.animate({height: "40px", opacity: "0.5"}, "slow");
        div_ani.animate({width: "40px", opacity: "0.8"}, "slow");
    });
});

