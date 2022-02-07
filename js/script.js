$(document).ready(function(){

    $('.slick-box').slick({

        autoplay : true ,
        autoplaySpeed : 3000 ,
        arrows : true ,
        dots : true ,
        rows : 1 ,
        slidesToShow : 4 ,
    })

    $(".btn").click(function(){
        $("html,body").animate({
          scrollTop : 0 ,
        },1500);
      });
      
    });

    $(window).scroll(function(){
      
      var test = $(window).scrollTop();
      if(test >= 1500){
        $(".btn").addClass("active")
      }else if(test==0){
        $(".btn").removeClass("active")
      }
      console.log(test);
      


});

