

votedetails();
function votedetails()
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
        let ctable="";
    
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


            ctable +=`
            <tr>
            <td style="background-color:#ebe9eb">Voters</td>
            <td>${e[0]}</td>
            <td>${e[1]}</td>    
            <td>${e[2]}</td>    
            <td>${e[3]}</td>   
              <td>
                <a onClick="deleteVote(${index})" ><img src= "image/delete.jpg" style="height:25px" alt="Delete"></a>
            </td>  
            </tr>
            
            `;
        });

        ctable +=`
                    <tr>
            <td style="background-color:#ebe9eb">Total Votes</td>
            <td scope="col"><p>${c1totalvotes}</p></td>
            <td scope="col"><p>${c2totalvotes}</p></td>
            <td scope="col"><p>${c3totalvotes}</p></td>
            <td scope="col"><p>${c4totalvotes}</p></td>
            </tr>
        `;

        document.getElementById("ctable").innerHTML = ctable;
        


}


function deleteVote(index)
{
    let candidates = localStorage.getItem("allcandidates");
    if(candidates == null)
    {
        candidatesObj =[];
    }
    else{
        candidatesObj = JSON.parse(candidates);
    }

    candidatesObj.splice(index,1);
    localStorage.setItem("allcandidates",JSON.stringify(candidatesObj));
    location.reload();


}