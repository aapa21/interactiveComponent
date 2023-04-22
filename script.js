const submit = document.getElementById("submit");
const showRate = document.getElementById("container2");
const rateContainer = document.getElementById("rate-container");
const rates = document.getElementsByClassName("rates");
const span = document.getElementById("show-rate");

rates[0].addEventListener("click", () => {
  span.innerText = 1;
})

rates[1].addEventListener("click", () => {
  span.innerText = 2;
})

rates[2].addEventListener("click", () => {
  span.innerText = 3;
})

rates[3].addEventListener("click", () => {
  span.innerText = 4;
})

rates[4].addEventListener("click", () => {
  span.innerText = 5;
})


submit.addEventListener("click", (e) => {
  e.preventDefault();
  rateContainer.style.display = "none";
  showRate.style.display = "block";
});
