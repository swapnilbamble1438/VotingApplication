
showVoter();

function showVoter()
{
    let voters = localStorage.getItem("voters");
            if(voters == null)
            {
                votersObj =[];
            }
            else{
                votersObj = JSON.parse(voters);
            }

            let email = localStorage.getItem("loginvoteremail");
            let password = localStorage.getItem("loginvoterpassword");

            let i = 0;
            let b = 0;
            votersObj.forEach(function(e,index){

                if(e[1] === password && e[2] === email)
                {
                    i = index;
                    b = 1;

                }
            })

            if(b == 0)
            {
                window.location.href = "votersignin.html";
            }
            document.getElementById("voternameatnav").innerHTML = votersObj[i][0];

            document.getElementById("name").innerHTML = votersObj[i][0];
            document.getElementById("email").innerHTML = votersObj[i][2];
            document.getElementById("phone").innerHTML = votersObj[i][3];


            //======= status ===================
            
                        let candidates = localStorage.getItem("allcandidates");
                        if(candidates == null)
                        {
                            candidatesObj =[];
                        }
                        else{
                            candidatesObj = JSON.parse(candidates);
                        }
                    
                        let st = 0;
                        candidatesObj.forEach(function(e,index){
                            if(e[0] == votersObj[i][2] || 
                               e[1] == votersObj[i][2] ||
                               e[2] == votersObj[i][2] ||
                               e[3] == votersObj[i][2]  ) 
                            {
                                st =1;
                            }
                        });

            
            if(st == 1)
            {
            document.getElementById("status").innerHTML = "Voted";
            }
            else{
                document.getElementById("status").innerHTML = "Not Voted";
            }
            //===================================
            document.getElementById("votername").innerHTML = votersObj[i][0];

            document.getElementById("name").innerHTML = votersObj[i][0];

            document.getElementById("votebtn").innerHTML = 
            `
            <button onClick="dovote('${votersObj[i][2]}')">Vote</button>
            `;


}

function dovote(email)
{

    var ele = document.getElementsByName('candidate');
    
    let candidate1='';
    let candidate2='';
    let candidate3='';
    let candidate4='';

    let s=0;
    for (i = 0; i < ele.length; i++) 
    {
        if (ele[i].checked)
          {
            if(i == 0)
            {
               candidate1 = email;
            }  
            if(i == 1)
            {
                candidate2 = email;
            }    
            if(i == 2)
            {
                candidate3 = email;
            }    
            if(i == 3)
            {
                candidate4 = email;
            }  
            
            s=1;  
          } 
    }
    
    if(s == 0)
    {
        document.getElementById("msg").innerHTML = "Select candidate first";
    }
    else{

        for (i = 0; i < ele.length; i++) 
        {
        ele[i].checked = false;
        } 

        let candidate =[candidate1,candidate2,candidate3,candidate4];

        let candidates = localStorage.getItem("allcandidates");
        if(candidates == null)
        {
            candidatesObj =[];
        }
        else{
            candidatesObj = JSON.parse(candidates);
        }
        let c= 0;
        candidatesObj.forEach(function(e,index){
            if(e[0] == email || e[1] == email || e[2] == email || e[3] == email)
            {
                c = 1;
            }
        });
        if(c==1)
        {
            document.getElementById("msg").innerHTML = "Already Voted";
            return;
        }
        else{
            candidatesObj.push(candidate);

          //=========== update voter =======================================


                    document.getElementById("status").innerHTML = "Voted";

          //=================================================================

            document.getElementById("msg").innerHTML = "Successfully Voted";
        }
        localStorage.setItem("allcandidates",JSON.stringify(candidatesObj));


    } 




}

function voterlogout()
{
    localStorage.removeItem("loginvoteremail");
    localStorage.removeItem("loginvoterpassword");
    window.location.href = "votersignin.html";
    localStorage.setItem("logoutmsg","Logout Successfully");

}