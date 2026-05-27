// ========== banner section start ==========
    const slider = new Swiper('.bannerSwiper', {
        loop: true,
        // effect: 'fade',
        speed: 1000, // Transition duration
        autoplay: {
            delay: 2000, // 2 seconds per slide
            disableOnInteraction: false, // Keep autoplay running even after user interaction
        },
    });
// ========== banner section end ==========


// ========== text slider section start ==========
const textSliderFun = () => {
    const textSlider = new Swiper('.textSlider', {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true, // Enable infinite looping
        autoplay: {
            delay: 2000, // 2 seconds per slide
            disableOnInteraction: false, // Keep autoplay running even after user interaction
        },
        speed: 1000, // Transition duration
        breakpoints: {
            400: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            580: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 60,
            },
        },
        on: {
            slideChangeTransitionStart: function () {
                // Get all slides
                const slides = document.querySelectorAll('.swiper-slide');

                // Reset all slide styles
                slides.forEach(slide => {
                    slide.style.color = 'balck';
                    slide.style.transform = 'scale(1)';
                });

                // Highlight the active slide
                const activeSlide = document.querySelector('.swiper-slide.swiper-slide-active');
                activeSlide.style.color = 'gray'; // Change color
                activeSlide.style.transform = 'scale(1.1)'; // Add zoom effect

                // Revert color after 1 second
                setTimeout(() => {
                    activeSlide.style.color = 'gray';
                }, 1000);
            },
        },
    });
}
textSliderFun();

const imageSlider = new Swiper('.imageSlider', {
    loop: true,
    // effect: 'fade',
    speed: 1000, // Transition duration
    autoplay: {
        delay: 2000, // 2 seconds per slide
        disableOnInteraction: false, // Keep autoplay running even after user interaction
    },
});
// ========== text slider section end ==========