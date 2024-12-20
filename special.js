// JavaScript code for the special feature
// Add your amazing and unique functionality here

// Example: Random background color change
function changeBackgroundColor() {
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
  }
  
  // Add event listener to change background color on button click
  const colorButton = document.getElementById("color-button");
  colorButton.addEventListener("click", changeBackgroundColor);
  