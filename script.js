var buttonClick = document.getElementsByClassName(".button");

$(".button").click(function () {
    if ($(".draggable").style.display == "none") {
      $(".draggable").style.display = "block";
    } else {
      $(".draggable").style.display = "none";
    }
  });

