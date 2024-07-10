// Register
const signupForm = document.querySelector("#signup-form");
const email = document.querySelector("#email");
const passwordInputSignup = document.querySelector("#password");

// registration logic

const url = "https://api.worldota.net/api/b2b/v3/profiles/create/";
const apiKey = "key_id:key";

if (signupForm) {
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await registration(passwordInputSignup, email);
  });
}

async function registration(passwordInputSignup, email) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", "Basic " + btoa(apiKey));

  if (passwordInputSignup.value.length < 8) {
    alert("Password must be more than 8 characters!");
    return;
  }
  var raw = JSON.stringify({
    email: email.value,
    password: passwordInputSignup.value,
  });
  console.log(raw);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      mode: "no-cors",
      body: raw,
      redirect: "follow",
    });
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Регистрация прошла успешно:", data);
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
  }
}
