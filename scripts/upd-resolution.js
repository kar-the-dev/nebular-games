function loop() {
  $(':root').css("--screen-w", $( window ).width());
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);