$(document).ready(function () {
  $("#header").addClass("fade-in");
  $(".section__details").waypoint(
    function (dir) {
      $(".section__details").addClass("slide-in-left");
    },
    {
      offset: "80%",
    }
  );

  $(".col-features").waypoint(
    function (dir) {
      $(".col-features.col-1").addClass("slide-in-left");
      $(".col-features.col-2").addClass("slide-in-top");
      $(".col-features.col-3").addClass("slide-in-right");
    },
    {
      offset: "80%",
    }
  );

  $(".col-client").waypoint(
    function (dir) {
      $(".col-client.col-1").addClass("slide-in-top");
      $(".col-client.col-2")
        .css("animation-delay", "0.4s")
        .addClass("slide-in-top");
      $(".col-client.col-3")
        .css("animation-delay", "0.8s")
        .addClass("slide-in-top");
    },
    {
      offset: "80%",
    }
  );
});
