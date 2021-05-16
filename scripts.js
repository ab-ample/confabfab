console.log('🐓  🎀  𝒫𝒶𝓊𝓁𝒶, 𝒜𝓁𝑒𝒿𝒶𝓃𝒹𝓇☯, 𝐵𝒿ö𝓇𝓃  🎀  🐓');

function setup() {
    createCanvas(windowWidth, windowHeight);
}
  
function draw() {
    if (mouseIsPressed) {
        fill(230);
        stroke(230);
    } else {
        fill(255);
        stroke(230);
    }
        ellipse(mouseX, mouseY, 60, 60);
}