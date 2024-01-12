
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
    
    let c1totalvotes =candidatesObj[0];
    let c2totalvotes =candidatesObj[1];
    let c3totalvotes = candidatesObj[2];
    let c4totalvotes = candidatesObj[3];

    if( c1totalvotes == undefined )
    {
        c1totalvotes = 0;
    }
    if(c2totalvotes == undefined)
    {
        c2totalvotes = 0;
    }
    if(c3totalvotes == undefined)
    {
        c3totalvotes = 0;
    }
    if(c4totalvotes == undefined)
    {
        c4totalvotes = 0
    }
    
    

    document.getElementById("c1votes").innerHTML = c1totalvotes;
    document.getElementById("c2votes").innerHTML = c2totalvotes;
    document.getElementById("c3votes").innerHTML = c3totalvotes;
    document.getElementById("c4votes").innerHTML = c4totalvotes;




}
