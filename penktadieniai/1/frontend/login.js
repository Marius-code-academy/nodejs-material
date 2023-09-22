if (localStorage.getItem("loggedIn") === "true") {
  window.location.href = "./index.html";
}

const form = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#loginInput");
const passwordInput = document.querySelector("#passwordInput");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userName = usernameInput.value;
  const password = passwordInput.value;

  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: userName,
      password: password,
    }),
  });

  if (response.status === 401) {
    alert("Wrong password");
  }
  if (response.status === 404) {
    alert("User not found");
  }
  if (response.ok) {
    localStorage.setItem("loggedIn", true);
    window.location.href = "./index.html";
  }
});
