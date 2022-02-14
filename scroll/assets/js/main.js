/* 
if there are two elements parend and child that contain accessibility tags, 
the class "captioned" should be added on the parent
*/

let captionedTrigger = document.getElementsByClassName('captioned');
let captionsElement = document.getElementById('captions');
let altElement = document.getElementById('alt');
let ariaElement = document.getElementById('aria');

function addCaptions() {
  for (let i = 0; i < captionedTrigger.length; i++) {
    let alt = '';
    let aria = '';
    let parent, child;

    parent = captionedTrigger[i];
    child = captionedTrigger[i].firstElementChild ? captionedTrigger[i].firstElementChild : null;

    if (parent.getAttribute('alt') != null) {
      alt = parent.getAttribute('alt');
    }
    if (parent.getAttribute('aria-label') != null) {
      aria = parent.getAttribute('aria-label');
    }

    if (child != null) {
      if (child.getAttribute('alt') != null) {
        alt = child.getAttribute('alt');
      }
      if (child.getAttribute('aria-label') != null) {
        aria = child.getAttribute('aria-label');
      }
    }

    captionedTrigger[i].addEventListener('mouseover', () => {displayAccessibility(alt, aria)}, false);
    captionedTrigger[i].addEventListener('mouseout', () => {displayAccessibility('', '')}, false);
  }
}

function displayAccessibility(altText, ariaText) {

  if (altText != '' || ariaText != '') {
    captionsElement.style.display = 'block';
    altElement.innerHTML = altText;
    ariaElement.innerHTML = ariaText;
  } else {
    captionsElement.style.display = 'none';
    altElement.innerHTML = '';
    ariaElement.innerHTML = '';
  }
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

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  window.addEventListener("scroll", scrollToShow);
  addCaptions();
}