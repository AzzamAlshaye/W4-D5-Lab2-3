const screenImg = document.getElementById("mainImg");

function changeChannel(channel) {
  let url;
  switch (channel) {
    case "1":
      url =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg";
      break;
    case "2":
      url =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg";
      break;
    case "3":
      url =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg";
      break;
    case "4":
      url =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg";
      break;
    case "5":
      url =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg";
      break;
    case "6":
      url =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg";
      break;
    case "7":
      url =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg";
      break;
    case "8":
      url =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg";
      break;
    case "9":
      url =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg";
      break;
    default:
      url = "";
  }
  screenImg.src = url;
  screenImg.alt = url ? `Channel ${channel}` : "No channel selected";
  screenImg.title = url ? `Channel ${channel}` : "No channel selected";
}

document.querySelectorAll(".channel").forEach((button) => {
  button.addEventListener("click", () => {
    changeChannel(button.textContent.trim());
  });
});
