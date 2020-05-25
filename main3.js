"use strict";
let start = false;
let timer = moment("00:00", "mm:ss");
let interval;

$(document).ready(function () {
    $('#button1').click(function () {
        start = ! start;
       if (start) {
           $('#button1').text("STOP");
          interval = setInterval(AddSecond, 1000);
       }
       else {
           $('#button1').text("GO");
           clearInterval(interval);
       }
    });
    $('#button2').click(function () {
        clearInterval(interval);
        timer = moment("00:00", "mm:ss");
        $('.screen').text(timer.format("mm:ss"));
        $('#button1').text("GO");
    })
});

function AddSecond() {
    timer.add(1, "s");
    $('.screen').text(timer.format("mm:ss"));

}

