var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var userPassword = document.getElementById("pw").value;
    localStorage.setItem("email", email);
    localStorage.setItem("pw", userPassword);
    alert("Successfully registerd!");
    window.location.href = "login.html"
});