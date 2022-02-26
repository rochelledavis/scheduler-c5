var appointment = [];
var saveBtnEl = $('.saveBtn');
var currentDay = moment().format('dddd' + ' ' + 'LL')

document.getElementById('currentDay').innerHTML = currentDay

//var currentTime = moment().format('h:mm:ss a'); 
//console.log(currentTime)


//Change block color dependent on current hr vs. calendar hour
var blockColor = function() {
    var currentHour = moment().hours();
    //console.log(currentHour)
    
    $(".time-block").each(function() {
        //console.log(index)
        var hourId = parseInt($(this).attr("id").split()[0]);

        // Use if statment to add or remove class to indicate the proper color. 
        if (hourId < currentHour) {
            $(this).addClass("past");
        } else if (hourId === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        };
    })
}; 

blockColor();

//Check time in 1 hour intervals. 
var checkHour = setInterval(blockColor, 1000 * 60 * 60)

//Upon clicking save button, save to local storage and persist when refreshed.
// saveBtnEl.on('click', function() {

//     //console.log(this)
//     var hour = $(this).siblings('.time-block').val();
//     var appt = $(this).siblings('.appt').text();

//     console.log(hour)
//     console.log(appt)

//     localStorage.setItem(hour, appt);
// });


//var eventInput = {};
document.querySelector(".saveBtn").addEventListener("click", saveAppt);

function saveAppt() {

    var savedAppt = {
        hour: document.querySelector(".time-block").value,
        appt: document.querySelector(".appt").value 
    }

    //console.log(appointment)
    localStorage.setItem("savedAppt", JSON.stringify(savedAppt));
    localStorage.getItem(savedAppt)
};
// saveAppt()
    // var loadEvent = function() {
    //     eventInput = JSON.parse(localStorage.getItem("event"));
    // }