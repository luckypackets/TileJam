let swiperCard = new Swiper(".tile-container", {
    grid: {
      rows: 1,
    },
    spaceBetween: 8,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      128: { slidesPerView: 2 },
      384: { slidesPerView: 3 },
      640: { slidesPerView: 4 },
      768: { slidesPerView: 5 },
      1024: { slidesPerView: 6 },
      1280: { slidesPerView: 7 },
      1536: { slidesPerView: 8 },
    },
  });
