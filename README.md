focusxtn is a bare-knuckle Chrome extension to stop you from spiraling into useless websites when you should be building empires. It lets you block time-wasting domains and redirects you to a productive page of your choice once your own self-imposed deadline hits.

⚙️ Features
Block any website of your choosing

Set a specific time after which visiting the blocked site force-redirects you

Save your settings using Chrome local storage

Redirects you with zero mercy — no "Are you sure?" baby prompts

📁 File Structure
pgsql
Copy
Edit
focusxtn/
├── manifest.json           # Extension metadata
├── form.html               # UI to collect blocked site, redirect, and alarm time
├── form.js                 # Saves form input to chrome.storage.local
├── content.js              # Enforces redirect logic in real pages
🚀 How It Works
You open the extension popup (form.html)

You enter:

Site you want to block (e.g., https://youtube.com)

Site to redirect to (e.g., https://github.com)

The cutoff time (24-hour format)

After the set time, if you visit the blocked site — you're forcefully redirected to your productive destination.

🛠️ How to Install (Test Locally)
Clone or download the repo.

Go to chrome://extensions

Turn on Developer mode

Click Load unpacked

Select the focusxtn/ folder

You're done. Open any site, hit the popup, and set your distraction trap.

🧠 Tech Stack
HTML/CSS/JS (no frameworks, no fluff)

Chrome Extension API

chrome.storage.local

content_scripts

Manifest V3

❗ Notes
content.js is mandatory. This is what actually runs inside web pages to detect the current hostname and perform the redirect.

Make sure the time format is correct (e.g., 09:30, not 9:30)

Make sure your blocked site includes the full https:// so parsing works properly

🔒 Permissions Used
json
Copy
Edit
"permissions": ["storage"],
"host_permissions": ["<all_urls>"]
📦 To-Do / Roadmap
 Add support for multiple blocked sites

 Allow daily schedules

 Option to toggle blocking on/off

 Add an icon

 Self-hate reminder quotes (optional, brutal)
