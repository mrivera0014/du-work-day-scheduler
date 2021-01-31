$(document).ready(function () {
    $(".save").on("click", function () {
        var userInput = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, userInput)
        console.log(userInput)
    })
    function update() {
        var current = moment().hours()
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("-")[1])
            if (timeBlock < current) {
                $(this).addClass("past")
            } else if (timeBlock === current) {
                $(this).removeClass("past")
                $(this).addClass("present")
            } else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
        })
    }



    update()

    var updateHour = setInterval(update, 15000)


    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    $("#hour-13 .description").val(localStorage.getItem("hour-13"))
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    $("#hour-14 .description").val(localStorage.getItem("hour-14"))
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    $("#hour-15 .description").val(localStorage.getItem("hour-15"))
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    $("#hour-16 .description").val(localStorage.getItem("hour-16"))
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    $("#hour-17 .description").val(localStorage.getItem("hour-17"))
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
})