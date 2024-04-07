var root = document.documentElement;

function loop() {
  root.style.setProperty('--screen-w', window.screen.width*4.5);
  root.style.setProperty('--screen-h', window.screen.height*4.5);
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);