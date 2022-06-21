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
})