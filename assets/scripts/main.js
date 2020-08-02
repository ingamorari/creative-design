const validateForm = () => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = re.test(String($("#email").val()).toLowerCase());
  const name = !!$("#name").val();
  const message = $("#message").val().length > 1;

  $(".submit-btn").prop("disabled", !(email && name && message));
};

$(document).ready(() => {
  $("#scroll-button").click(() => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#first-section").offset().top,
      },
      600
    );
  });
  validateForm();

  $("#name, #email, #message, #phone").on("input", () => {
    validateForm();
  });
});
