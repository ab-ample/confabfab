let captionTriggers = document.getElementsByClassName('captioned');
let captionElement = document.getElementById('caption');

for (let i = 0; i < captionTriggers.length; i++) {
  let caption = captionTriggers[i].getAttribute('alt');
  captionTriggers[i].addEventListener('mouseover', () => {displayCaption(caption)}, false);
  captionTriggers[i].addEventListener('mouseout', () => {displayCaption('')}, false);
  // captionTriggers[i].getAttribute('alt')
}

function displayCaption(caption) {
  captionElement.innerHTML = caption;
}

let backtomenuElement = document.getElementById("backtomenu");

function scrollToShow() {
  backtomenuElement.style.transform = "rotate3d(0, 0, 1, "+(window.pageYOffset/8)+"deg)";
  let y = window.scrollY;
  if (y >= 800) {
    backtomenuElement.style.display = "block"
  } else {
    backtomenuElement.style.display = "none"
  }
};

window.addEventListener("scroll", scrollToShow);