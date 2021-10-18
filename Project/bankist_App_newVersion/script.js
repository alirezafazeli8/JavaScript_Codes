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
    closeModal(e);
  }
});

// smooth
btnScroll.addEventListener('click', function () {
  // get header bounding
  const header = document.querySelector('header').getBoundingClientRect();

  // scroll to down
  document.documentElement.scrollTo({
    top: header.height,
    behavior: 'smooth',
  });

  // scroll to up
  document.documentElement.scrollIntoView({
    top: header.height,
    behavior: 'smooth',
  });
});

/////////////////////////////
////////////practice////////
///////////////////////////

// console.log((document.getElementsByTagName('p')[0].style.color = 'red'));

// console.log(document.querySelector('.header__title').parentElement);

// const myNewEl = document.createElement('code');
// myNewEl.innerHTML = '<p>this is my code</p>';

// // myNewEl.prepend('<P>keys</P>');
// // myNewEl.append('<P>kir</P>');
// const nwEle = myNewEl.cloneNode();
// nwEle.innerHTML = '<p>hello</p>';
// console.log(nwEle);

// // console.log(myNewEl)

// const el = document.querySelector('.btn--scroll-to');

// // // document.querySelector('.header__title').remove();
// // document.querySelector('.header__title').removeChild(el);

// // console.log(getComputedStyle(el));
// // el.style.setProperty('color', 'blue');

// console.log(el.className);
// console.log(el.getAttribute('class'));
// el.setAttribute('data-password', 'alireza');

// // console.log(el.getAttribute('data-password'));
// // console.log(el.getAttribute('data'));
// console.log(el.dataset.password);

// console.log(el.src);
