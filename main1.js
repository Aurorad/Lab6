"use strict";

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
            let MyJSON = $("form").serializeArray();
            console.log(MyJSON);
            $.post("http://httpbin.org/post", MyJSON, function (data, status) {
                console.log(status);
                console.log(data);
            });
        }
    });
});



