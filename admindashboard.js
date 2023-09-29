
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
    let c= 0;
    let c1totalvotes =0;
    let c2totalvotes =0;
    let c3totalvotes = 0;
    let c4totalvotes = 0;

    candidatesObj.forEach(function(e,index){
        if(e[0] != "" )
        {
            c1totalvotes += 1;
        }
        if(e[1] != "" )
        {
            c2totalvotes += 1;
        }
        if(e[2] != "" )
        {
            c3totalvotes += 1;
        }
        if(e[3] != "" )
        {
            c4totalvotes += 1;
        }
    });

    document.getElementById("c1votes").innerHTML = c1totalvotes;
    document.getElementById("c2votes").innerHTML = c2totalvotes;
    document.getElementById("c3votes").innerHTML = c3totalvotes;
    document.getElementById("c4votes").innerHTML = c4totalvotes;




}