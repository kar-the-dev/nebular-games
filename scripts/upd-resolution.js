function loop() {
  $(':root').css("--screen-w", $( window ).height() );
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);