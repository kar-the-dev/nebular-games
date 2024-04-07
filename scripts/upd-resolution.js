var root = document.documentElement;

document.addEventListener('resize', () => {
  root.style.setProperty('--screen-w', window.screen.width)
  root.style.setProperty('--screen-h', window.screen.height)
})