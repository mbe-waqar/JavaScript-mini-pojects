var inc = document.querySelector("#increment");
var dec = document.querySelector("#decrement");
var res = document.querySelector("#reset");
var count = document.querySelector("#counter");

var countValue = 0;

inc.addEventListener("click", function () {
  countValue++;
  count.innerText = countValue;
  count.style.color =
    countValue > 0 ? "green" : countValue < 0 ? "red" : "black";
});

dec.addEventListener("click", function () {
  countValue--;
  count.innerText = countValue;
  count.style.color =
    countValue > 0 ? "green" : countValue < 0 ? "red" : "black";
});

res.addEventListener("click", function () {
  countValue = 0;
  count.innerText = countValue;
  count.style.color =
    countValue > 0 ? "green" : countValue < 0 ? "red" : "black";
});
