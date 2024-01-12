

let regmsg = localStorage.getItem("regmsg")
if(regmsg != null || regmsg != "" || regmsg != undefined)
{
   document.getElementById("msg").innerHTML = regmsg;
}

function register()
{
    localStorage.removeItem("regmsg");
    let name = $('#name').val();
    let password = $('#password').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let status ="Not Voted";
  

    if(name == null || name == undefined || name == ""
    || password == null || name == undefined || password==""
    || email == null || email == undefined || email == ""
     || phone == 0   || phone == undefined || phone=="" || phone == null)
     {
        document.getElementById("fmsg").innerHTML = "All fields are required please enter all fields";
       
     }
     else
     {

            let voter = [name.trim(),password.trim(),email.trim(),phone.trim(),status];

            let voters = localStorage.getItem("voters");
            
            

            if(voters == null)
            {
                votersObj = [];
            }
            else{
                votersObj = JSON.parse(voters);
            }

            let b=0;
            votersObj.forEach(function(e,index)
            {
                if(e[2] == voter[2])
                {
                    b=1;
                   
                }
            });
           
             if(b==0)
            {
                votersObj.push(voter);
                location.reload();
                localStorage.setItem("regmsg","Registration Successful, You can login and Vote Now..");
            }
                localStorage.setItem("voters",JSON.stringify(votersObj));

            if(b==1)
            {
                document.getElementById("fmsg").innerHTML = "Registration Failed, Same EmailId already exist";
            }
            

        }     
}






