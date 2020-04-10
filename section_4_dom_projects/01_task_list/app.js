// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load All Event Listeners
loadEventListeners();

function loadEventListeners() {
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add Task Event
    form.addEventListener('submit', addTask);

    // Remove task
    taskList.addEventListener('click', removeTask)

    // Filter Task
    filter.addEventListener('input', filterTask);

    // Clear Tasks
    clearBtn.addEventListener('click', clearTasks);
}

function getTasks() {
    let tasks = [];
    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task) {
        // Create Li Element
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));

        const link = document.createElement('button');
        link.className = 'delete-item';
        link.appendChild(document.createTextNode('X'));

        li.appendChild(link);

        taskList.appendChild(li);
    });
}

// Add Task
function addTask(e) {
    e.preventDefault();
    if (taskInput.value === '') {
        alert('Add a Task');
    }

    // Create Li Element
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('button');
    link.className = 'delete-item';
    link.appendChild(document.createTextNode('X'));

    li.appendChild(link);

    taskList.appendChild(li);

    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';
}

function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
    if (e.target.classList.contains('delete-item')) {
        removeTaskFromLocalStorage(e.target.parentElement.firstChild.textContent);
        e.target.parentElement.remove();
    }
}

function removeTaskFromLocalStorage(task, strictMode=false) {
    if (strictMode) {
        localStorage.setItem('tasks', JSON.stringify([]));
        return;
    }
    let tasks = [];
    let filteredTasks = [];
    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        filteredTasks = tasks.filter(function(t) {
            return t.toLowerCase() !== task.toLowerCase();
        });
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    }
}

function filterTask(e) {
    const value = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function (li) {
        const item = li.textContent;
        if (item.toLowerCase().includes(value)) {
            li.style.display = '';
        } else {
            li.style.display = 'none';
        }
    });
}

function clearTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    removeTaskFromLocalStorage(undefined, true);
}