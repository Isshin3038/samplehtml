
var topOpacity = 1;


$(window).load(function(){
  $(".fadeIn").removeClass("fadeIn");
  $(".load-screen").delay(1500).queue(function(){
    $(".load").hide();
    $(".load-screen").stop().slideUp();
    $(".loader").hide();

    $(window).scrollTop(1);
  })






  $(window).scroll(function(){
    topOpacity = 1 - ($(window).scrollTop())/1200;
    $(".top-box").css("opacity", topOpacity);




    if($(this).scrollTop() >= 540){
      $(".history-image").stop().addClass("fadeIn");

    }

    if($(this).scrollTop() >= 660){
      $(".history-title").stop().addClass("fadeIn");
    }
    if($(this).scrollTop() >= 710){
      $(".history-text").stop().addClass("fadeIn").css("opacity","0.7");
    }
    if($(this).scrollTop()>=740){
      $(".btn").stop().addClass("fadeIn");
    }


    if($(this).scrollTop() >= 620 ){
      $(".header-background").stop().animate({
        opacity:0

      },100);

    } else{
      $(".header-background").stop().animate({
        opacity:0.6

      },100);

    }




  })

  $(".header_logo").click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow",function(){
      $(".fadeIn").removeClass("fadeIn");
    });

    return false;

  })
  $(".btn").click(function(){
    $(".load").delay(300).queue(function(){
      $(".load").show();
    })

    $(".load-screen").stop().slideDown().queue(function(){
      window.location.href = 'file:///Users/Isshin/Desktop/sample%20html/company.html';
    })

  })


})
