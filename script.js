// JavaScript code for your website

// Random comforting messages
const comfortingMessages = [
  "You are loved and cherished, always remember that.",
  "You have the strength to overcome any challenge that comes your way.",
  "Your well-being is a top priority, take the time to care for yourself.",
  "Your resilience and grace inspire those around you.",
  "You are not alone; I am here to support you every step of the way.",
  "Embrace the power of self-care and treat yourself with kindness.",
  "Your inner strength shines through even in the toughest moments.",
  "Allow yourself to rest and recharge, you deserve it.",
  "Remember, this too shall pass. Brighter days are ahead.",
  "You are beautiful, both inside and out. Don't ever forget that."
];

// Display random comforting message
const comfortingMessageContainer = document.getElementById("comforting-message");

function displayRandomComfortingMessage() {
  const randomIndex = Math.floor(Math.random() * comfortingMessages.length);
  const randomMessage = comfortingMessages[randomIndex];
  comfortingMessageContainer.textContent = randomMessage;
}

window.addEventListener("DOMContentLoaded", displayRandomComfortingMessage);
