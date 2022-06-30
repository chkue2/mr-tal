let swiper2 = null
let swiper3 = null
$(document).ready(function(){
  const swiper1 = new Swiper('.universe .carton', {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 204,
    loop: true,
    loopedSlides: 5,  
    autoHeight: false,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.universe .carton .button.next',
      prevEl: '.universe .carton .button.prev',
    },
  });
  swiper2 = new Swiper('.funding .left-swiper', {
    direction: 'vertical',
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 50,
    loop: true,
    loopedSlides: 6,  
    autoHeight: false,
    observer: true,
    observeParents: true,
    touchRatio: 0
  });
  swiper3 = new Swiper('.funding .right-swiper', {
    direction: 'vertical',
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    loopedSlides: 6,  
    autoHeight: false,
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
  const swiper4 = new Swiper('.universe__mo .carton', {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    loopedSlides: 5,  
    autoHeight: false,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.universe__mo .carton .button.next',
      prevEl: '.universe__mo .carton .button.prev',
    },
  });

  const swiper5 = new Swiper('.funding__mo .swiper-container', {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    loopedSlides: 5,  
    autoHeight: false,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.funding__mo .button.next',
      prevEl: '.funding__mo .button.prev',
    },
  });
  const swiper6 = new Swiper('.benefit__mo .cards', {
    centeredSlides: true,
    slidesPerView: 'auto',
    autoHeight: true,
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5,  
    navigation: {
      nextEl: '.benefit__mo .button.next',
      prevEl: '.benefit__mo .button.prev',
    },
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

$(document).on('click', 'header.pc .menu__item', function(){
  const target = $(this).attr('id')
  
  document.querySelector(`.${target}`).scrollIntoView({behavior: 'smooth'})
})

$(document).on('click', 'header.mo .menu', function(){
  toggleSideMenu()
})
$(document).on('click', '.sidemenu .close__button', function(){
  toggleSideMenu()
})
$(document).on('click', '.sidemenu .logo', function(){
  toggleSideMenu()
  
  document.querySelector(`.socialMissonMo`).scrollIntoView({behavior: 'smooth'})
})
$(document).on('click', '.sidemenu .menu', function(){
  toggleSideMenu()

  const target = $(this).attr('id')
  
  document.querySelector(`.${target}`).scrollIntoView({behavior: 'smooth'})
})
$(document).on('click', 'header.mo .lang', function(){
  toggleLangMenu()
})
$(document).on('click', '.roadmapMo .item.color', function(){
  if($(this).attr('class').split(' ').includes('on')){
    $(this).removeClass('on')
  } else {
    $(this).addClass('on')
  }
})
$(document).on('click', '.teamsMo .item', function(){
  if($(this).attr('class').split(' ').includes('on')){
    $(this).removeClass('on')
  } else {
    $(this).addClass('on')
  }
})
const toggleSideMenu = () => {
  const target = $('.sidemenu')
  $('.langmenu').removeClass('on')
  $('.moremission').removeClass('on')
  if(target.attr('class').split(' ').includes('on')){
    target.removeClass('on')
  } else {
    target.addClass('on')
  }
}
const toggleLangMenu = () => {
  const target = $('.langmenu')
  $('.sidemenu').removeClass('on')
  $('.moremission').removeClass('on')
  if(target.attr('class').split(' ').includes('on')){
    target.removeClass('on')
  } else {
    target.addClass('on')
  }
}
const toggleAcceptMoreMission = () => {
  const target = $('.moremission')
  $('.sidemenu').removeClass('on')
  $('.langmenu').removeClass('on')
  if(target.attr('class').split(' ').includes('on')){
    target.removeClass('on')
  } else {
    target.addClass('on')
  }
}

const moveToUniverse = () => {
  document.querySelector(`.universe`).scrollIntoView({behavior: 'smooth'})
}
const moveToUniverseMo = () => {
  $('.moremission').removeClass('on')
  document.querySelector(`.universeMo`).scrollIntoView({behavior: 'smooth'})
}

const moveToTop = () => {
  $('.sidemenu').removeClass('on')
  $('.langmenu').removeClass('on')
  $('.moremission').removeClass('on')
  $('html, body').stop().animate({
    scrollTop: 0
  })
}