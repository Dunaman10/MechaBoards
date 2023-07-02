// Open Products
const modal = document.querySelector("#modal");
const img = document.querySelectorAll(".card img");
const product = document.querySelectorAll(".product");
const jumbo = document.querySelector(".jumbo");

img.forEach((btn) => {
  btn.onclick = (e) => {
    modal.style.display = "flex";

    if ((e.target.className = "product")) {
      jumbo.src = e.target.src;
    }
    e.preventDefault();
  };
});

// Close Products
const closeIcon = document.querySelector(".close");
closeIcon.addEventListener("click", function (e) {
  modal.style.display = "none";
  e.preventDefault();
});
