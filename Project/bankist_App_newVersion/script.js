'use strict';

///////////////////////////////////////
// Modal window

//  variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = Array.from(document.querySelectorAll('.btn--show-modal'));
const btnScroll = document.querySelector('.btn--scroll-to');
const headerTitle = document.querySelector('.header__title');
const header = document.querySelector('header').getBoundingClientRect();
const navLink = document.querySelectorAll('.nav__link');
const navLinks = document.querySelector('.nav__links');
const tabbedBtnContainer = document.querySelector('.operations__tab-container');
const tabbedButtons = document.querySelectorAll('.operations__tab');
const tabbedContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const nLink = document.querySelectorAll('.nav__link');
const sectionOne = document.getElementById('section--1');
// pop up code
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
  // scroll to down
  document.documentElement.scrollTo({
    top: header.height,
    behavior: 'smooth',
  });

  // scroll to up
  // document.documentElement.scrollIntoView({
  //   top: header.height,
  //   behavior: 'smooth',
  // });
  document.getElementById('section--1').scrollIntoView({
    // top: header.height,
    behavior: 'smooth',
  });
});

// page navigation smooth scroll

// // #1
// navLink.forEach(function (item) {
//   item.addEventListener('click', function (e) {
//     e.preventDefault();
//     const navId = item.getAttribute('href');
//     const navEl = document.querySelector(navId);
//     navEl.scrollIntoView({ behavior: 'smooth' });
//   });
// });

// #2
navLinks.addEventListener('click', function (e) {
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const navId = e.target.getAttribute('href');
    if (navId == '#') return '';
    const navEl = document.querySelector(navId);
    navEl.scrollIntoView({ behavior: 'smooth' });
  }
});

// tabbed component
// variable

// event listener
tabbedBtnContainer.addEventListener('click', e => {
  const realBtn = e.target.closest('.operations__tab');

  // guard clause
  if (!realBtn) return;

  // remove active
  tabbedButtons.forEach(b => {
    b.classList.remove('operations__tab--active');
  });

  tabbedContent.forEach(c => {
    c.classList.remove('operations__content--active');
  });

  // active
  realBtn.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${realBtn.dataset.tab}`)
    .classList.add('operations__content--active');
});

// menu fade animation

// menu fade fun
const menuFadeFunc = function (e, opacity) {
  const btnLink = e.target.closest('.nav__link');

  if (!btnLink) return;

  nLink.forEach(function (navI) {
    if (btnLink != nLink) {
      navI.style.opacity = opacity;
      btnLink.style.opacity = '1';
    }
  });
};

// mouse over event
nav.addEventListener('mouseover', function (e) {
  menuFadeFunc(e, '0.5');
});

// mouse out event
nav.addEventListener('mouseout', function (e) {
  menuFadeFunc(e, '1');
});

// -------- sticky navigation
// const sectionOnTopBounding = sectionOne.getBoundingClientRect().top;
// window.addEventListener('scroll', function () {
//   if (window.scrollY > sectionOnTopBounding) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });
const sections = document.querySelectorAll('.section');

const obsCallBack = function (entries, observer) {
  entries.forEach(function (item) {
    console.log(item);
    if (!item.isIntersecting) {
      nav.classList.remove('sticky');
    } else {
      nav.classList.add('sticky');
    }

    // if (!item.intersectionRation) {
    // }
  });
};

const options = {
  root: null,
  threshold: 0,
  // rootMargin: '-90px',
};

const observer = new IntersectionObserver(obsCallBack, options);

sections.forEach(item => {
  observer.observe(item);
});

// revealing elements on scroll
const reveCallBack = function (entries, obverse) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  obverse.unobserve(entry.target);
};

const reveOption = {
  root: null,
  threshold: 0.1,
  rootMargin: '90px',
};

const reveScroll = new IntersectionObserver(reveCallBack, reveOption);

sections.forEach(section => {
  reveScroll.observe(section);
  section.classList.add('section--hidden');
});

// lazy image loading
const imagesLazy = document.querySelectorAll('img[data-src]');

const imgIOCallback = function (entries, observe) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove('lazy-img');
};

const imgIoOption = {
  root: null,
  threshold: 0,
};

const imgIO = new IntersectionObserver(imgIOCallback, imgIoOption);

imagesLazy.forEach(img => {
  imgIO.observe(img);
});

/////////////////////////////
////////////practice////////
///////////////////////////

// observer.observe(sectionOne);
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

// console.log(navLinks.querySelectorAll('a'));

// console.log(navLinks.children);
// // navLinks.firstElementChild.style.color = 'red';

// console.log(navLinks.parentNode);
// console.log(navLinks.parentElement);
// console.log(navLinks.closest('nav'));

// console.log(
//   document.querySelector('.features__feature').previousElementSibling
// );
// console.log(document.querySelector('.features__feature').nextElementSibling);

// console.log(navLinks.nextSibling);
// console.log(window.navigator.onLine);
