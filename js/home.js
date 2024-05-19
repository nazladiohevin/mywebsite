$(function() {

  let $owl = $(".owl-carousel");
  $owl.owlCarousel({
    loop: true,
    items: 1,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    dotsData: true,
    dotsContainer: '.project-dots',
    dots: true,
    responsive: {
      0: {
        stagePadding: 0
      },
      576: {
        stagePadding: 90,
        margin: 10
      },
      768: {
        stagePadding: 140,
        margin: 25
      },
      992: {
        stagePadding: 150,
        margin: 40
      },
      1200: {
        stagePadding: 200,
        margin: 50
      },
      1400: {
        stagePadding: 230,
        margin: 70  
      }
    }
  });

  $('.prt-see .owl-dot').on('click', function () {
    $owl.trigger('to.owl.carousel', [$(this).index(), 300]);
  });
  // Pas udah ke tengah
  // $owl.on('translated.owl.carousel', function(event) {
   
  // })

  // $owl.on('translated.owl.carousel', function(event) {
  //   $(selector).toggleClass(className);
  //   $('.owl-carousel .owl-stage .owl-item.active.center .prt-description').removeClass(
  //     'animate__animated animate__fadeOut animate__slow'
  //   );

  //   $('.owl-carousel .owl-stage .owl-item.active.center .prt-description').addClass(
  //     'animate__animated animate__fadeIn animate__slow'
  //   ); 

  //   $('.owl-carousel .owl-stage .owl-item .prt-description').removeClass(
  //     'animate__animated animate__fadeIn animate__slow'
  //   );

  //   $('.owl-carousel .owl-stage .owl-item .prt-description').addClass(
  //     'animate__animated animate__fadeOut animate__slow'
  //   );
  // })
})