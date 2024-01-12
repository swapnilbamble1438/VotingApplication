
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
            document.getElementById("status").innerHTML = votersObj[i][4];


            if(votersObj[i][4] === 'Not Voted')
            {
                document.getElementById("votingoption").innerHTML = 
                `
                <input type="radio"  name="candidate" value ="candidate1" >Candidate 1  <br><br>
                <input type="radio"  name="candidate" value = "candidate2" >Candidate 2 <br><br>
                <input type="radio" name="candidate"  value = "candidate3" >Candidate 3 <br><br>
                <input type="radio" name="candidate" value = "candidate4" >Candidate 4 <br><br>
              
                  <br>
              
                  <button onClick="dovote('${votersObj[i][2]}')">Vote</button>
                `;
            }
            else{
                document.getElementById("vmsg").innerHTML = "You are already Voted";
            }

}

function dovote(email)
{

    var ele = document.getElementsByName('candidate');
    
    var candidate1=0;
    var candidate2=0;
    var candidate3=0;
    var candidate4=0;

    let s=0;
    for (i = 0; i < ele.length; i++) 
    {
        if (ele[i].checked)
          {
            if(i == 0)
            {
               candidate1 = 1;
            }  
            if(i == 1)
            {
                candidate2 = 1;
            }    
            if(i == 2)
            {
                candidate3 = 1;
            }    
            if(i == 3)
            {
                candidate4 = 1;
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

        let c= 0;
      //--------- check if the voter is already voted or not -----------------------
      let voters = localStorage.getItem("voters");
      if(voters == null)
      {
          votersObj =[];
      }
      else{
          votersObj = JSON.parse(voters);
      }

      votersObj.forEach(function(e,index){

          if(e[2] === email && e[4] === 'Voted')
          {
              c = 1;

          }
      })
    //-----------------------------
        if(c==1)
        {
            document.getElementById("msg").innerHTML = "Already Voted";
            return;
        }
        else{
            
        // let candidate =[candidate1,candidate2,candidate3,candidate4];

        let candidates = localStorage.getItem("allcandidates");
        if(candidates == null )
        {
            candidatesObj =[];
        }
        else{
            candidatesObj = JSON.parse(candidates);
        }
        if(candidatesObj.length == 0)
        {
            candidatesObj = [0,0,0,0];
        }    
            candidatesObj[0] = candidatesObj[0] + candidate1;
            candidatesObj[1] = candidatesObj[1] + candidate2;
            candidatesObj[2] = candidatesObj[2] + candidate3;
            candidatesObj[3] = candidatesObj[3] + candidate4;
        
            localStorage.setItem("allcandidates",JSON.stringify(candidatesObj));

          //=========== update voter =======================================


          votersObj.forEach(function(e,index){

            if(e[2] === email )
            {
                e[4] ='Voted';
  
            }
        })
        localStorage.setItem("voters",JSON.stringify(votersObj));




          //=================================================================


            document.getElementById("msg").innerHTML = "Successfully Voted";
            document.getElementById("status").innerHTML = "Voted";
            document.getElementById("vmsg").innerHTML = "";
            document.getElementById("votingoption").innerHTML = "";
        }


    } 




}

function voterlogout()
{
    localStorage.removeItem("loginvoteremail");
    localStorage.removeItem("loginvoterpassword");
    window.location.href = "signin.html";
    localStorage.setItem("logoutmsg","Logout Successfully");

}
