$(document).ready(function () {
  $(".menu").hover(
    function () {
      $(".sub li").stop().slideDown();
    },
    function () {
      $(".sub li").stop().slideUp();
    }
  );

  var i = 3;
  setInterval(function () {
    if (i == 3) $(".slide img").css({ display: "block" });
    $(".slide img").eq(--i).fadeOut();
    if (i == 0) i = 3;
  }, 2000);
});
