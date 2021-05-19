const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30); // run blurring function every 30 milliseconds

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int); // when load gets to 100, blurring intevral stops suddenly
  }

  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = 1 - load / 100;
  bg.style.filter = `blur(${30 - load / 3}px)`;
}
