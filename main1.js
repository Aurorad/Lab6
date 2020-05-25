"use strict";
/*$("document").ready(function () {
    let user = {
        name: "Borsuk",
        surname: "Alexandra"
    };
    let MyJSON = JSON.stringify(user);
/!*   let request = new XMLHttpRequest();
   let url = "JSON.json";
   request.open("POST", url, true);
   request.setRequestHeader("Content-Type", "application/json");
   request.onreadystatechange = function () {
        if(request.readyState ===4 && request.status===200) {
            alert ("Success");
        }
   };
   request.send(MyJSON);*!/
    $.post("http://httpbin.org/post", MyJSON, function () {
        alert ("ok");
    }, 'json');
});*/

$("document").ready(()=> {
    $("#form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            name: "required",
            message: "required"
        },
        messages: {
            email: "Please enter a valid e-mail",
            name: "Please enter your name",
            message: "Please enter your message"
        },
        submitHandler: function(form) {
            /*let user = {
                name: "Daryna",
                surname: "Dulia"
            };
            let MyJSON = JSON.stringify(user);
            //$("form").serializeArray()
            $.post("JSON.html", MyJSON);*/
            let MyJSON = $("form").serializeArray();
            $.post("http://httpbin.org/post", MyJSON, function (data, status) {
                console.log(status);
                console.log(data);
            });
        }
    });
});



