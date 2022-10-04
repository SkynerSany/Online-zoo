import BurgerMenu from "../../../sharing/js/burgerMenu.js";
import Carousel from "./carousel.js";
import * as petsData from './data/petsSliderData.js';
import * as testimonialsData from './data/testimonialsData.js';

const petsCarousel = new Carousel('.pets__btnPrev', '.pets__btnNext', null, '.pets__slider', '.pets__sliderItem', petsData);
const testimonialsCarousel = new Carousel(null, null, '.testimonials__range', '.testimonials__reviewsContainer', '.testimonials__review', testimonialsData);
const burgerMenu = new BurgerMenu();

petsCarousel.setEvents(5, 6);
testimonialsCarousel.setEvents(11, 1);
burgerMenu.setEvents();