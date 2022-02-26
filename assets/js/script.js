
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

//listen for click and save to local storage
$('.saveBtn').on('click', function() {
    var time = $(this)
        .parent()
        .attr('id');
    console.log("time: " + time);

    var input= $(this).siblings().children(".appt").val(); 

    localStorage.setItem(time, input);
});

//Get items from local storage and display in textarea
for (var i = 9; i < 18; i++) {
    var savedAppt = localStorage.getItem(i);
    $("#" + i).find(".appt").val(savedAppt)
}
