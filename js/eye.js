$(function () {
    $("#eye").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
       var type = $(this).hasClass("fa-eye-slash") ? "password" : "text";
        $("#password").attr("type", type);
    });
  });