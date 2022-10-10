import CreateDomElement from "./createDomElement.js";

export default class Carousel {
  constructor(btnPrev, btnNext, inputRange, slider, sliderItem, data, type) {
    this.btnPrev = document.querySelector(btnPrev);
    this.btnNext = document.querySelector(btnNext);
    this.inputRange = document.querySelector(inputRange);
    this.slider = document.querySelector(slider);
    this.sliderItem = sliderItem;
    this.createDomElement = new CreateDomElement(data, this.slider);
    this.type = type;
  }

  position = 0;

  setDisabled(btn, timeOut) {
    btn.disabled = true;
    setTimeout(() => btn.disabled = false, timeOut);
  }

  switchItem(from) {
    this.createDomElement.removeDomElements(2, from);
    this.setItems(2, 6, true, from);
  }

  setNextItem() {
    this.position += this.sliderItemWidth + parseFloat(getComputedStyle(this.slider).columnGap);

    if (this.position >= this.sliderWidth) {
      this.switchItem('start');
      this.position = 0;
    }

    this.slider.style["transform"] = `translateX(${-this.position}px)`;
    
    this.setDisabled(this.btnNext, 500);
    this.switchItem('end');
  }

  setPrevItem() {
    this.position -= this.sliderItemWidth + parseFloat(getComputedStyle(this.slider).columnGap);

    if (this.position < 0) {
      this.switchItem('end');
      this.position = this.sliderWidth - this.sliderItemWidth;
    }

    this.slider.style.transform = `translateX(${-this.position}px)`;
    this.setDisabled(this.btnPrev, 500);

    this.switchItem('start');
  }

  setCurrentItem() {
    const itemWidth = this.sliderItemWidth + parseFloat(getComputedStyle(this.slider).columnGap);
    
    this.position = this.inputRange.value;

    this.slider.style.transform = `translateX(${-itemWidth * this.position}px)`;
  }

  setItems(itemsCount, itemsInItemsCount, isRandom, to) {
    const windowWidth = document.documentElement.clientWidth;
    let item = {};

    for (let i = 0; i < itemsCount; i++) {
      item = this.createDomElement.addNewElement(
        windowWidth > 640 || this.inputRange ? itemsInItemsCount : 4, 
        to, 
        isRandom, 
        this.type
      );
    }

    return item;
  }

  setEvents(...args) {
    this.setItems(...args, 'end');

    this.sliderItem = document.querySelector(this.sliderItem);
    this.sliderItemWidth = this.sliderItem.offsetWidth;
    this.sliderWidth = this.slider.scrollWidth;

    this.btnNext?.addEventListener('click', () => this.setNextItem());
    this.btnPrev?.addEventListener('click', () => this.setPrevItem());
    this.inputRange?.addEventListener('input', () => this.setCurrentItem());
  }
};
