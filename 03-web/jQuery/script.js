$(document).ready(function () {
  var i = 3;
  setInterval(function () {
    if (i == 3) $(".slide img").css({ display: "block" });
    $(".slide img").eq(--i).fadeOut();
    if (i == 0) i = 3;
  }, 2000);
});
