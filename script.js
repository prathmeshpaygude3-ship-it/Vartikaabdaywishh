/* Typing text */
const text = "🎉 Happy Birthday, You Cutieekaaa! 🎉";
let i = 0;

function typeText() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 100);
  }
}
typeText();

/* Slider */
const images = [
  "images/p1.jpg",
  "images/p2.jpg",
  "images/p3.jpg",
  "images/p4.jpg"
];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}, 2500);

/* Popup + confetti */
function surprise() {
  document.getElementById("popup").style.display = "block";
  confetti();
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function confetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let pieces = [];
  for (let i = 0; i < 120; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 6 + 2
    });
  }

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#ff5f7e";
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fill();
      p.y += p.d;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
}
