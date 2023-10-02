const nameInput = document.querySelector("#nameInput");
const priceInput = document.querySelector("#priceInput");
const descriptionInput = document.querySelector("#descriptionInput");

const submitButton = document.querySelector("#submitButton");
const cancelButton = document.querySelector("#cancelButton");

const form = document.querySelector("form");

const HOST = "http://localhost:3000/memberships";

cancelButton.addEventListener(
  "click",
  () => (window.location.href = "./membershipManagement.html")
);

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const name = nameInput.value;
    const price = priceInput.value;
    const description = descriptionInput.value;

    const response = await fetch(HOST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price, description }),
    });

    if (response.ok) {
      alert("Membership created");
      window.location.href = "./membershipManagement.html";
    } else {
      alert("Something went wrong");
    }
  } catch (error) {
    alert("Something went wrong");
  }
});
