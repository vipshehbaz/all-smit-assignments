const button = document.querySelector("#add-todo");
const clearButton = document.querySelector("#clear");
const input = document.querySelector("input");
let container = document.querySelector(".card-container");

let data = JSON.parse(localStorage.getItem("items")) || [];

button.addEventListener("click", () => {
  let value = input.value;
  sameFound = data.some((item) => item.value === value);
  if (!sameFound) {
    data.push({ value });
    localStorage.setItem("items", JSON.stringify(data));
    render();
  } else {
    alert("This Value Already Exist");
  }
});

function render() {
  container.classList.remove("condition-design");
  input.value = "";
  console.log("render run");
  container.innerHTML = "";
  if (data?.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const card = document.createElement("div");
      const buttonsContainer = document.createElement("div");
      const editBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");
      deleteBtn.addEventListener("click", (e) => {
        deleteItem(e.target.id);
      });
      editBtn.addEventListener("click", (e) => {
        editItem(e.target.id);
      });
      buttonsContainer.classList.add("buttons-container");
      editBtn.innerHTML = "Edit";
      editBtn.id = i;
      deleteBtn.classList.add("delete");
      deleteBtn.id = i;
      deleteBtn.innerHTML = "Delete";
      card.innerText = i + 1 + "." + " " + data[i].value;
      buttonsContainer.appendChild(editBtn);
      buttonsContainer.appendChild(deleteBtn);
      card.appendChild(buttonsContainer);
      card.classList.add("card");
      container.appendChild(card);
    }
  } else {
    renderError();
  }
}

clearButton.addEventListener("click", () => {
  container.innerHTML = "";
  data = [];
  localStorage.clear();
  renderError();
});

function renderError() {
  const info = document.createElement("p");
  info.classList.add("error");
  info.innerHTML = "No Data Found";
  container.appendChild(info);
  container.classList.add("condition-design");
}

function deleteItem(id) {
  let confirmation = confirm(`Are You Sure ?`);
  if (confirmation) {
    data = data.filter((item) => item !== data[id]);
    localStorage.setItem("items", JSON.stringify(data));
    render();
  }
}

function editItem(id) {
  let updateField = prompt("update the value below", data[id].value);
  if (updateField) {
    data[id].value = updateField;
    localStorage.setItem("items", JSON.stringify(data));
    render();
  }
}

render();
