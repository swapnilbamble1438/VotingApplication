
let voternavbarcontent = document.getElementById("voternavbar");

voternavbar =`

  <ul>
  <li><a class="active" href="index.html">Home</a></li>
   <li><a href="voterdashboard.html">Welcome <span id="voternameatnav"></span></a></li>
  <li><a onClick="voterlogout()">Logout</a></li>
</ul>

`;
   
voternavbarcontent.innerHTML = voternavbar;