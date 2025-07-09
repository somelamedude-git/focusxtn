const save = document.querySelector(".save");
const block = document.querySelector(".block-site");

const blocked_site="";
const redirect="";

block.addEventListener("submit", (e)=>{
    const blocked_site = document.querySelector(".blocked").value.trim();
    const redirect = document.querySelector(".redirect").value.trim();
    const alarm_time = document.querySelector(".time").value.trim();

    if(!blocked_site || !redirect || !alarm_time){
        alert("Fill all the fields to continue");
        return;
    }

    
});