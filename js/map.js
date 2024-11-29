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

$(function () {
    $(window).on("scroll", function () {
        let con1 = $(this).scrollTop();
        // console.log(con1);
        let con2 = $(this).scrollTop();
        // console.log(con2);
        let con3 = $(this).scrollTop();
        // console.log(con3);
        let con4 = $(this).scrollTop();
        console.log(con4);
        let footer = $(this).scrollTop();
        // console.log(footer);

        if (con1 >= 540 && 560 <= con1) {
            $(".rot").addClass("on");
            $(".con1_line").addClass("on");
            $(".con1 p").addClass("on");
        }
        if (con2 >= 1500 && con2 <= 1600) {
            $(".con2_txt").addClass("on");
        } else if (con2 >= 1900 && con2 <= 2000) {
            $(".wrap1 li:first-child").addClass("on");
            $(".wrap1 li:last-child").addClass("on");
        } else if (con2 >= 2450 && con2 <= 2500) {
            $(".wrap2 li:last-child").addClass("on");
            $(".wrap2 li:first-child").addClass("on");
        }

        if (con3 >= 3000 && con3 <= 3100) {
            $(".con3_bg h2").addClass("on");
            $(".con3_img").addClass("on");
        }
        if(con4 >=3600 && con4 <= 3700){
            $(".map_wrap h2").addClass("on");
        }
        else if(con4 >= 3750 && con4 <= 3800){
            $("iframe").addClass("on");
            $(".map_pin").addClass("on");
        }
        else if(con4 >= 3900 && con4 <= 4000){
            $(".map_wrap p").addClass("on");
            $(".con4_line1").addClass("on");
            $(".con4_line2").addClass("on");
        }

        if (footer >= 4200 && footer <= 4300) {
            $(".right_mh2").addClass("on");
            $(".upLi").addClass("on");
            $(".downLi").addClass("on");
        }
    });
});

// con1 540
// con2 h2 1550
// con2 wrap1 1900
// con2 wrap2 2450
// con3 3000
// con4 h2 3600
