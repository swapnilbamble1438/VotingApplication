
let navbarcontent = document.getElementById("navbar");

navbar =`
  <ul>
  <li><a class="active" href="index.html">Home</a></li>
  <li><a href="register.html">New Voter Registration</a></li>
  <li><a href="votersignin.html">Voter Signin</a></li>
  <li><a href="adminsignin.html">Admin Signin</a></li>
  <li><a href="about.html">About</a></li>
</ul>
`;
   
navbarcontent.innerHTML = navbar;


