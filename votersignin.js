
 let logoutmsg = localStorage.getItem("logoutmsg")
 if(logoutmsg != null || logoutmsg != "" || logoutmsg != undefined)
 {
    document.getElementById("msg").innerHTML = logoutmsg;
 }


function voterlogin()
{
    localStorage.removeItem("logoutmsg");
    let email = $('#email').val().trim();
    let password = $('#password').val().trim();


    if(email == null || email == undefined || email == ""
    && password == null || password == undefined || password=="" )
     {
        document.getElementById("msg").innerHTML = "All fields are required please enter all fields";
       
     }
     else{

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
                document.getElementById("msg").innerHTML = "Please enter correct credentials";

            }




     }



}