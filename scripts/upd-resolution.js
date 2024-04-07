var root = document.documentElement;

function loop() {
  root.style.setProperty('--screen-w', window.screen.width*3.5);
  root.style.setProperty('--screen-h', window.screen.height*3.5);
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);