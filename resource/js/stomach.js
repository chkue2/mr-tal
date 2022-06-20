$(document).ready(function(){
  const newSwiper = new Swiper('section.mo .section__common', {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 92,
    loop: true,
    loopedSlides: 20,  
    autoHeight: true,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    on: {
      slideChange: function(e){
        switch(e.realIndex){
          case 0: 
            $('.mobile#lee-case1').click()
            break
          case 1:
            $('.mobile#kwon-case1').click()
            break
          case 2:
            $('.mobile#chung-case1').click()
            break
          case 3:
            $('.case__container').hide()
            $(`.case__container.jeon-case1`).show()
            break
        }
        $('html, body').animate({
          scrollTop: 0
        })
      }
    }
  });

  let tabCase = 'lee-case1'
  $('.case__container').hide()
  $(`.case__container.${tabCase}`).show()
  $('.tab__case').removeClass('on')
  $(`#${tabCase}`).addClass('on')
  $(`.mobile#${tabCase}`).addClass('on')
})

$(document).on('click', '.tab__item', function(){
  const id = $(this).attr('id')
  $('section.pc .section__common').hide()
  $(`section.pc .section__common.${id}`).show()

  if(id === 'jeon') {
    $('.case__container').hide()
    $(`.case__container.jeon-case1`).show()
  } else {
    let tabCase = `${id}-case1`
    $(`#${tabCase}`).click()
  }
}),
$(document).on('click', '.tab__case', function(){
  const id = $(this).attr('id')

  $('.case__container').hide()
  $(`.case__container.${id}`).show()
  $('.tab__case').removeClass('on')
  $(`#${id}`).addClass('on')
  $(`.mobile#${id}`).addClass('on')

  let navText = 'CASE 1'
  switch(id){
    case 'lee-case1':
    case 'kwon-case1':
    case 'chung-case1':
      navText = 'CASE 1'
      break
    case 'lee-case2':
    case 'kwon-case2':
    case 'chung-case2':
      navText = 'CASE 2'
      break
    case 'lee-case3':
      navText = 'CASE 3'
      break
    case 'lee-case4':
      navText = 'CASE 4'
      break
  }
  $('.pcNav').html(navText)
})