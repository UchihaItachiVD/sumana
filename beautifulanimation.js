// JavaScript code for the beautiful particle animation
// Add your own creative modifications here

// Get the canvas element
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array to store particles
let particles = [];

// Particle constructor
function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.size = Math.random() * 5 + 1;
  this.speedX = Math.random() * 3 - 1.5;
  this.speedY = Math.random() * 3 - 1.5;
}

// Method to draw a particle
Particle.prototype.draw = function() {
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
};

// Method to update a particle's position
Particle.prototype.update = function() {
  this.x += this.speedX;
  this.y += this.speedY;
  if (this.size > 0.2) this.size -= 0.1;
};

// Animation loop
function animate() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw particles
  particles.forEach(function(particle, index) {
    particle.update();
    particle.draw();

    // Remove small particles
    if (particle.size <= 0.2) {
      particles.splice(index, 1);
    }
  });

  // Create new particles
  for (let i = 0; i < 5; i++) {
    const particle = new Particle(canvas.width / 2, canvas.height / 2);
    particles.push(particle);
  }

  // Call animate recursively
  requestAnimationFrame(animate);
}

// Start the animation
animate();
