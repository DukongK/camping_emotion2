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
    let con1 = $(this).scrollTop();
    // console.log(con1);
    let con3 = $(this).scrollTop();
    // console.log(con3)
    let con4 = $(this).scrollTop();
    // console.log(con4)
    let con5 =$(this).scrollTop();
    // console.log(con5)
    let footer = $(this).scrollTop();
    console.log(footer);

    // con1
    if (con1 >= 600 && con1 <= 700) {
      $(".con1_img_1 p").addClass("on");
      $(".con1_line").addClass("on");
      $(".img_move").addClass("on");
      $(".con1_bg").addClass("on");
    }
    else if (con1 >= 1100 && con1 <= 1200) {
      $(".con1_2_wrap > h2").addClass("on");
      $(".opa_right > h2").addClass("on");
    }
// con3
 else if(con3 >= 2800 && con3 <= 3000){
    $(".con3_txt .txt120").addClass("on")
    $(".con3_txt .txt70").addClass("on")
  }
  else if(con3 >= 3100 && con3 <= 3200){
$(".th1").addClass("on")
$(".ap1").addClass("on")
  }
  else if(con3 >= 3400 && con3 <= 3500){
    
    $(".th2").addClass("on")
    $(".ap2").addClass("on")
  }
  else if(con3 >= 3800 && con3 <= 3900){
    $(".th3").addClass("on")
    $(".ap3").addClass("on")
  }
// con4
else if(con4 >= 4000 && con4 <= 4300)
{

  $(".con4_down").addClass("on")
  $(".con4_up").addClass("on")
  $(".con4_p_move").addClass("on")

}
// con5

else if(con5 >= 4500 && con5 <= 4700)
{
$(".line_1").addClass("on");
$(".con5_h2_move").addClass("on");

}


else if(footer >= 4480 && footer <= 4500){
  $(".right_mh2").addClass("on")
$(".upLi").addClass("on")
$(".downLi").addClass("on")

}



  });
});

// 600 con1 <

// 2900 con3 <

// 4265 con4 <
// 4671 < con5



// event_page li mouseenter

$(function(){
 

  $(".event_page li").on("mouseenter",function(){ let event = $(this).index();
    $(".event_opa").eq(event).addClass("on")
    $(".event_btn").eq(event).addClass("on")
    $(".event_list").eq(event).addClass("on")
  })
  $(".event_page li").on("mouseleave",function(){
    $(".event_opa").removeClass("on")
    $(".event_btn").removeClass("on")
    $(".event_list").removeClass("on")
  })





})