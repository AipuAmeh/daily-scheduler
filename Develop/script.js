
const timeBlock = $(".time-block");
var saveButton = $(".saveBtn");

$(function () {

  currentHour = dayjs().format("H")
  console.log(currentHour);

  timeBlock.each(function() {
    var dayHour = $(this).data("time");
    console.log(dayHour);
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
  console.log(taskTime);
  console.log(userInput);

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
  var ids = $("div").children("div.time-block").children("id");
  var array = $.makeArray(ids.prevObject);
  var text = $("textarea").val();
  console.log(array);
  console.log(ids);
  var saved = JSON.parse(localStorage.getItem("tasks"));
console.log(saved);

for (var i = 0; i < saved.length; i++) {
  var savedTime = saved[i].time;
  var timeDiv = $("#" + savedTime);

  console.log(savedTime);
  console.log(timeDiv);
  console.log(timeDiv.children().eq(1));
  var textArea = timeDiv.children().eq(1);
  textArea.text(saved[i].task);

}
  
}
 
 
  var currentDate = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDate);
});
