$(document).ready(function () {
  $("#scroll-button").click(() => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#first-section").offset().top,
      },
      600
    );
  });
});
