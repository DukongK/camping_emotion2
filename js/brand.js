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
    // scroll page
    $(window).on("scroll", function () {
        let con1Count = $(this).scrollTop();
        // console.log(con1Count);
        let con2Txt = $(this).scrollTop();
        // console.log(con2Txt);
        let con3 = $(this).scrollTop();
        // console.log(con3);
        let con6 = $(this).scrollTop();
        // console.log(con6);
        let footer = $(this).scrollTop();
        console.log(footer);
        // con1Count
        if (con1Count >= 800 && con1Count <= 1000) {
            // h2 txt

            $(".h2_left").addClass("on");
            $(".h2_top").addClass("on");
            // con1 count
            let count = -0;
            stop = setInterval(function () {
                count++;
                if (count >= 11) {
                    clearInterval(stop);
                } else {
                    $(".count1").text(count);
                }
            }, 150); // 숫자 속도 조절
        }
        // con2
        if (con2Txt >= 1800 && con2Txt <= 2000) {
            $(".con2_txt > p").addClass("on");
            $(".con2_txt h2").addClass("on");
            $(".left_p").addClass("on");
            $(".left_p_1").addClass("on");
            $(".left_p2").addClass("on");
            $(".left_p2_2").addClass("on");
        } else if (con3 >= 2800 && con3 <= 2900) {
            $(".con3 ul li").addClass("on");
        } else if (con6 >= 6000 && con6 <= 6100) {
            $(".con6_txt h2").addClass("on");
            $(".con6_txt p").addClass("on");

            // con6 count
            let count = -0;
            stop = setInterval(function () {
                count++;
                if (count >= 4) {
                    clearInterval(stop);
                } else {
                    $(".count2").text(count);
                }
            }, 200); // 숫자 속도 조절
        } else if (footer >= 6200 && footer <= 6300) {
            $(".right_mh2").addClass("on");
            $(".upLi").addClass("on");
            $(".downLi").addClass("on");
        }
    });
});

// 2000 con3 <
// 5500 con6 <
