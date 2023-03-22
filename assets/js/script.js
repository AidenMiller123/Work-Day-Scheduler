// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function calender () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //

    var input_textarea = document.querySelector('#hour10');
    var output_div = document.querySelector('#display');
    var save_button = document.querySelector('#btn10');

    save_button.addEventListener('click', updateOutput)

    output_div.textContent = localStorage.getItem('content');
    input_textarea.value = localStorage.getItem('content');

    function updateOutput() {
    localStorage.setItem('content', input_textarea.value);
     console.log(input_textarea.value);
    }
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
  
    // function saveInput() {}
      var currentHour = dayjs().hour()
      console.log(currentHour)

      for (let i = 9; i <= 20; i++) {
        const hour = document.getElementById("hour" + i);
        if (currentHour == i) {
          hour.classList.remove("past");
          hour.classList.add("present");
        } else if (currentHour < i) {
          hour.classList.remove("past");
          hour.classList.add("future");
        }
      }
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    var currentDay = document.getElementById('currentDay')
    currentDay.textContent = dayjs().format('dddd MMMM, DD')
  });
