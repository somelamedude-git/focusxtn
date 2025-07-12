function redirection() {
    chrome.storage.local.get("distractionSettings", (data) => {
        const settings = data.distractionSettings;

        if (!settings) {
            console.log(" No settings found");
            return;
        }

        const { blocked_site, redirect, alarm_time } = settings;
        if (!blocked_site || !redirect || !alarm_time) {
            console.warn("⚠Incomplete distractionSettings");
            return;
        }

        const current_host = window.location.hostname;

        console.log(" Retrieved Settings:");
        console.log("   Blocked Site:", blocked_site);
        console.log("   Redirect Site:", redirect);
        console.log("   Alarm Time:", alarm_time);
        console.log("   Current Host:", current_host);

        const now = new Date();
        const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

        function timeToMinutes(t) {
            const [h, m] = t.split(":").map(Number);
            return h * 60 + m;
        }

        if (
            current_host.includes(blocked_site) &&
            timeToMinutes(currentTime) >= timeToMinutes(alarm_time)
        ) {
            console.log(" Redirecting due to focus rule triggered.");
            window.location.href = redirect;
        }
    });
}

let retryCount = 0;
const maxRetries = 30;

const interval = setInterval(() => {
    chrome.storage.local.get("distractionSettings", (data) => {
        if (data.distractionSettings) {
            clearInterval(interval);
            redirection();
            setInterval(redirection, 10000);
        } else {
            retryCount++;
            console.log(" Waiting for distractionSettings...");
            if (retryCount > maxRetries) {
                clearInterval(interval);
                console.warn("⚠ Gave up waiting for distractionSettings.");
            }
        }
    });
}, 2000);
