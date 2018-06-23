document.addEventListener("DOMContentLoaded", function(event) {
  $(".single-item").slick({
    dots: true,
    autoplay: true,
    infinite: true
    // adaptiveHeight: true
  });
  var links = ["inicio", "procedimientos", "trajectoria", "contacto"];
  var elem = null;
  links.forEach(e => {
    document.getElementById(e + "link").addEventListener("click", e => {
      elem = "#" + e.target.id.slice(0, -4);
      $("html, body").animate({ scrollTop: $(elem).offset().top - 90 }, "slow");
      console.log(elem);
      // document.getElementById(elem).scrollIntoView({
      //   behavior: "smooth"
      // });
    });
  });
});
