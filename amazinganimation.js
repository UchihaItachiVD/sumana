// JavaScript code for amazing particle animation and scrolling message
// Add your own creative modifications here

// Get a random number between min and max
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Create a particle
  function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");
  
    // Set random position and size for the particle
    particle.style.left = `${getRandomNumber(0, window.innerWidth)}px`;
    particle.style.top = `${getRandomNumber(0, window.innerHeight)}px`;
    particle.style.width = `${getRandomNumber(10, 40)}px`;
    particle.style.height = particle.style.width;
  
    // Set random color for the particle
    const red = Math.floor(getRandomNumber(0, 256));
    const green = Math.floor(getRandomNumber(0, 256));
    const blue = Math.floor(getRandomNumber(0, 256));
    particle.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  
    // Set random animation duration and delay for the particle
    particle.style.animationDuration = `${getRandomNumber(1, 3)}s`;
    particle.style.animationDelay = `${getRandomNumber(0, 1)}s`;
  
    // Remove particle from the DOM after animation ends
    particle.addEventListener("animationend", () => {
      particle.parentNode.removeChild(particle);
    });
  
    return particle;
  }
  
  // Create particles at regular intervals
  setInterval(() => {
    const particle = createParticle();
    document.body.appendChild(particle);
  }, 200); // Adjust the interval duration as desired
  