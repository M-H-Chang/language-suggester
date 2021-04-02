// -----Business Logic:-----

// -----User Interface Logic:-----
$(document).ready(function () {
  $("form#aboutYouForm").submit(function (event) {
    event.preventDefault();
    $(location).attr("href", "questions.html")
  })

  $("form#questionForm").submit(function (event) {
    event.preventDefault();
    const radio = $("input:radio[name=type]:checked").val();
    const select = $("#animalSelect").val();
    let result;
    if (radio === "frontend") {
      result = $("#javascript").show();
      $("#python").hide();
      $("#ruby").hide();
    } else if (radio === "backend") {
      result = $("#ruby").show();
      $("#python").hide();
      $("#javascript").hide();
    } else if (radio === "both") {
      result = $("#python").show();
      $("#javascript").hide();
      $("#ruby").hide();
    } else {
      result = $("#python").show();
      $("#javascript").hide();
      $("#ruby").hide();
    }
    $("results").text(result)
  })
})