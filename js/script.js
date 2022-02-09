

$(document).ready(function(){

    const swiper = new Swiper('.section04 > .box > .swiper', {
      loop: true,
      slidesPerView: 4, 
      spaceBetween: 20, 
      slidesPerGroup: 4,
    
      pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
      },
    },

    $(".btn").click(function(){
        $("html,body").animate({
          scrollTop : 0 ,
        },1500);
      });
      
    });

    $(window).scroll(function(){
      
      var test = $(window).scrollTop();
      if(test >= 1400){
        $(".btn").addClass("active")
      }else if(test==0){
        $(".btn").removeClass("active")
      }
      console.log(test);
      
      AOS.init();


});



