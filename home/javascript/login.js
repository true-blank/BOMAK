// script.js

function sendMail() {
    Email.send({}).then(
        message => alert("Thank you for signing in!")
    );
}

function redirectToIndex() {
    // Redirect to the specified URL
    window.location.href = "file:///D:/website%203/BOMOAK%20SCHOOL%20MANAGMENT%20SYSTEM/index.html";
}

function showMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0";
}

function hideMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "-200px";
}
