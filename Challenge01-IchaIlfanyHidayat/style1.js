var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    loop:true,
    autoWidth:true,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".button-kanan",
        prevEl: ".button-kiri",
      },
    // responsive: {
    //   0: {
    //     items: 1,
    //     },
    //     600: {
    //     items: 3,
    //     },
    //     1000: {
    //     items: 5,
    //   },
  });