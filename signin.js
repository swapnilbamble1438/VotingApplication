

let logoutmsg = localStorage.getItem("logoutmsg")
if(logoutmsg != null || logoutmsg != "" || logoutmsg != undefined)
{
   document.getElementById("msg").innerHTML = logoutmsg;
}

function login()
{
    localStorage.removeItem("logoutmsg");
    document.getElementById("msg").innerHTML = "";


    let email = $('#email').val().trim();
    let password = $('#password').val().trim();

    if(email =="" || password =="")
    {
        document.getElementById("fmsg").innerHTML = "All fields are required please enter all fields";
    }
    else if(email == "admin" && password == "admin")
    {
       adminlogin(email,password);
    }
    else{
        voterlogin(email,password);
    }

}

function adminlogin(email,password)
{
  
   
            if(email == "admin" && password == "admin")
            {
                localStorage.setItem("loginadminemail",email);
                localStorage.setItem("loginadminpassword",password);
                window.location.href = "admindashboard.html";
            }
            else{
                document.getElementById("fmsg").innerHTML = "Please enter correct credentials";

            }
     

}




function voterlogin(email,password)
{
   
   
            let voters = localStorage.getItem("voters");
            if(voters == null)
            {
                votersObj =[];
            }
            else{
                votersObj = JSON.parse(voters);
            }

            let b= 0;
            votersObj.forEach(function(e,index){

                if(e[1] === password.trim() && e[2] === email.trim())
                {
                    b=1;
                }
            })

            if(b == 1)
            {
                localStorage.setItem("loginvoteremail",email);
                localStorage.setItem("loginvoterpassword",password);
                window.location.href = "voterdashboard.html";
            }
            else{
                document.getElementById("fmsg").innerHTML = "Please enter correct credentials";

            }



}