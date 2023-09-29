

let logoutmsg = localStorage.getItem("alogoutmsg")
if(logoutmsg != null || logoutmsg != "" || logoutmsg != undefined)
{
   document.getElementById("msg").innerHTML = logoutmsg;
}

function adminlogin()
{
    localStorage.removeItem("alogoutmsg");
    let email = $('#email').val().trim();
    let password = $('#password').val().trim();

    if(email == null || email == undefined || email == ""
    && password == null || password == undefined || password=="" )
     {
        document.getElementById("msg").innerHTML = "All fields are required please enter all fields";
       
     }
     else{
            if(email == "admin" && password == "admin")
            {
                localStorage.setItem("loginadminemail",email);
                localStorage.setItem("loginadminpassword",password);
                window.location.href = "admindashboard.html";
            }
            else{
                document.getElementById("msg").innerHTML = "Please enter correct credentials";

            }
     }

}