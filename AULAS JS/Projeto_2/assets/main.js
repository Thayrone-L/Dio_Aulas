const form = document.getElementById('task-form');
const taslist = document.getElementById('tasks');

form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById('task-input');
    if(document.getElementById("task-input").value =="") {
    
    alert('Insira uma tarefa');
    document.getElementById("task-input").focus();
    return false
    }
    else {
        addTask(inputField.value);
    form.reset();   
    }
}

function addTask(description) {
    const taskContainer = document.createElement('div');
    const newtask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    newtask.setAttribute('type', 'checkbox');
    newtask.setAttribute('name', description);
    newtask.setAttribute('id', description);

    taskLabel.setAttribute('for', description);
    taskLabel.appendChild(taskDescriptionNode);


    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newtask);
    taskContainer.appendChild(taskLabel);

    taslist.appendChild(taskContainer);

}