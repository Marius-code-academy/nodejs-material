const membershipSelect = document.querySelector("#membershipSelect");

const HOST = "http://localhost:3000/memberships";

let memberships = [];

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

function generateOptionHtml(membership) {
  const option = document.createElement("option");
  option.value = membership._id;
  option.textContent = membership.name;

  membershipSelect.append(option);
}

await getMemberships();

memberships.forEach((membership) => generateOptionHtml(membership));
console.log(memberships);
