$(document).ready(function(){
  const newSwiper = new Swiper('section.mo .section__common', {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: 4,  
    autoHeight: false,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  });
})
$(document).on('click', '.tab__item', function(){
  const id = $(this).attr('id')
  $('section.pc .section__common').hide()
  $(`section.pc .section__common.${id}`).show()
})