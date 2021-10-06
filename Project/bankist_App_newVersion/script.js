'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = Array.from(document.querySelectorAll('.btn--show-modal'));
const btnScroll = document.querySelector('.btn--scroll-to');
const headerTitle = document.querySelector('.header__title');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(function (btn) {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// SECTION practice
// console.log(headerTitle.getBoundingClientRect());
// console.log(window.pageXOffset);
// console.log(window.pageYOffset);
// console.log(headerTitle.clientWidth);

btnScroll.addEventListener('click', function () {
  // get headBound
  const headBound = document.querySelector('header').getBoundingClientRect();

  // make window to scroll
  window.scrollTo({
    top: headBound.height,
    behavior: 'smooth',
  });

  window.scrollTo({ behavior: 'smooth' });
  document
    .querySelector('header')
    .scrollIntoView({ top: headBound.height, behavior: 'smooth' });
});

// btnScroll.onmouseenter = function () {
//   console.log('Helloi');
// };

// const  = function () {
//   console.log('hello');
// };

// const btnEnterFunc = () => {
//   btnScroll.addEventListener('mouseenter', function () {
//     console.log('hello');
//   });
//   btnScroll.removeEventListener('mouseenter', btnEnterFunc);
// };

// btnEnterFunc();

// const btnFunc = function () {
//   btnScroll.addEventListener('mouseenter', () => {
//     console.log('hello');
//     btnScroll.removeEventListener('mouseenter', btnFunc);
//   });
// };

// btnFunc();

function btnFunc() {
  console.log('hello');
  btnScroll.removeEventListener('mouseenter', btnFunc);
}

btnScroll.addEventListener('mouseenter', btnFunc);
