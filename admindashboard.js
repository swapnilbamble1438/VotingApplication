
showAdminDashboard();

function showAdminDashboard()
{
    let candidates = localStorage.getItem("allcandidates");
    if(candidates == null)
    {
        candidatesObj =[];
    }
    else{
        candidatesObj = JSON.parse(candidates);
    }
    
    
     let c1totalvotes = 0;
   let c2totalvotes = 0;
   let c3totalvotes = 0;
   let c4totalvotes= 0;

    if(candidatesObj == undefined || candidatesObj == null )
    {
        c1totalvotes = 0;
        c2totalvotes = 0;
        c3totalvotes = 0;
        c4totalvotes= 0;
    }
    else{
          
     c1totalvotes =candidatesObj[0];
     c2totalvotes =candidatesObj[1];
     c3totalvotes = candidatesObj[2];
     c4totalvotes = candidatesObj[3];
    }
 
    
    

    document.getElementById("c1votes").innerHTML = c1totalvotes;
    document.getElementById("c2votes").innerHTML = c2totalvotes;
    document.getElementById("c3votes").innerHTML = c3totalvotes;
    document.getElementById("c4votes").innerHTML = c4totalvotes;




}
