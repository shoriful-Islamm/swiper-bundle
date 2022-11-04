$(document).ready(function(){

      const swiper = new Swiper('.swiper', {
                  effect: 'cube',
                  grabCursor: true,
          cubeEffect: {
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                },
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
            },

          pagination: {
                  el: '.swiper-pagination',
                  type: 'fraction',
              },
           
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
              },



      });
});