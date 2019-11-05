if (process.browser) {
	let WebFont = require('webfontloader');

	WebFont.load({
		google: {
			families: [ 'IBM Plex Sans:400,600' ]
		}
	});
}

import Vue from 'vue';
import AsyncComputed from 'vue-async-computed';
import { dom, config, library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShippingFast, faFeather, faCubes, faHandHoldingHeart, faMobileAlt, faPaintRoller, faPaste, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// config.searchPseudoElements = true;
// dom.watch();

Vue.use(AsyncComputed);

library.add(faGithub, faTwitter, faSearch, faShippingFast, faFeather, faCubes, faHandHoldingHeart, faMobileAlt, faPaintRoller, faPaste, faLifeRing);

Vue.component('Fa', FontAwesomeIcon);

export default ({ router, setHead }) => {
	setHead({
		title: 'Empathy — Build A Nice Looking Admin Panel In A Blink.',
		meta: [
			{
				name: 'description',
				content: 'A Lightweight Admin Panel Components With Tailwindcss and Vue.'
			}
		],
	})

	router.addRoutes([
		{ path: '/docs', redirect: '/docs/1.0' },
		{ path: '/docs/1.0', redirect: '/docs/1.0/what-is-empathy' }
	]);

	if (process.browser) {
	    const loaded = Object.create(null);

	    router.beforeEach((to, from, next) => {
			if (!loaded[to.path]) {
				document.documentElement.style.setProperty('--loading', '1');
			}
			next()
	    })

	    router.afterEach(to => {
			loaded[to.path] = true
			document.documentElement.style.setProperty('--loading', '0');
	    })
  	}
}
