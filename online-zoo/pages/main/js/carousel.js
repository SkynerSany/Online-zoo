import CreateDomElement from "./createDomElement.js";

export default class Carousel {
  constructor(btnPrev, btnNext, inputRange, slider, sliderItem, data) {
    this.btnPrev = document.querySelector(btnPrev);
    this.btnNext = document.querySelector(btnNext);
    this.inputRange = document.querySelector(inputRange);
    this.slider = document.querySelector(slider);
    this.sliderItem = sliderItem;
    this.createDomElement = new CreateDomElement(data, this.slider);
    this.touchPosition = 0;
    this.prevPosition = 0;
    this.position = 0;
  }

  setDisabled(btn, timeOut) {
    btn.disabled = true;
    setTimeout(() => btn.disabled = false, timeOut);
  }

  setNextItem() {
    ++this.position;

    if (this.position === Math.ceil(this.slider.childNodes.length / 2)) {
      this.position = -Math.floor(this.slider.childNodes.length / 2);
    }

    this.slider.style["transform"] = `translateX(${-this.position}00%)`;

    this.setDisabled(this.btnNext, 500);
  }

  setPrevItem() {
    --this.position;

    if (this.position <= -Math.ceil(this.slider.childNodes.length / 2)) {
      this.position = Math.floor(this.slider.childNodes.length / 2);
    }

    this.slider.style.transform = `translateX(${-this.position}00%)`;
    this.setDisabled(this.btnPrev, 500);
  }

  setCurrentItem(touchPosition) {
    const itemHeight = this.sliderItem.offsetHeight + parseFloat(getComputedStyle(this.slider).rowGap);
    const itemWidth = this.sliderItem.offsetWidth + parseFloat(getComputedStyle(this.slider).columnGap);
    
    this.position = this.inputRange.value;

    if (touchPosition) {
      if (this.prevPosition + (this.touchPosition - touchPosition) < 0) {

        this.slider.style.transform = `translateY(0px)`;
        this.prevPosition = 0;

      } else if (this.prevPosition + (this.touchPosition - touchPosition) > itemHeight * this.inputRange.max) {

        this.slider.style.transform = `translateY(-${itemHeight * this.inputRange.max}px)`;
        this.prevPosition = itemHeight * this.inputRange.max;

      } else {

        this.slider.style.transform = `translateY(-${this.prevPosition + (this.touchPosition - touchPosition)}px)`;

      }
    } else {
      this.slider.style.transform = `translateX(${-itemWidth * this.position}px)`;
    }
  }

  setEvents(itemsCount, itemsInItemsCount) {
    const windowWidth = document.documentElement.clientWidth;
    for (let i = 0; i < itemsCount; i++) {
      this.createDomElement.addNewElement(windowWidth > 1000 || this.inputRange ? itemsInItemsCount : 4, 'end');
    }
    
    this.sliderItem = document.querySelector(this.sliderItem);

    this.btnNext?.addEventListener('click', () => this.setNextItem());
    this.btnPrev?.addEventListener('click', () => this.setPrevItem());
    this.inputRange?.addEventListener('input', () => this.setCurrentItem());
    
    if (this.inputRange && windowWidth <= 1000) {
      this.slider.addEventListener('touchstart', (e) => this.touchPosition = e.touches[0].pageY);
      this.slider.addEventListener('touchmove', (e) => {e.preventDefault(); this.setCurrentItem(e.touches[0].pageY)});
      this.slider.addEventListener('touchend', (e) => {this.prevPosition += (this.touchPosition - e.changedTouches[0].pageY);});
    }
  }
};
