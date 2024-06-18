// Your code here
const inputField = document.getElementById("addToDo");
const toDoList = document.querySelector("ul");

function addTask() {
    const taskText = inputField.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span><i class="fa fa-trash"></i></span> ${taskText}`;
        toDoList.appendChild(listItem);
        inputField.value = "";
    }
}

function deleteTask(event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("fa-trash")) {
        const listItem = clickedElement.parentElement.parentElement;
        toDoList.removeChild(listItem);
    }
}

inputField.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
})
toDoList.addEventListener("click", deleteTask);