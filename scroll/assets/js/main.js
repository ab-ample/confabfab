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

function clockScroll() {
  backtomenuElement.style.transform = "rotate3d(0, 0, 1, "+(window.pageYOffset/8)+"deg)";
  let y = window.scrollY;
  if (y >= 800) {
    backtomenuElement.style.display = "block"
  } else {
    backtomenuElement.style.display = "none"
  }
};

function debounce(method, delay) {
    clearTimeout(method._tId);
    method._tId= setTimeout(function(){
        method();
    }, delay);
}

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  window.addEventListener("scroll", function() {
    debounce(clockScroll, 10);
  });

  addCaptions();
}

const hour = document.querySelector('.hourhand');
const minute = document.querySelector('.minhand');
const second = document.querySelector('.sechand');


setInterval(() => {
    let d = calcTime('+2'); //Estonia is UTC+2
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let hr_rotation = 30 * hr + min / 2; //converting current time
    let min_rotation = 6 * min;
    let sec_rotation = 6 * sec;
  
    hour.style.transform = `translateX(-50%) rotate(${hr_rotation}deg)`;
    minute.style.transform = `translateX(-50%) rotate(${min_rotation}deg)`;
    second.style.transform = `translateX(-50%) rotate(${sec_rotation}deg)`;
}, 1000);

function calcTime(offset) {
    let d = new Date();
    let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    let nd = new Date(utc + (3600000*offset));

    return nd;
}