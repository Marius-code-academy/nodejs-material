const orderSelect = document.querySelector("#orderSelect");
const userContainer = document.querySelector("#userContainer");

let users = [];

const HOST = "http://localhost:3000/users/";

async function getUsers() {
  try {
    const response = await fetch(HOST + orderSelect.value);
    if (response.ok) {
      const data = await response.json();
      users = data;
    } else {
      alert("Something went wrong");
    }
  } catch (error) {
    alert("Something went wrong");
  }
}

function generateUserHtml(user) {
  const container = document.createElement("div");
  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = `${user.name} ${user.surname}`;

  const emailParagraph = document.createElement("p");
  emailParagraph.textContent = user.email;
  const membershipParagraph = document.createElement("p");
  let membershipTextContent = "No membership";
  if (user.service_id) {
    membershipTextContent = user.service_id.name;
  }
  membershipParagraph.textContent = membershipTextContent;
  const idParagraph = document.createElement("p");
  idParagraph.textContent = user._id;

  container.append(
    nameParagraph,
    emailParagraph,
    membershipParagraph,
    idParagraph,
    document.createElement("hr")
  );

  userContainer.append(container);
}

await getUsers();
console.log(users);

users.forEach((user) => generateUserHtml(user));
