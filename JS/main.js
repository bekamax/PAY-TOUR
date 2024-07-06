document.addEventListener("DOMContentLoaded", () => {
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

  // User Login
  const phoneInput = document.querySelector("#phone");
  const loginForm = document.querySelector("#login-form");
  const passwordInputLogin = document.querySelector("#password"); // Изменен ID

  // Register
  const signupForm = document.querySelector("#signup-form");
  const email = document.querySelector("#email");
  const passwordInputSignup = document.querySelector("#password"); // Изменен ID

  if (signupForm) {
    signupForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      await registration();
    });
  }

  async function registration() {
    try {
      if (passwordInputSignup.value.length < 8) {
        console.error("Password must be more than 8 characters!");
        return;
      }
      var data = {
        email: email.value,
        password: passwordInputSignup.value,
      };

    

      console.log(data);

    fetch('https://api.worlddota.net/api/b2b/v3/overview', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        // добавьте другие необходимые заголовки здесь
    },
    body: JSON.stringify(data), // ваши данные для POST
    credentials: 'include' // или 'same-origin', если требуется
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.log("error", error);
    }
  }
});
