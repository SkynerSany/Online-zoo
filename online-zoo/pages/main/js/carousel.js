import CreateDomElement from "./createDomElement.js";

export default class Carousel {
  constructor(btnPrev, btnNext, inputRange, slider, sliderItem, data) {
    this.btnPrev = document.querySelector(btnPrev);
    this.btnNext = document.querySelector(btnNext);
    this.inputRange = document.querySelector(inputRange);
    this.slider = document.querySelector(slider);
    this.sliderItem = sliderItem;
    this.createDomElement = new CreateDomElement(data, this.slider);
  }

  position = 0;

  setDisabled(btn, timeOut) {
    btn.disabled = true;
    setTimeout(() => btn.disabled = false, timeOut);
  }

  setNextItem() {
    this.position += this.sliderItem.offsetWidth + parseFloat(getComputedStyle(this.slider).columnGap);
    console.log()

    if (this.position >= this.slider.scrollWidth) {
      this.position = 0;
    }

    this.slider.style["transform"] = `translateX(${-this.position}px)`;

    this.setDisabled(this.btnNext, 500);
  }

  setPrevItem() {
    this.position -= this.sliderItem.offsetWidth + parseFloat(getComputedStyle(this.slider).columnGap);

    if (this.position < 0) {
      this.position = this.slider.scrollWidth - this.sliderItem.offsetWidth;
    }

    this.slider.style.transform = `translateX(${-this.position}px)`;
    this.setDisabled(this.btnPrev, 500);
  }
  

  setCurrentItem() {
    const itemWidth = this.sliderItem.offsetWidth + parseFloat(getComputedStyle(this.slider).columnGap);
    
    this.position = this.inputRange.value;

    this.slider.style.transform = `translateX(${-itemWidth * this.position}px)`;
  }

  setEvents(itemsCount, itemsInItemsCount) {
    const windowWidth = document.documentElement.clientWidth;
    for (let i = 0; i < itemsCount; i++) {
      this.createDomElement.addNewElement(windowWidth > 640 || this.inputRange ? itemsInItemsCount : 4, 'end');
    }
    
    this.sliderItem = document.querySelector(this.sliderItem);

    this.btnNext?.addEventListener('click', () => this.setNextItem());
    this.btnPrev?.addEventListener('click', () => this.setPrevItem());
    this.inputRange?.addEventListener('input', () => this.setCurrentItem());
  }
};
