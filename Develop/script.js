
const timeBlock = $(".time-block");
var saveButton = $(".saveBtn");

$(function () {

  currentHour = dayjs().format("H")


  timeBlock.each(function() {
    var dayHour = $(this).data("time");
  
    if (currentHour > dayHour) {
      $(this).addClass("past");
    } else if ( currentHour < dayHour) {
      $(this).addClass("future");
    } else if(currentHour == dayHour) {
      $(this).addClass("present");
    }
  })

  saveButton.on("click", function(event) {
    event.preventDefault();
    console.log($(this));  
    var userInput = $(this).siblings("textarea").val();
    var taskTime =  $(this).parent().attr("id");


  var task = {
    time: taskTime,
    task: userInput
  }

  var tasks = JSON.parse(localStorage.getItem("tasks"))|| []; 
  tasks.push(task);

   localStorage.setItem("tasks",JSON.stringify(tasks));
   load();
})
load();


 function load(){
  var saved = JSON.parse(localStorage.getItem("tasks"));


for (var i = 0; i < saved.length; i++) {
  var savedTime = saved[i].time;
  var timeDiv = $("#" + savedTime);

  var textArea = timeDiv.children().eq(1);
  textArea.text(saved[i].task);
}}
 
  var currentDate = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDate);
});
