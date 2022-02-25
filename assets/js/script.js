 
var currentDay = moment().format('dddd' + ' ' + 'LL')

document.getElementById('currentDay').innerHTML = currentDay

//var currentTime = moment().format('h:mm:ss a'); 
//console.log(currentTime)


//If currentTime is > hour block, turn gray. loop? or if statements for each section?
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

var checkHour = setInterval(blockColor, 1000 * 60 * 60)
    
//If within the same hour block, turn red. 
//If currentTime is < hour block turn green.
//Check time in 1 hour intervals. 

//Make middle block editable. 
//Upon clicking "+", save to local storage and persist when refreshed.

    // var eventInput = {};

    // var saveEvent = function() {
    //     localStorage.setItem("event", JSON.stringify(eventInput));
    // };

    // var loadEvent = function() {
    //     eventInput = JSON.parse(localStorage.getItem("event"));
    // }