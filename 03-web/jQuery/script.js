$(document).ready(function () {
  $(".menu li").hover(
    function () {
      $(this).find(".sub li").stop().slideDown();
    },
    function () {
      $(this).find(".sub li").stop().slideUp();
    }
  );

  var i = 3;
  setInterval(function () {
    if (i == 3) $(".slide img").css({ display: "block" });
    $(".slide img").eq(--i).fadeOut();
    if (i == 0) i = 3;
  }, 2000);
});
