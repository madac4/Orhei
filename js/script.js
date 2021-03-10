const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav__list');
const body = document.querySelector('body');
if (burger) {
    burger.addEventListener('click', () => {
        hero.classList.toggle('lock');
        burger.classList.toggle('active');
        navList.classList.toggle('active');
    })
}

const mainSwiper = document.querySelector('.main__swiper');
if (mainSwiper) {
    var swiper = new Swiper('.main__swiper', {
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,

        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
    });

    let mySliderCurrentSlide = document.querySelector('.swiper-pagination-current');
    let mySliderAllSlides = document.querySelector('.swiper-pagination-total');

    mySliderAllSlides.innerHTML = swiper.slides.length;
    swiper.on('slideChange', () => {
        let currentSlide = ++swiper.realIndex;
        mySliderCurrentSlide.innerHTML = currentSlide;
    });
};


const search = document.querySelector('.header__search');
const searchBlock = document.querySelector('.header__search-block');
const searchClose = document.querySelector('.search__close');

if (search) {
    search.addEventListener('click', () => {
        searchBlock.classList.add('active');
    });
    searchClose.addEventListener('click', () => {
        searchBlock.classList.remove('active');
    });
}

const map = document.querySelector('#map');
if (map) {
    function initMap() {
        const uluru = { lat: -25.344, lng: 111.036 };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: uluru,
        });
        const marker = new google.maps.Marker({
            position: uluru,
            map: map,
        });
    };
};

const gallerySlider = document.querySelector('.gallery-swiper');

if (gallerySlider) {
    var gallerySwiper = new Swiper('.gallery-swiper', {
        loop: true,
        spaceBetween: 30,
        freeMode: true,
        navigation: {
            nextEl: '.post-swiper__next',
            prevEl: '.post-swiper__prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            776: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1110: {
                slidesPerView: 6,
                spaceBetween: 40,
            },
        }
    });
};

const scrollDown = document.querySelector('.scroll');

if (scrollDown) {
    scrollDown.addEventListener('click', () => {
        const headerH = document.querySelector('.header').offsetHeight;
        const heroH = document.querySelector('.main__swiper').offsetHeight;

        window.scrollTo({
            top: headerH + heroH,
            behavior: "smooth"
        });
    })
}

const scrollToTop = document.querySelector('.to_top');

if (scrollToTop) {
    scrollToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
}

const postSlider = document.querySelector('.post-swiper');
if (postSlider) {
    var postSwiper = new Swiper('.post-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerGroup: 1,
        loop: true,
        pagination: {
            el: '.post-swiper__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.post-swiper__next',
            prevEl: '.post-swiper__prev',
        },
    });
}

const header = document.querySelector('#header');
const hero = document.querySelector('#main');
if (header) {
    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        const headerHeight = header.offsetHeight;
        if (scrollPos > headerHeight) {

            hero.style.marginTop = `${header.offsetHeight}px`;
            header.classList.add('fixed')
        } else {
            hero.style.marginTop = `0px`;
            header.classList.remove('fixed')
        }
    });
}


const acc = document.querySelectorAll(".accordeon__header");
const accordeon = document.querySelector('.visit__rules-accordeon');

if (accordeon) {
    for (let index = 0; index < acc.length; index++) {
        acc[index].addEventListener("click", function() {
            const plus = acc[index].querySelector('.accordeon__plus');
            plus.classList.toggle('active')
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";

            } else {
                panel.style.display = "block";
            }

        });
    };
}