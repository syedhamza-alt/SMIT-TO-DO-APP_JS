let saveBtn = document.getElementById("saveBtn");
let addBtn = document.getElementById("addBtn");
let inputField = document.getElementById("toDoInput");
let todoList = document.getElementById("toDoList");
let deleteAllBtn = document.getElementById("deleteAllBtn");
deleteAllBtn.style.display="none"
let editLi = null;
saveBtn.style.display = "none";
let todoInput = document.getElementById("toDoInput").value="";

addBtn.addEventListener("click", function () {
   let todoInput = document.getElementById("toDoInput");
  let todoInputValue = todoInput.value;

  if (todoInputValue.trim()) {
    let createLi = document.createElement("li");
    createLi.className = "listCreated";
    createLi.innerText = todoInputValue;

    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-outline-primary";
    editBtn.innerText = "Edit";
    createLi.appendChild(editBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn btn-outline-danger";
    createLi.appendChild(deleteBtn);

    todoList.appendChild(createLi);
    deleteAllBtn.style.display = "inline-block";

    deleteBtn.addEventListener("click", function () {
      createLi.remove();
      if (createLi.length === 0) {
        deleteAllBtn.style.display = "none";
      }
    });

    editBtn.addEventListener("click", function () {
      let editText = createLi.childNodes[0].nodeValue;
      todoInput.value = editText;
      saveBtn.style.display = "inline-block";
      addBtn.style.display = " none";
      editLi = createLi;
    });
  } else {
    alert("Please Input To Do");
  }
  saveBtn.addEventListener("click", function () {
    saveBtn.style.display = "none";
    addBtn.style.display = "inline-block";
    editLi.childNodes[0].nodeValue = todoInput.value;
    todoInput.value = "";
  });
  todoInput.value = "";  
});
deleteAllBtn.addEventListener("click", function () {
  let confirmText="Do you want to delete all the to do's";
  if (confirm(confirmText) == true) {
    if (todoList.children.length > 0) {
      todoList.innerHTML = null;
    }
    deleteAllBtn.style.display = "none";
  } 
});

