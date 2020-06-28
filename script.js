// SELECTORS
var currentDayElement = $("#currentDay");
var currentTimeElement = $("#currentTime");
var saveButtonElement = $(".saveBtn");
var currentHour = moment().format("H");
//console.log(currentHour);

//display current day on top
currentDayElement.text(moment().format("dddd, MMMM Do YYYY"));
currentTimeElement.text(moment().format("h:mm A"));

//event listeners
saveButtonElement.on("click", saveButton);

// functions
showTodos();
checkHour();

function saveButton(e) {
  e.preventDefault();

  saveTodo();
  showTodos();
  checkHour();
}

function showTodos() {
  for (var i = 1; i < 11; i++) {
    $(".input" + i).val(localStorage.getItem("input" + i));
    // console.log(localStorage.getItem("input" + i));
    //console.log(localStorage.input1)
  }
}

function checkHour() {
  $(".row").each(function () {
    if ($(this).attr("data-time") < currentHour) {
      $(this).addClass("past");
      //console.log($(this).attr("data-time"));
    }
    if ($(this).attr("data-time") == currentHour) {
      $(this).addClass("present");
    }
    if ($(this).attr("data-time") > currentHour) {
      $(this).addClass("future");
    }
  });

  // if (currentHour > $(".time-block").attr("data-time")){
  //     console.log("itslater")

  // }
}
//console.log($(".time-block").attr("data-time"));

function saveTodo() {
  for (var i = 1; i < 11; i++) {
    if ($(".input" + i).val()) {
      $("input" + i).val(
        localStorage.setItem("input" + i, $(".input" + i).val())
      );
    } else {
      localStorage.setItem("input" + i, "");
    }
  }
}
