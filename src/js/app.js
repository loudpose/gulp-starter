import Component from './components/component.js';
import GSAP from 'gsap';
import { isWebP } from './utils/functions.js';

GSAP.fromTo('main', {autoAlpha: 0}, {
	autoAlpha: 1,
	duration: 2
})

new Component()
isWebP()