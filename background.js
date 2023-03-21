// Listen for the user clicking the extension icon
chrome.action.onClicked.addListener(function(tab) {
  // Open the popup window
  chrome.windows.create({
    url: "popup.html",
    type: "popup",
    width: 400,
    height: 600
  });
});

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // Check the message type
  if (request.type === "generateResponse") {
    // Generate a response based on the message text
    var response = generateResponse(request.text);
    
    // Send the response back to the popup
    sendResponse({response: response});
  }
});

// Function to generate a response based on the message text
function generateResponse(text) {
  // Your code to generate a response goes here
}