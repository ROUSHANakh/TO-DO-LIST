document.getElementById('add-task-button').addEventListener('click', addTaskFromInput);

document.getElementById('new-task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTaskFromInput();
    }
});

function addTaskFromInput() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;
    const reminderTime = document.getElementById('reminder-time').value;

    if (taskText) {
        addTask(taskText, reminderTime);
        taskInput.value = '';
        document.getElementById('reminder-time').value = '';
    }
}

function addTask(taskText, reminderTime) {
    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;

    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.addEventListener('click', function() {
        taskItem.classList.toggle('complete');
        stopAlarm();
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', function() {
        taskItem.remove();
        stopAlarm();
    });

    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    if (reminderTime) {
        setReminder(taskText, reminderTime);
    }
}

let alarmTimeout;

function setReminder(taskText, reminderTime) {
    const reminderDateTime = new Date(reminderTime).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = reminderDateTime - currentTime;

    if (timeDifference > 0) {
        alarmTimeout = setTimeout(() => {
            const alarmSound = document.getElementById('alarm-sound');
            alarmSound.play();
            alert(`Reminder: ${taskText}`);
        }, timeDifference);
    }
}

function stopAlarm() {
    clearTimeout(alarmTimeout);
    const alarmSound = document.getElementById('alarm-sound');
    alarmSound.pause();
    alarmSound.currentTime = 0;
}
