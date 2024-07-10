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
  let raw = JSON.stringify({
    email: email.value,
    password: passwordInputSignup.value,
  });
  console.log(raw);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // mode: "no-cors",
      body: raw,
      redirect: "follow",
    });
    if (res.ok) {
      alert("User successfully registrated!");
    }
  } catch (error) {
    console.error(`Error cought: ${error}`);
  }
}
