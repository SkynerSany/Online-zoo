import BurgerMenu from "../../../sharing/js/burgerMenu.js";
import Carousel from "./carousel.js";
import * as petsData from './data/petsSliderData.js';
import * as testimonialsData from './data/testimonialsData.js';
import * as testimonialsPopupData from './data/testimonialsPopupData.js';
import TestimonialsPopup from "./testimonialsPopup.js";

const petsCarousel = new Carousel(
    '.pets__btnPrev', 
    '.pets__btnNext', 
    null, 
    '.pets__slider', 
    '.pets__sliderItem',
    petsData,
    'slider'  
  );

const testimonialsCarousel = new Carousel(
    null,
    null, 
    '.testimonials__range', 
    '.testimonials__reviewsContainer', 
    '.testimonials__review', 
    testimonialsData,
    'testimonials'
  );

const testimonialsPopup = new TestimonialsPopup(testimonialsPopupData);
const burgerMenu = new BurgerMenu();

petsCarousel.setEvents(3, 6, true);
testimonialsCarousel.setEvents(11, 1, false);
testimonialsPopup.setEvents();
burgerMenu.setEvents();