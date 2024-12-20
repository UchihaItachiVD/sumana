// JavaScript code for displaying messages with animations
// Add your own creative modifications here

// Array of messages
const messages = [
    "I LOVE YOU BABY",
    "I WILL NEVER LEAVE YOU",
    "I WILL STAY WITH YOU FOREVER NO MATTER WHAT",
    "I AM NOTHING WITHOUT YOU",
    "I LOVE YOU 3000",
    // Add more messages as desired
  ];
  
  // Index of current message
  let currentIndex = 0;
  
  // Function to display the next message
  function displayNextMessage() {
    const messageElement = document.getElementById("message");
    messageElement.textContent = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
  }
  
  // Initial display of the first message
  displayNextMessage();
  
  // Interval to display messages at regular intervals
  setInterval(displayNextMessage, 3000); // Adjust the interval duration as desired
  