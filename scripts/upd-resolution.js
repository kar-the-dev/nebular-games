var root = document.documentElement;

function loop() {
  root.style.setProperty('--screen-w', window.screen.width*1.5);
  root.style.setProperty('--screen-h', window.screen.height*1.5);
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);