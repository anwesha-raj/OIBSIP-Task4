var form=document.getElementById("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    var username=document.getElementById("name").value;
    var mobile=document.getElementById("mobile").value;
    var email=document.getElementById("email").value;
    localStorage.setItem("name",username);
    localStorage.setItem("mobile",mobile);
    localStorage.setItem("email",email);
    document.getElementById("name").value="";
    document.getElementById("mobile").value="";
    document.getElementById("email").value="";
    alert("Successfully login!");
})