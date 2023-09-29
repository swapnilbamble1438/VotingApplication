
viewvoters();

function viewvoters()
{
    
    let voters = localStorage.getItem("voters");
if(voters == null)
{
    votersObj =[];
}
else{
    votersObj = JSON.parse(voters);
}

let vtable = "";

    //===status
let candidates = localStorage.getItem("allcandidates");
if(candidates == null)
{
    candidatesObj =[];
}
else{
    candidatesObj = JSON.parse(candidates);
}
let st = 0;
let status = "";
//===============
votersObj.forEach(function(e,index){

    
            //======= status ===================
        
             st = 0;
             status = "";
            candidatesObj.forEach(function(cand,index){
                if(cand[0] == e[2] || 
                   cand[1] == e[2] ||
                   cand[2] == e[2] ||
                   cand[3] == e[2] ) 
                {
                    st =1;
                }
            });


            if(st == 1)
            {
           status = "Voted";
            }
            else{
                status = "Not Voted";
            }
            //===================================

     vtable +=`
    
        <tr >
          <td >${e[0]}</td>
          <td >${e[1]}</td>
          <td >${e[2]}</td>    
          <td >${e[3]}</td>    
          <td >${status}</td> 
            <td>
              <a onClick="deleteVoter(${index},'${e[2]}')"><img src= "image/delete.jpg" style="height:25px" alt="Delete"></a>
          </td>  
        </tr>
    `;
    
});
document.getElementById("vtable").innerHTML = vtable;


}

function deleteVoter(index,email)
{
    // delete voter 
      
        let voters = localStorage.getItem("voters");
    if(voters == null)
    {
        votersObj =[];
    }
    else{
        votersObj = JSON.parse(voters);
    }
    votersObj.splice(index,1);
    localStorage.setItem("voters",JSON.stringify(votersObj));

    // delete voter's vote

    let candidates = localStorage.getItem("allcandidates");
    if(candidates == null)
    {
        candidatesObj =[];
    }
    else{
        candidatesObj = JSON.parse(candidates);
    }
        let cindex = 100;
        candidatesObj.forEach(function(e,index){

            if(e[0] == email ||
                e[1] == email ||
                e[2] == email ||
                e[3] == email)
            {
                cindex = index;
            }
           
        }); 

        candidatesObj.splice(cindex,1);
        localStorage.setItem("allcandidates",JSON.stringify(candidatesObj));
        location.reload();



}