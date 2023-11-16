// Set the URL to redirect to after a delay (in milliseconds)
const redirectDelay = 10; 
const redirectUrl = "tel:8182141122"; // Change this to the desired URL

// Function to redirect to another URL
function redirectToURL() {
    window.location.href = redirectUrl;
}

// Automatically redirect after the specified delay
setTimeout(redirectToURL, redirectDelay);
