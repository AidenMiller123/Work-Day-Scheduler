// Wraps all the code so that the function will run on page load
$(document).ready(function calender() {
  // saveBtn click listener 
  $(".saveBtn").on("click", function () {
    // Get the values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // Saves the text in local storage
    localStorage.setItem(time, text);
  })
// declares the current hour as a variable
  var currentHour = dayjs().hour()
// for loop that loops through each timeblock and compares it to the current hour
// this will set the background color depending on the hour
  for (let i = 8; i <= 17; i++) {
    const hour = document.getElementById("hour" + i);
    if (currentHour === i) {
      hour.classList.remove("past");
      hour.classList.add("present");
    } else if (currentHour < i) {
      hour.classList.remove("past");
      hour.classList.add("future");
    }
  }
// Displays the day at the top using cloudflare 
  var currentDay = document.getElementById('currentDay')
  currentDay.textContent = moment().format('dddd, MMMM Do')
// Calls each timeblock text area and sets the value to be what they have inputed
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});