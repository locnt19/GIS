var swiperHomeBanner = new Swiper('.home-banner .swiper-container', {
	slidesPerView: 1,
	loop: true,
	speed: 2500,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
	}
});
var swiperHomeRewards = new Swiper('.home-rewards .swiper-container', {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
	speed: 2000,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.home-rewards .lnr-chevron-right',
		prevEl: '.home-rewards .lnr-chevron-left',
	},
	breakpoints: {
		992: {
			slidesPerView: 3
		},
		768: {
			slidesPerView: 2
		},
		576: {
			slidesPerView: 1
		}
	}
});