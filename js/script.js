'use strict';

const reviewsSwiper = document.querySelector('.swiper-reviews');
if (reviewsSwiper) {
	const swiper = new Swiper('.swiper-reviews', {
		// Optional parameters
		loop: true,
		observer: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
	});
}
