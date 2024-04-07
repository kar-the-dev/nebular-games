var root = document.documentElement;

function loop() {
    $(':root').css("--windowHeight", $( window ).height() );

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);