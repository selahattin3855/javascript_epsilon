var swiper = new Swiper('.swiper-container', {
   
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 400,
      modifier: 1,
      slideShadows : true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  