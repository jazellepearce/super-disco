var task = document.getElementsByClassName('.description');
var currentDate = new Date();
$("#currentDay").html(currentDate);

/*var saveTasks = function() {
    localStorage.setItem('.description', JSON.stringify(this.items));
}
*/

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr(".hour");

        localStorage.setItem(time, text);
    })

    $("#am9 .description").val(localStorage.getItem("am9"));
    $("#am10 .description").val(localStorage.getItem("am10"));
    $("#am11 .description").val(localStorage.getItem("am11"));
    $("#pm12 .description").val(localStorage.getItem("pm12"));
    $("#pm1 .description").val(localStorage.getItem("pm1"));
    $("#pm2 .description").val(localStorage.getItem("pm2"));
    $("#pm3 .description").val(localStorage.getItem("pm3"));
    $("#pm4 .description").val(localStorage.getItem("pm4"));
    $("#pm5 .description").val(localStorage.getItem("pm5"));

})

function timeTracker() {
    var timeNow = moment().hour()

$(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

    }
})
}
timeTracker();