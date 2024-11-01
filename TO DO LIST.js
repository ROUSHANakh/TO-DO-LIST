document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;

    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.addEventListener('click', function() {
        taskItem.classList.toggle('complete');
    });

    taskItem.appendChild(completeButton);
    taskList.appendChild(taskItem);
}
