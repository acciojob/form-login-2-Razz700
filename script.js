//your JS code here. If required.
let fn=document.getElementById("firstname");
let ls=document.getElementById("lastname");
let ph=document.getElementById("phone");
let em=document.getElementById("email");
let sub=document.getElementById("subm");
sub.addEventListener("click",myfnc);
function myfnc(){
alert(`First Name: ${fn.value} Last Name: ${ls.value} Phone Number: ${ph.value} Email ID: ${em.value}`);
}