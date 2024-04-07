function loop() {
  $(':root').css("--screen-w", $( window ).width());
  $(':root').css("--screen-h", $( window ).width());
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);