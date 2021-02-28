'use strict';


// ====== loading =======

window.onload = function() {
  const spinner = document.getElementById('loading-mask');
  spinner.classList.add('loading-mask-hidden');
}

// =============================


// =============== modal-open ====================


const menu_1 = document.querySelector('.menu-1');
const menu = document.querySelector('.menu');
const Close = document.querySelector('.close');

const modal = document.querySelector('.modal');
const header = document.querySelector('header');
const modal_bg = document.querySelector('.modal-bg');

menu.addEventListener('click', ()=> {
  menu.classList.add('menuhide');
  Close.classList.add('close-in');
  Close.classList.add('fontcolchange');
  modal.classList.add('modal-open');
  modal_bg.classList.add('modal-open')
} );

Close.addEventListener('click', ()=> {
  Close.classList.remove('close-in');
  Close.classList.remove('fontcolchange');
  menu_1.classList.add('menu-in');
  modal.classList.remove('modal-open');
  modal_bg.classList.remove('modal-open')

} );

menu_1.addEventListener('click', ()=> {
  Close.classList.add('close-in');
  Close.classList.add('fontcolchange');
  menu_1.classList.remove('menu-in');
  modal.classList.add('modal-open');
  modal_bg.classList.add('modal-open')

} );

// ========================================================




// ================ スクロール時画像動かす ====================

$(window).on('scroll', function(){

  let scrollTop = $(window).scrollTop();
  let bgPosition = scrollTop / 10; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

  if(bgPosition){
    $('#welcome-img').css('background-position', 'center top -'+ bgPosition + 'px');

  }
});




// ==============================================================