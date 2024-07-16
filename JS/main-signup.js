// Register
const signupForm = document.querySelector("#signup-form");
const email = document.querySelector("#email");
const passwordInputSignup = document.querySelector("#password");

// URL для регистрации
const url = "https://api.worldota.net/api/b2b/v3/profiles/create/";

// Ваш производственный ключ API
const keyId = "7300";
const key = "5d601122-cce8-4979-90a4-945ff0de0d09";

if (signupForm) {
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await registration(email, passwordInputSignup);
  });
}

const encodedApiKey = btoa(`${keyId}:${key}`);
console.log(`Encoded API Key: ${encodedApiKey}`); // Логирование закодированного ключа API

async function registration(email, passwordInputSignup) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${encodedApiKey}`,
  };

  if (passwordInputSignup.value.length < 8) {
    alert("Password must be more than 8 characters!");
    return;
  }

  let raw = {
    email: email.value,
    password: passwordInputSignup.value,
  };

  console.log("URL: ", url); // Логирование URL
  console.log("Request Headers: ", headers); // Логирование заголовков запроса
  console.log("Request Body: ", raw);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: headers,
      mode: "no-cors",
      body: JSON.stringify(raw),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error response:", errorText);
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    console.log("Регистрация прошла успешно:", data);
    alert("User successfully registered!");
  } catch (error) {
    console.error(`Error caught: ${error}`);
    alert(`Error: ${error.message}`);
  }
}
