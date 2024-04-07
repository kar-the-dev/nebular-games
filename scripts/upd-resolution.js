function loop() {
  $(':root').css("--screen-w", $(window).width());
  $(':root').css("--screen-h", $(window).height() * 2);
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);