const save = document.querySelector(".save");
const block = document.querySelector(".block-site");

block.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const blocked_site = document.querySelector(".blocked").value.trim();
    const redirect = document.querySelector(".redirect").value.trim();
    const alarm_time = document.querySelector(".time").value.trim();

    if (!blocked_site || !redirect || !alarm_time) {
        alert("Fill all the fields to continue");
        return;
    }

    const settings = {
        blocked_site,
        redirect,
        alarm_time
    };

    chrome.storage.local.remove("distractionSettings", () => {
        console.log("Old settings cleared");

        chrome.storage.local.set({ distractionSettings: settings }, () => {
            alert("focus up, slugger.");
        });
    });
});
