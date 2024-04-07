function loop() {
  $(':root').css("--screen-w", $( window).width());
  $(':root').css("--screen-h", $( window).height());
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);