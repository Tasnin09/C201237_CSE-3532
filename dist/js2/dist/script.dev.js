"use strict";

var menu = document.querySelector('#menu-btn');
var navbar = document.querySelector('.header .navbar');

menu.onclick = function () {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = function () {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

document.querySelector('#close-edit').onclick = function () {
  document.querySelector('.edit-form-container').style.display = 'none';
  window.location.href = 'admin.php';
};
//# sourceMappingURL=script.dev.js.map
