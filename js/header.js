var baseURL = window.location.origin + "/portofolio-website";

$(function () {
  $(window).on("scroll", function () {
    let valueScroll = this.scrollY;
    let nav = $("nav");

    if (valueScroll >= 95) {
      if (!$(nav).hasClass("sticky-md-top")) {
        $(nav).removeClass(
          "position-static animate__animated animate__fadeInDown animate__slideInDown animate__slow"
        );
        $(nav).addClass(
          "prt-box-shadow-nav sticky-md-top animate__animated animate__fadeInDown"
        );
      }
    } else {
      if (!$(nav).hasClass("position-static")) {
        $(nav).removeClass(
          "prt-box-shadow-nav sticky-md-top animate__animated animate__fadeInDown animate__slideInDown animate__slow"
        );
        $(nav).addClass(
          "position-static animate__animated animate__slideInDown animate__slow"
        );
      }
    }
  });

  $("#close").on("click", function () {
    $(".prt-overlay").css("height", "0");
    setTimeout(() => {
      $("body").removeClass("overflow-hidden");
      $("nav").addClass("fixed-bottom");
    }, 700);
  });

  $("#menu").on("click", function () {
    $("body").addClass("overflow-hidden");
    $("nav").removeClass("fixed-bottom");
    $(".prt-overlay").css("height", "100%");
  });
});
