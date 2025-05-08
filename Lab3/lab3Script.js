const stopLight = document.getElementById("stopLight");
const slowLight = document.getElementById("slowLight");
const goLight = document.getElementById("goLight");

const stopButton = document.getElementById("stopButton");
const slowButton = document.getElementById("slowButton");
const goButton = document.getElementById("goButton");

function resetLights() {
  stopLight.style.backgroundColor = "darkgrey";
  slowLight.style.backgroundColor = "darkgrey";
  goLight.style.backgroundColor = "darkgrey";
}
stopButton.addEventListener("click", () => {
  resetLights();
  stopLight.style.backgroundColor = "red";
});

slowButton.addEventListener("click", () => {
  resetLights();
  slowLight.style.backgroundColor = "yellow";
});

goButton.addEventListener("click", () => {
  resetLights();
  goLight.style.backgroundColor = "green";
});
