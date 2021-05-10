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

const slider = document.querySelector(`.slider`);
const slideAfter = slider.querySelector(`.slider__image-after`);
const sliderButtons = slider.querySelectorAll(`.slider__button`);
const sliderInputRange = slider.querySelector(`.slider__input-range`);

[...sliderButtons].forEach((button) => {
  button.addEventListener(`click`, () => {
    slideAfter.style.width = button.dataset.type === `after` ? `100%` : `0%`;
    sliderInputRange.value = button.dataset.type === `after` ? 100 : 0;
  });
});

sliderInputRange.addEventListener(`input`, (evt) => {
  slideAfter.style.width = `${evt.target.value}%`;
});
