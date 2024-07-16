// Register
const signupForm = document.querySelector("#signup-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name"); // Поле для last name

// URL для регистрации
const url = "https://api.worldota.net/api/b2b/v3/profiles/create/";

// Ваш производственный ключ API
const keyId = "7300";
const key = "5d601122-cce8-4979-90a4-945ff0de0d09";

const encodedApiKey = btoa(`${keyId}:${key}`);
console.log(`Encoded API Key: ${encodedApiKey}`); // Логирование закодированного ключа API

// CORS-прокси URL
const corsProxy = 'https://cors-anywhere.herokuapp.com/';

if (signupForm) {
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await registration();
  });
}

async function registration() {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${encodedApiKey}`,
  };

  // Проверка длины пароля
  if (passwordInput.value.length < 8) {
    alert("Password must be more than 8 characters!");
    return;
  }

  const raw = {
    email: emailInput.value,
    password: passwordInput.value,
    first_name: firstNameInput.value,
    last_name: lastNameInput.value,
    type: "master", // Обновленное значение для type
  };

  console.log("URL: ", corsProxy + url); // Логирование URL с прокси
  console.log("Request Headers: ", headers); // Логирование заголовков запроса
  console.log("Request Body: ", raw);

  try {
    const response = await fetch(corsProxy + url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(raw),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Регистрация прошла успешно:", data);
    alert("User successfully registered!");
  } catch (error) {
    console.error(`Error caught: ${error}`);
    alert(`Error: ${error.message}`);
  }
}
