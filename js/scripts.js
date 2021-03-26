// -----Business Logic:-----




// -----User Interface Logic:-----
$(document).ready(function () {
  $("form#aboutYouForm").submit(function (event) {
    event.preventDefault();
    $(location).attr("href", "questions.html")
  })

  $("form#questionForm").submit(function (event) {
    event.preventDefault();

  })
})