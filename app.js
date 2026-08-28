$(document).ready(function () {

    let title = $("<h2>").text("Login");

    let email = $("<input>")
        .attr("type", "text")
        .attr("placeholder", "Email");

    let password = $("<input>")
        .attr("type", "password")
        .attr("placeholder", "Password");

    let loginButton = $("<button>")
        .text("Login");

    $("body").append(title);
    $("body").append(email);
    $("body").append("<br>");
    $("body").append(password);
    $("body").append("<br>");
    $("body").append(loginButton);

});