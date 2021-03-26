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
    const check = $("input[type='checkbox']").val();
    const select = $("#animalSelect").val();

    let result;
    if (radio === "frontend" && check === "tech" && select === "lion") {
      result = $("#javascript").show();
    } else if (radio === "backend" && check === "design" && select === "whale") {
      result = $("#ruby").show();
    } else if (radio === "both" && check === "other" && select === "eagle") {
      result = $("#python").show();
    }
    $("results").text(result)
  })
})