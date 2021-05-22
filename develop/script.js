/*
jQuery to get html element as var
*/
let hourNames = ['1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am',
    '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',
    '8pm', '9pm', '10pm', '11pm']


var saveButton = $('.btn'); // var to get save buttons
var meetingNotes = $(".notes"); // meeting notes area var 

/*
get and set local storage
*/
function setStorage() {
    for (var i = 0; i < hourNames.length; i++) {
        localStorage.setItem("email", $('#'+ hourNames[i] +'note'));
    }
}

/*
get all items from localStorage
*/
function getStorage() {
    console.log("Called get storage");
    for (var i = 0; i < hourNames.length; i++) {
     // get from storage
        let data = localStorage.getItem($('#' + hourNames[i] + 'note'));
        if (data != undefined) {
            
        }
    }
}

getStorage();
 
/*
get a single item from localStorage
*/
function getStorage(elem) {
    console.log("Called get storage");
    for (var i = 0; i < hourNames.length; i++) {
     // get from storage
        let data = localStorage.getItem($('#' + hourNames[i] + 'note'));
        if (data != undefined) {
            
        }
    }
}

/*
  reset all notes areas styles based on relative time to current time ( past, present, future)
*/
function resetClasses(element) {
    element[0].classList.remove("past");
    element[0].classList.remove("present");
    element[0].classList.remove("future");
}

    /*use actual hour to change timeframe background colors
      use class past, present and future */
function updateTimeFrames(){
  var d = new Date();
  var hour = d.getHours();

    for (var i = 0; i < hourNames.length; i++){
        var elem = $('#' + hourNames[i]+'note');
        resetClasses(elem);
        //easy way to find hour in list it is the index (zero based) !!!
        // the hour returned is 24hr based so the list
        if ((hour === 0) || (hour > (i+1))) {
            elem[0].classList.add("past");
        } else if (hour === (i+1)) {
            elem[0].classList.add("present");
        } else {
            elem[0].classList.add("future");
        }
    }    
}

updateTimeFrames();

/*
process click on save button
*/
saveButton.on('click', function () {
    // check which button was clicked and save those notes

});

/*
process click on notes to edit
*/
meetingNotes.on('click', function () {
    // check which area was clicked to edit

});

