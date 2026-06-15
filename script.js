// Minimal touch of interactivity: a live local clock.
const clock = document.getElementById("clock");

function tick() {
  if (!clock) return;
  clock.textContent = new Date().toLocaleTimeString();
}

tick();
setInterval(tick, 1000);
