
let adminnavbarcontent = document.getElementById("adminnavbar");

adminnavbar =`

  <ul>
  <li><a class="active" href="index.html">Home</a></li>
   <li><a href="admindashboard.html">Welcome Admin</a></li>
     <li><a href="viewvoters.html">View Voters</a></li>
     <li><a href="votedetails.html">View Vote Details</a></li>
  <li><a onClick="adminlogout()">Logout</a></li>
</ul>

`;
   
adminnavbarcontent.innerHTML = adminnavbar;
   


function adminlogout()
{
    localStorage.removeItem("loginadminemail");
    localStorage.removeItem("loginadminpassword");
    window.location.href = "adminsignin.html";
    localStorage.setItem("alogoutmsg","Logout Successfully");

}