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
    if (radio === "frontend" && select === "lion") {
      result = $("#javascript").show();
    } else if (radio === "backend" && select === "whale") {
      result = $("#ruby").show();
    } else if (radio === "both" && select === "eagle") {
      result = $("#python").show();
    } else if (radio === "both" || select === "eagle") {
      result = $("#python").show();
    } else if (radio === "frontend" && select != "eagle") {
      result = $("#javascript").show();
    } else {
      result = $("#ruby").show();
    }
    $("results").text(result)
  })
})