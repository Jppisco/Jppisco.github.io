//! Animacion a skills
var barraHTML = document.querySelector(".html");
var barrraCss = document.querySelector(".css");
var barraJs = document.querySelector(".js");
var barraGit = document.querySelector(".git");
var barraBs = document.querySelector(".bs");
var aux = false;

function animate(obj, initVal, lastVal, duration) {
  let startTime = null;
  //pass the current timestamp to the step function
  const step = (Conometro) => {
    //if the start time is null, assign the current time to startTime
    if (!startTime) {
      startTime = Conometro;
    }
    //calculate the value to be used in calculating the number to be displayed
    const progress = Math.min((Conometro - startTime) / duration, 1);
    //calculate what to be displayed using the value gotten above
    const value = (obj.innerHTML = `${Math.floor(
      progress * (lastVal - initVal) + initVal
    )}%`);
    obj.style.width = value;
    //checking to make sure the counter does not exceed the last value(lastVal)
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  //start animating
  window.requestAnimationFrame(step);
}

const load = function () {
  animate(barraHTML, 0, 90, 2000);
  animate(barrraCss, 0, 80, 2000);
  animate(barraJs, 0, 80, 2000);
  animate(barraGit, 0, 80, 2000);
  animate(barraBs, 0, 80, 2000);
};

window.addEventListener("scroll", function (e) {
  const scrollY = window.scrollY;
  if (aux === false && scrollY > 1350) {
    load();
    aux = true;
  }
});
