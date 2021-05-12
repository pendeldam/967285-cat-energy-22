const mainNav = document.querySelector(`.main-nav`);
const mainNavToggle = mainNav.querySelector(`.main-nav__toggle`);

mainNav.classList.remove(`no-js`);

mainNavToggle.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  if (mainNav.classList.contains(`main-nav--opened`)) {
    mainNav.classList.remove(`main-nav--opened`);
    mainNav.classList.add(`main-nav--closed`);
  } else {
    mainNav.classList.remove(`main-nav--closed`);
    mainNav.classList.add(`main-nav--opened`);
  }
});
