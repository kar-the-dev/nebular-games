var root = document.documentElement;

document.addEventListener('resize', () => {
  root.style.setProperty('--screen-w', window.screenX)
  root.style.setProperty('--screen-h', window.screenY)
})