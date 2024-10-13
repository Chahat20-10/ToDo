document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const todoForm = document.getElementById('todoForm');

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${task}</span>
            <div>
                <button class="complete-btn">✔</button>
                <button class="delete-btn">✖</button>
            </div>
        `;
        taskList.appendChild(taskItem);

        // Trigger animation
        setTimeout(() => {
            taskItem.style.opacity = '1';
            taskItem.style.transform = 'translateY(0)';
        }, 10);

        // Mark task as completed
        taskItem.querySelector('.complete-btn').addEventListener('click', function () {
            taskItem.classList.toggle('completed');
        });

        // Delete task
        taskItem.querySelector('.delete-btn').addEventListener('click', function () {
            taskItem.style.opacity = '0';
            taskItem.style.transform = 'translateY(20px)';
            setTimeout(() => {
                taskItem.remove();
            }, 300);
        });
    }
});
