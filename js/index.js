// header menu line
$(function () {
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
    console.log(button);

    $("html,body").stop().animate({ scrollTop: button });
  });
});

// con8 a
$(".con8_link_box a").on("mouseenter", function () {
  $(".con8_long_move").addClass("on");
});

// visual 자동페이드
$(function () {
  let total = $(".visual_box li").length;
  console.log(total);
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
  // long();
  // function long() {
  //     $(".fade_longbar li").children("div").css({ width: "0%" });

  //     $(".fade_longbar li")
  //         .eq(i)
  //         .children("div")
  //         .stop()
  //         .animate({ width: "100%" }, 2000);
  // }

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

    start();
  });
});