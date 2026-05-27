let taskInput = document.querySelector(".taskInput");
let task_list = document.querySelector(".task_list");
let progress_bar = document.querySelector(".progress");
let numbers = document.querySelector(".numbers");
let addTaskBtn = document.querySelector("#addTaskBtn");

document.addEventListener("DOMContentLoaded", ()=>{
    let storedTask = JSON.parse(localStorage.getItem('storeTask'));

    if(storedTask){
        storedTask.forEach((task) => taskArr.push(task));
        upDateTaskList();
        updatedProgressBar();
    }
})

let taskArr = [];

let saveTask = ()=>{
    localStorage.setItem("storeTask", JSON.stringify(taskArr));
}

let addTask = ()=>{
    let text = taskInput.value.trim();
    // alert(text)
    if(text){
        taskArr.push({text:text, completed:false});
        taskInput.value = "";
        upDateTaskList();
        updatedProgressBar();
        saveTask();
    }
    // console.log(taskArr)
}

let toggleTastComplete = (index)=>{
    taskArr[index].completed = !taskArr[index].completed;
    // console.log(taskArr)
    upDateTaskList();
    updatedProgressBar();
    saveTask();
}

let deleteTask = (index)=>{
    taskArr.splice(index, 1)
    upDateTaskList();
    updatedProgressBar();
    saveTask();
}

let editTask = (index)=>{
    taskInput.value = taskArr[index].text;
    taskInput.focus();
    taskArr.splice(index, 1);
    upDateTaskList();
    updatedProgressBar();
    saveTask();
}

let updatedProgressBar = ()=>{
    let completedTask = taskArr.filter((task) => task.completed).length;
    let totalTask = taskArr.length;
    let progress = (completedTask / totalTask) * 100;

    progress_bar.style.width = `${progress}%`;

    numbers.innerText = `${completedTask} / ${totalTask}`
}

let upDateTaskList = ()=>{
    task_list.innerHTML = "";

    taskArr.forEach((task, index) =>{
        let list_item = document.createElement("div");

        list_item.innerHTML = `<div class="task_item">
                <div class="task ${task.completed ? "completed":""}">
                    <input type="checkbox" class="checkbox" ${task.completed ? "checked":""}>
                    <p>${task.text}</p>
                </div>
                <div class="icons">
                    <i class="ri-edit-box-line" onclick="editTask(${index})"></i>
                    <i class="ri-delete-bin-4-line" onclick="deleteTask(${index})"></i>
                </div>
            </div>`;
        
        list_item.addEventListener("change", ()=> toggleTastComplete(index))
        task_list.append(list_item)
    })
}

addTaskBtn.addEventListener("click", function(e){
    e.preventDefault();
    addTask();
})