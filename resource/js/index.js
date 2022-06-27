let swiper2 = null
let swiper3 = null
$(document).ready(function(){
  const swiper1 = new Swiper('.carton', {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 204,
    loop: true,
    loopedSlides: 5,  
    autoHeight: false,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.carton .button.next',
      prevEl: '.carton .button.prev',
    },
  });
  swiper2 = new Swiper('.funding .left-swiper', {
    direction: 'vertical',
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 11,
    loop: true,
    loopedSlides: 5,  
    autoHeight: false,
    observer: true,
    observeParents: true,
    touchRatio: 0
  });
  swiper3 = new Swiper('.funding .right-swiper', {
    direction: 'vertical',
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 50,
    loop: true,
    loopedSlides: 8,  
    autoHeight: true,
    observer: true,
    observeParents: true,
    on:{
      slidePrevTransitionStart(){
        swiper2.slidePrev()
      },
      slideNextTransitionStart(){
        swiper2.slideNext()
      }
    }
  });
})

$(document).on('click', '.news .list .item', function(){
  const target = $(this).children('.top').attr('class')
  if(target.includes('on')){
    $(this).children('.top').removeClass('on')
  } else {
    $(this).children('.top').addClass('on')
  }
})