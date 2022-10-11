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

  setWaiting(btn, timeOut, from) {
    btn.disabled = true;
    
    setTimeout(() => {
      btn.disabled = false;
      this.createDomElement.removeDomElements(1, from);
    }, timeOut);
  }

  switchItem(from) {
    this.createDomElement.removeDomElements(2, from);
    this.setItems(2, 6, true, from);
  }

  setNextItem() {
    this.setItems(1, 6, true, 'end');

    this.position = this.sliderItemWidth

    this.slider.parentNode.scrollBy(this.position, 0);
    
    this.setWaiting(this.btnNext, 600, 'start');
  }

  setPrevItem() {
    this.setItems(1, 6, true, 'start');

    this.position = this.sliderItemWidth

    this.slider.parentNode.style.scrollBehavior = 'auto';
    this.slider.parentNode.scrollBy(this.position, 0);

    this.slider.parentNode.style.scrollBehavior = 'smooth';
    this.slider.parentNode.scrollTo(0, 0);
    
    this.setWaiting(this.btnPrev, 600, 'end');
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
