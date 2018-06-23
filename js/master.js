document.addEventListener("DOMContentLoaded", function(event) {
  $(".single-item").slick({
    dots: true,
    autoplay: true,
    infinite: true
    // adaptiveHeight: true
  });

  var test = window.matchMedia("(max-width: 700px)");
  console.log(test);
  console.log(test.matches);
  if (test.matches) {
    document.getElementById("facebookbig").setAttribute("display", "hidden");
    document.getElementById("facebooksmall").setAttribute("display", "flex");
  } else {
    document.getElementById("facebookbig").setAttribute("display", "flex");
    document.getElementById("facebooksmall").setAttribute("display", "hidden");
  }

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
