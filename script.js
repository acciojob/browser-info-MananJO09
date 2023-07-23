// Get the browser name and version
var browserName = navigator.appName;
var version = navigator.appVersion;

// Create the message
var message = " \n\t\t\n\tYou are using " + browserName +"\n\t\t\n\t version "+version; ;

// Display the message on the page
var browserInfoElement = document.getElementById("browser-info");
browserInfoElement.innerHTML = message;
 