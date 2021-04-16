const slider = document.querySelector(`.slider`);
const slideAfter = slider.querySelector(`.slider__image-after`);
const sliderButtons = slider.querySelectorAll(`.slider__button`);
const sliderInputRange = slider.querySelector(`.slider__input-range`);

[...sliderButtons].forEach((button) => {
  button.addEventListener(`click`, () => {
    slideAfter.style.width = button.dataset.type === `after` ? `100%` : `0%`;
  });
});
