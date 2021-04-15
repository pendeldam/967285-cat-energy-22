const slider = document.querySelector(`.slider`);
const slides = slider.querySelectorAll(`.slider__slide`);
const slideBefore = slider.querySelector(`.slider__image-before`);
const slideAfter = slider.querySelector(`.slider__image-after`);
const sliderButtons = slider.querySelectorAll(`.slider__button`);
const sliderInputRange = slider.querySelector(`.slider__input-range`);

[...sliderButtons].forEach((button) => {
  button.addEventListener(`click`, () => {
    const type = button.dataset.type;

    [...slides]
      .find((slide) => {
        slide.classList.contains(`slider__slide--active`);
        slide.classList.remove(`slider__slide--active`);
      });

    slider.querySelector(`.slider__image-${type}`).classList.add(`slider__slide--active`);
  });
});
