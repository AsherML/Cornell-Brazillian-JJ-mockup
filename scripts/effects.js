$(document).ready(function () {
    //credit alert
    alert("I completed this project as part of a team of 4 students. My responsibilities included the 'Calendar' page, the 'Jiu-Jitsu Basics page', the navigation and footer bars, and overall site responsiveness. Thank you.")

    //navigation responsiveness//
    var nav_open=0;
    $("#hamburger").on("click", function(){
        if (nav_open%2==0){
            $("nav").removeClass("desktop");
            $("header").css({
                'position':'fixed',
                'top':'0'
            });
        }
        else{
            $("nav").addClass("desktop");
            $("header").css("position", "static");
        }
        nav_open++;
    });

    $("#pop_up_close").on("click", function(){
        $(".pop_up").addClass("hidden");
    });
});
