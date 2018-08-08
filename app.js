// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
const username = "chalkers";
const https = require('https');
function printMessage(username, badgeCount, points) {
   const message = `${username} has ${badgeCount} total badge(s) and ${points} in Javascript`;
    console.log(message);
}

// connect to the API URL (https://teamtreehouse.com/username.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    console.dir(response.statusCode);    
// Read the data
    // Parse the data
    // Print out the data
});

