const inputBtn = document.querySelector(".todo__input");
console.log(inputBtn.innerHTML)
const addBtn = document.querySelector(".todo__add");
const todoContainer = document.querySelector(".todo__container");
const todoList = document.querySelector(".todo__list");
const todoSelect = document.querySelector(".todo__select");


// add new Task:
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo__item");
    const newTask = `
    <p class="todo__task"> ${inputBtn.value} </p>
    <div class="todo__icon">
        <span><i class="fas fa-check-square"></i></span>
        <span><i class="far fa-edit"></i></span>
        <span><i class="fas fa-trash-alt"></i></span>
    </div>`;
    todoItem.innerHTML = newTask;
    todoList.appendChild(todoItem);
    inputBtn.value = "";
});

// remove & check Task:

todoList.addEventListener("click", (e) => {
    console.log([...e.target.classList]);
    const classes = [...e.target.classList];
    const item = e.target.parentElement.parentElement;
    if (classes.includes("fa-check-square")) {
        item.parentElement.classList.toggle("completed")
    } else if (classes.includes("fa-trash-alt")){
        item.parentElement.remove();
        
    }
    else if (classes.includes("fa-edit")){
        
    } 
});

// filte Task:
todoSelect.addEventListener("click",(select) => {
    const filterKey = select.target.value;
    console.log(filterKey);
    const todoClass = [...todoList.childNodes];
    console.log(todoClass.classList);

    todoClass.forEach(todo => { 
        switch (filterKey){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }  else {
                    todo.style.display = "none";
                }  
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }   else {
                    todo.style.display = "none";
                }

        }
    }) 

});
