const button = document.querySelector("#newMembership");
const membershipContainer = document.querySelector("#membershipContainer");

const HOST = "http://localhost:3000/memberships";

let memberships = [];

button.addEventListener("click", () => (window.location.href = "./newMembership.html"));

async function getMemberships() {
  try {
    const response = await fetch(HOST);
    if (response.ok) {
      const data = await response.json();
      memberships = data;
    } else {
      alert("Something went wrong");
    }
  } catch (error) {
    alert("Something went wrong");
  }
}

async function generateMembershipHtml(membership) {
  const container = document.createElement("div");
  const priceNameParagraph = document.createElement("p");
  priceNameParagraph.textContent = `$ ${membership.price} ${membership.name}`;

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.textContent = membership.description;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", async () => {
    try {
      const response = await fetch(`${HOST}/${membership._id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        container.remove();
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  });

  container.append(priceNameParagraph, descriptionParagraph, deleteButton);

  membershipContainer.append(container);
}

await getMemberships();

memberships.forEach((membership) => generateMembershipHtml(membership));
