
chrome.storage.local.get("distractionSettings", (data)=>{
    const settings = data.distractionSettigns;

    if(!settings){
        return;
    }
    
    const current_host = window.location.hostname;
    const { blocked_site, redirect, alarm_time } = settings;

    const now = new Date();
    const currentTime = now.getHours().toString().padStart(2, '0')+':'+now.getMinutes().toString().padStart(2, '0');

    if(current_host.includes(blocked_site) && currentTime>=alarm_time){
        window.location.href = redirect;
    }

})