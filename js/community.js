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

// $(function () {
//     $(window).on("scroll", function () {
//         let con1 = $(this).scrollTop();
//         // console.log(con1)
//         let footer = $(this).scrollTop();
//         // console.log(footer);
//         let con4 = $(this).scrollTop();
//         // console.log(con4);
//         let con3 = $(this).scrollTop();
//         // console.log(con3);
//         let con5 = $(this).scrollTop();
//         console.log(con5);

//         if (con1 >= 580 && con1 <= 600) {
//             $(".con1_img").addClass("on");
//         } else if (con1 >= 1200 && con1 <= 1300) {
//             $(".txt_up").addClass("on");
//         } else if (con1 >= 1400 && con1 <= 1500) {
//             $(".con1_img2").addClass("on");
//         }
//         else if(con3 >= 3500 && con3 <= 3700){

//             $(".con3 h2").addClass("on");
//             $(".con3 li:nth-child(2) img").addClass("on");
//             $(".con3 li:nth-child(1) img").addClass("on");
//             $(".con3 li:nth-child(3) img").addClass("on");
//             $(".con3 li:nth-child(2) h3").addClass("on");
//             $(".con3 li:nth-child(1) h3").addClass("on");
//             $(".con3 li:nth-child(3) h3").addClass("on");
//             $(".con3 li p").addClass("on");
//         }
//         else if(con4 >= 4400 && con4 <= 4500 ){
//             $(".con4 ul li:nth-child(1)").addClass("on");
//             $(".con4 ul li:nth-child(2)").addClass("on");
//             $(".con4 ul li:nth-child(3)").addClass("on");
//         }
//         else if(con5 >= 4900 && con5 <= 5200){
//             $(".con5_line").addClass("on");
//             $(".con5_bg ul li:last-child").addClass("on");
//         }

//         else if (footer >= 4800 && footer <= 4900) {
//             $(".right_mh2").addClass("on");
//             $(".upLi").addClass("on");
//             $(".downLi").addClass("on");
//         }

//     });
// });

// con1 > 1300
// con4 4550
// con5 5252

// $(function () {
//     $(".con4 ul li:nth-child(1)").addClass("on");
//     $(".con4 ul li:nth-child(2)").addClass("on");
// });

// 삼항연산자 사용

function communityScroll() {
    // con1
    $(window).scrollTop() > $(".con1").offset().top - +300
        ? $(".con1_img").addClass("on")
        : $(".con1_img").removeClass("on");

    $(window).scrollTop() > $(".con1").offset().top - -200
        ? $(".txt_up").addClass("on")
        : $(".txt_up").removeClass("on");

    $(window).scrollTop() > $(".con1").offset().top - -500
        ? $(".con1_img2").addClass("on")
        : $(".con1_img2").removeClass("on");
    // con3
    $(window).scrollTop() > $(".con3").offset().top - +300
        ? $(".con3 h2").addClass("on")
        : $(".con3 h2").removeClass("on");

    $(window).scrollTop() > $(".con3").offset().top - +300
        ? $(".con3 li:nth-child(2) img").addClass("on")
        : $(".con3 li:nth-child(2) img").removeClass("on");

    $(window).scrollTop() > $(".con3").offset().top - +300
        ? $(".con3 li:nth-child(1) img").addClass("on")
        : $(".con3 li:nth-child(1) img").removeClass("on");

    $(window).scrollTop() > $(".con3").offset().top - +300
        ? $(".con3 li:nth-child(3) img").addClass("on")
        : $(".con3 li:nth-child(3) img").removeClass("on");

    $(window).scrollTop() > $(".con3").offset().top - +300
        ? $(".con3 li:nth-child(2) h3").addClass("on")
        : $(".con3 li:nth-child(2) h3").removeClass("on");

    $(window).scrollTop() > $(".con3").offset().top - +300
        ? $(".con3 li:nth-child(1) h3").addClass("on")
        : $(".con3 li:nth-child(1) h3").removeClass("on");

    $(window).scrollTop() > $(".con3").offset().top - +300
        ? $(".con3 li:nth-child(3) h3").addClass("on")
        : $(".con3 li:nth-child(3) h3").removeClass("on");

    $(window).scrollTop() > $(".con3").offset().top - +300
        ? $(".con3 li p").addClass("on")
        : $(".con3 li p").removeClass("on");
    // con4
    $(window).scrollTop() > $(".con4").offset().top - +300
        ? $(".con4 ul li:nth-child(1)").addClass("on")
        : $(".con4 ul li:nth-child(1)").removeClass("on");

    $(window).scrollTop() > $(".con4").offset().top - +300
        ? $(".con4 ul li:nth-child(2)").addClass("on")
        : $(".con4 ul li:nth-child(2)").removeClass("on");

    $(window).scrollTop() > $(".con4").offset().top - +300
        ? $(".con4 ul li:nth-child(3)").addClass("on")
        : $(".con4 ul li:nth-child(3)").removeClass("on");

    // con5

    $(window).scrollTop() > $(".con5").offset().top - +300
        ? $(".con5_line").addClass("on")
        : $(".con5_line").removeClass("on");

    $(window).scrollTop() > $(".con5").offset().top - +300
        ? $(".con5_bg ul li:last-child").addClass("on")
        : $(".con5_bg ul li:last-child").removeClass("on");

    // footer
    $(window).scrollTop() > $("footer").offset().top - +600
        ? $(".right_mh2").addClass("on")
        : $(".right_mh2").removeClass("on");
    $(window).scrollTop() > $("footer").offset().top - +600
        ? $(".upLi").addClass("on")
        : $(".upLi").removeClass("on");
    $(window).scrollTop() > $("footer").offset().top - +600
        ? $(".downLi").addClass("on")
        : $(".downLi").removeClass("on");
}

$(window).scroll(function () {
    communityScroll();
});
