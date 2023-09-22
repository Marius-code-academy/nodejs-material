if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "./login.html";
}

const HOST = "http://localhost:3000/todo";

const submitForm = document.querySelector("form");
const titleInput = document.querySelector("#titleInput");
const descriptionInput = document.querySelector("#descriptionInput");

const container = document.querySelector("#todoContainer");
let todos = [];

submitForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = titleInput.value;
  const description = descriptionInput.value;

  try {
    const response = await fetch(HOST, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      titleInput.value = "";
      descriptionInput.value = "";

      generateTodosHtml(data);
    } else {
      alert("Something wrong");
    }
  } catch (error) {
    alert("Something wrong");
  }
});

async function getTodos() {
  try {
    const response = await fetch(HOST);
    if (response.ok) {
      const data = await response.json();
      todos = data;
    } else {
      alert("Something went wrong");
    }
  } catch (error) {
    alert("Something went wrong");
  }
}

function generateTodosHtml(todo) {
  const todoContainer = document.createElement("div");

  const title = document.createElement("input");
  title.value = todo.title;
  const description = document.createElement("input");
  description.value = todo.description;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", async () => {
    if (confirm("Are you sure you want to delete?")) {
      try {
        const response = await fetch(HOST + `/${todo.id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          todoContainer.remove();
        } else {
          alert("Something went wrong");
        }
      } catch (error) {
        alert("Something went wrong");
      }
    }
  });

  const updateButton = document.createElement("button");
  updateButton.textContent = "Update";

  updateButton.addEventListener("click", async () => {
    const titleValue = title.value;
    const descriptionValue = description.value;
    try {
      console.log(todo.id);
      const response = await fetch(HOST + `/${todo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: titleValue,
          description: descriptionValue,
        }),
      });

      if (response.ok) {
        alert("Todo update");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  });

  todoContainer.append(title, description, deleteButton, updateButton);

  container.append(todoContainer);
}

await getTodos();
todos.forEach((todo) => {
  generateTodosHtml(todo);
});
