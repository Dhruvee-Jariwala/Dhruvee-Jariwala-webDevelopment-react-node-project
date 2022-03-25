function validateEmail()
{ 
    var email= document.getElementById("email").value;
    var emailSpan = document.getElementById("email-span");
    var emailREG = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailREG.test(email))
    {
        emailSpan.innerHTML = "";
        return true;
    }
    else
    {
        emailSpan.innerHTML = "Enter Valid Email";
        return false;
    }
        
}
function validateName()
{
    var name = document.getElementById("name").value;
    var nameSpan = document.getElementById("name-span");
    var nameREG = /^[a-zA-Z]{2,}$/;
    if(nameREG.test(name))
    {
        nameSpan.innerHTML="";
        return true;
    }
    else
    {
        nameSpan.innerHTML="Enter Alphabets only";
        return false;
    }
        
}

function validateContact()
{
    var contact = document.getElementById("contact").value;
    var contactSpan = document.getElementById("contact-span");
    var contactREG = /^\d{10}$/;
    if(contactREG.test(contact))
    {
        contactSpan.innerHTML="";
        return true;
    }
    else
    {
        contactSpan.innerHTML="Enter only 10 digits";
        return false;
    }
        
}
function validate()
{
    if(validateName()===true && validateEmail()===true && validateContact()===true)
    {
        alert("Your query has been sent successfully");
        return true;
    }
    else{
        return false;
    }
}