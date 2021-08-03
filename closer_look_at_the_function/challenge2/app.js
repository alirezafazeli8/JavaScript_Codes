"use strict";

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    (function () {
      header.style.color = "blue";
    })();
  });
})();
