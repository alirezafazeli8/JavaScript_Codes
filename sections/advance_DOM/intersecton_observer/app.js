"use strict";

let option = {
  root: null,
  rootMargin: "-10px",
  threshold: 0.5,
};

let ioCallback = function (entries, observer) {
  console.log("s");
};

const ioObserve = new IntersectionObserver(ioCallback, option);

const showLoading = document.querySelector(".show-loading");

ioObserve.observe(showLoading);
