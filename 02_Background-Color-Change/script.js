var button = document.querySelector("#change-color");
var colorSpan = document.querySelector("#color");

// Random HEX generator
function randomcolor() {
  var randomColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  document.body.style.backgroundColor = randomColor;
  colorSpan.innerText = randomColor; // span update hoga
  console.log("Background color changed to: " + randomColor);
}

// Button click event
button.addEventListener("click", function () {
  randomcolor(); // har click pe random color
});

// Initial setup
document.body.style.backgroundColor = "#ffffff";
colorSpan.innerText = "#ffffff";
document.body.style.transition = "background-color 0.5s ease";
