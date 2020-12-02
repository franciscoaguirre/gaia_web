$(document).ready(() => {
  $('.hamburger').on('click', (event) => {
    const $target = $(event.currentTarget);
    showHamburgerMenu($target);
  });
});

function showHamburgerMenu($hamburger) {
  $hamburger.toggleClass('is-active');
  $('#hamburger-menu').toggleClass('d-none').toggleClass('d-flex');
  $('#gaia-header').toggleClass('border-bottom').toggleClass('border-secondary');
}
