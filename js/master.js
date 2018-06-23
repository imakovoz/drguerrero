document.addEventListener("DOMContentLoaded", function(event) {
  $(".single-item").slick({
    dots: true,
    autoplay: true,
    infinite: true
    // adaptiveHeight: true
  });

  var test = window.matchMedia("(max-width: 700px)");
  if (test.matches) {
    document.getElementById("facbookprof").setAttribute("data-height", "200");
  }
  (function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src =
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=223747385023298&autoLogAppEvents=1";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
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
