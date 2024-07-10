// Modal
const burgerBtn = document.querySelector(".burger__btn");
const burger__dropdown = document.querySelector(".burger__dropdown");
const overlow = document.querySelector(".overlow");
if (burgerBtn && burger__dropdown) {
  burgerBtn.addEventListener("click", () => {
    // overlow.style.display = "block";
    burger__dropdown.style.display = "block";
  });
}
// overlow.addEventListener("click", () => {
//   overlow.style.display = "none";
//   burger__dropdown.style.display = "none";
// });
// 
// // User Login
// const phoneInput = document.querySelector("#phone");
// const loginForm = document.querySelector("#login-form");
// const passwordInputLogin = document.querySelector("#password"); // Изменен ID
