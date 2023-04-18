// var past = document.querySelector(".past");
// var present = document.querySelector(".present");
// var future = document.querySelector(".future")
const nine = $("#hour-9").data("time");
const ten = $("#hour-10").data("time");
const eleven = $("#hour-11").data("time");
const twelve = $("#hour-12").data("time");
const one = $("#hour-1").data("time");
const two = $("#hour-2").data("time");
const three = $("hour-3").data("time");
const four = $("hour-4").data("time");
const five = $("hour-5").data("time");
const timeBlock = $(".time-block");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
  currentHour = dayjs().hour();
  console.log(currentHour);

  timeBlock.each(function() {
    var dayHour = $(this).data("time");
    console.log(dayHour);
    if (currentHour > dayHour) {
      $(this).addClass("future");
      $(this).removeClass("present");
    } else if ( currentHour < dayHour) {
      $(this).addClass("past");
    } else if(currentHour === dayHour) {
      $(this).addClass("present");
    }
  })

  

//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDate);
});
