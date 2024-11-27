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

// --------------------위 각 페이지 별 공통 적용 --------------------

// 페이지별 효과

$(function () {
    // scroll page
    $(window).on("scroll", function () {
        let con1 = $(this).scrollTop();
        let con7 = $(this).scrollTop();
        let con8 = $(this).scrollTop();
        let footer = $(this).scrollTop();
        console.log(footer);
        if (con7 >= 6400 && con7 <= 7000) {
            // h2 txt

            $(".con7 li").addClass("on");
        } else if (con8 >= 6500 && con8 < 7300) {
            $(".con8_txt h2").addClass("on");
            $(".con8_txt p").addClass("on");
           
        }
        else if (con1 >= 500 && con1 <= 550) {
            $(".up").addClass("on");
            $(".down").addClass("on");
            $(".con1_txt span").addClass("on");
            $(".con1_txt h2").addClass("on");
            $(".con1_bg").addClass("on");
        }
        else if(footer >= 7300 && footer <= 7400){
            $(".right_mh2").addClass("on")
$(".upLi").addClass("on")
$(".downLi").addClass("on")

        }
    });
});



$(function(){
// $(".right_mh2").addClass("on")
// $(".upLi").addClass("on")
// $(".downLi").addClass("on")

})


// con1 750
// con7 6400 < 7000
// con8 6500 < 7300
// 푸터 7300

// visual 자동페이드
$(function () {
    let total = $(".visual_box li").length;
    //   console.log(total);
    let i = 0;

    // 기본형식 확인
    // setInterval(function () {
    //     $(".visual_box li").stop().fadeOut();
    //     $(".visual_box li").eq(i).stop().fadeIn();

    //     if (i == total - 1) {
    //         i = 0;
    //     } else {
    //         i++;
    //     }
    // }, 4000);

    // 함수
    start();
    fade();

    function fade() {
        $(".visual_box li").stop().fadeOut();
        $(".visual_box li").eq(i).stop().fadeIn();
        $(".fade_longbar li").children("div").css({ width: "0%" });
        $(".fade_longbar li")
            .eq(i)
            .children("div")
            .stop()
            .animate({ width: "100%" }, 3000);
        $(".visual_box li").removeClass("on");
        $(".visual_box li").eq(i).addClass("on");
        $(".visual_txt li").removeClass("on");
        $(".visual_txt li").eq(i).addClass("on");
    }

    function start() {
        timer = setInterval(function () {
            if (i == total - 1) {
                i = 0;
            } else {
                i++;
            }
            fade();
        }, 5000);
    }
    // next버튼
    $(".next").on("click", function () {
        clearInterval(timer);

        if (i == total - 1) {
            i = 0;
        } else {
            i++;
        }
        start();
        fade();
    });

    // prev버튼

    $(".prev").on("click", function () {
        clearInterval(timer);

        if (i == 0) {
            i = total - 1;
        } else {
            i--;
        }
        start();
        fade();
    });
    // 긴 바 버튼
    $(".fade_longbar li").on("click", function () {
        clearInterval(timer);
        i = $(this).index();
        start();
        fade();
    });

    // 시작 멈춤
    $(".pause").on("click", function () {
        clearInterval(timer);
        $(this).css({ display: "none" });
        $(".play").css({ display: "block" });
    });

    $(".play").on("click", function () {
        // clearInterval(timer);
        $(this).css({ display: "none" });
        $(".pause").css({ display: "block" });
        fade();
        start();
    });
});
