function updateGradient() {
    let color1 = document.getElementById("color1").value;
    let color2 = document.getElementById("color2").value;
    let gradientBox = document.getElementById("gradientBox");
    let cssCode = document.getElementById("cssCode");

    let gradient = `radial-gradient(circle, ${color1}, ${color2})`;
    gradientBox.style.background = gradient;
    cssCode.textContent = `background: ${gradient};`;
}

// Initialize the default gradient when the page loads
window.onload = updateGradient;
