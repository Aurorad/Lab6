"use strict";

$("document").ready(function () {
    $.getJSON("http://dummy.restapiexample.com/api/v1/employees", function (data) {
        console.log(data);
        data.data.forEach(employee=>{
           AddRow(employee);
        });
    });
});

function AddRow(employee) {
    let row = $("<tr></tr>");
    let id = $("<td></td>").text(employee.id);
    row.append(id);
    let name = $("<td></td>").text(employee.employee_name);
    row.append(name);
    let salary = $("<td></td>").text(employee.employee_salary);
    row.append(salary);
    let age = $("<td></td>").text(employee.employee_age);
    row.append(age);
    $("table").append(row);
}