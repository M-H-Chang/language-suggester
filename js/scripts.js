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
    console.log(radio);
    console.log(check);
    console.log(select);
  })
})