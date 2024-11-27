$(function () {
    // header menu_slide
    $(".hambergur").on("click", function () {
        $(".menu_slide").toggleClass("on");
    });


    
    // menu_slide mouseenter
    $(".menu_slide li").on("mouseenter", function () {
        $(this).children(".slide_line1").addClass("on");
        $(this).children(".slide_line2").addClass("on");
    });
    $(".menu_slide li").on("mouseleave", function () {
        $(this).children(".slide_line1").removeClass("on");
        $(this).children(".slide_line2").removeClass("on");
    });

    // header menu line

    $(".menu_list li").on("mouseenter", function () {
        $(this).children(".menu_line").addClass("on");
        $(this).children(".menu_line2").addClass("on");
    });

    $(".menu_list li").on("mouseleave", function () {
        $(this).children(".menu_line").removeClass("on");
        $(this).children(".menu_line2").removeClass("on");
    });

    // header hambergur

    $(".hambergur").on("mouseenter", function () {
        $(".hambergur li:nth-child(1)").addClass("on");
        $(".hambergur li:nth-child(2)").addClass("on");
    });
    $(".hambergur").on("mouseleave", function () {
        $(".hambergur li:nth-child(1)").removeClass("on");
        $(".hambergur li:nth-child(2)").removeClass("on");
    });
    // hambergur click
    $(".hambergur").on("click", function () {
        $(".hambergur li:nth-child(1)").toggleClass("re");
        $(".hambergur li:nth-child(2)").toggleClass("re");
    });

    //top button

    $(".top_button").on("click", function () {
        let button = $("header").offset().top;
        // console.log(button);

        $("html,body").stop().animate({ scrollTop: button });
    });
    // menu scroll

    let prevScroll = 0;
    $(window).on("scroll", function () {
        let nowScroll = $(window).scrollTop();
        let nav = $(this).scrollTop();
        if (nav >= 2) {
            $("nav").css({ "background-color": "#86543a" });
        } else {
            $("nav").css({ "background-color": "transparent" });
        }
        if (nowScroll > prevScroll) {
            $("nav").addClass("on");
        } else {
            $("nav").removeClass("on");
        }
        prevScroll = nowScroll;
    });

    // fo_ul li

    $(".fo_ul1 li").on("mouseenter", function () {
        let fo = $(this).index();
        $(".fo_ul1 li").eq(fo).addClass("on");
    });
    $(".fo_ul1 li").on("mouseleave", function () {
        $(".fo_ul1 li").removeClass("on");
    });
});

// visual img txt menuline

$(function () {
    $(".visual_img").addClass("on");
    $(".visual_txt p").addClass("on");
    $(".visual_txt h2").addClass("on");
    $(".menu_click_line").addClass("on");
});
// --------------------위 각 페이지 별 공통 적용 --------------------



$(function(){


    $(window).on("scroll", function () {
     
        let footer = $(this).scrollTop();
        console.log(footer);
     
        if(footer >= 4200 && footer <= 4300){
            $(".right_mh2").addClass("on")
$(".upLi").addClass("on")
$(".downLi").addClass("on")

        }
    });

    
})