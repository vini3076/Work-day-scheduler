// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // TODO: Add code to display the current date in the header of the page.

  var currentDate = dayjs().format("dddd, MMMM D YYYY") ;
  $("#currentDay").text(currentDate);
  console.log(currentDate);

  var currentHour = dayjs().hour();
  console.log(currentHour);

  // TODO: Add code to apply the past, present, or future class to each time
  $(".time-block").each(function() {
    var hourId = $(this).attr("id");
    var hour = parseInt($(this).attr("id").split("-")[1]);
    console.log(hourId);
    if(hour < currentHour){
      
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }
    else if (hour === currentHour){
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
    }

    else if (hour > currentHour){
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }

  // TODO: Add code to get any user input that was saved in localStorage and set
    var stored = localStorage.getItem(hourId);
    console.log("stored: " + stored)

    if (stored){
      $(this).children(".description").val(stored);
    }
  
  })

// TODO: Add a listener for click events on the save button. This code should
  var workdayHrsToday = [];
  $(".saveBtn").on("click", function(){
    var eventAdded = $(this).siblings(".description").val();
    var hourId = $(this).parent().attr("id")
    localStorage.setItem(hourId, eventAdded);
    ;
  })
  
});



