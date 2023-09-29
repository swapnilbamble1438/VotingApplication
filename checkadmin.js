
checkAdmin();
function checkAdmin()
{
    let email = localStorage.getItem("loginadminemail");
    let password = localStorage.getItem("loginadminpassword");

    if(email != "admin" && password != "admin")
    {
        window.location.href = "adminsignin.html";
    }
}