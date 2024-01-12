
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
    
    
    document.getElementById("c1votes").innerHTML = candidatesObj[0];
    document.getElementById("c2votes").innerHTML = candidatesObj[1];
    document.getElementById("c3votes").innerHTML = candidatesObj[2];
    document.getElementById("c4votes").innerHTML = candidatesObj[3];



}
