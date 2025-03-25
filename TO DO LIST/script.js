document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        var taskList = document.getElementById('taskList');
        var listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="completeBtn">Complete</button>
            <button class="deleteBtn">Delete</button>
        `;
        
        taskList.appendChild(listItem);
        taskInput.value = '';
        
        listItem.querySelector('.completeBtn').addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });
        
        listItem.querySelector('.deleteBtn').addEventListener('click', function() {
            listItem.remove();
        });
    }
});
