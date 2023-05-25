let todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) { // if the todos array incudes the input task
    console.log('That task is already on the list.'); // log that task...to the console.
  } else { // if not, pus it to todo array
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) { // while the length of todo array is greater than zero and tasksComplete is less than n
    console.log(`${todos[0]} complete!`); // log the first task as complete...
    todos.splice(0, 1); //delete the first task...                                               PROBLEM HERE
    tasksComplete++; //increment the complete tasks up by 1
  }

  if (todos.length === 0) { // if the length of the todo array is 0
    console.log('All tasks complete!'); // log all tasks complete
  } else { // if not log the tasks completed and tasks remaining
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {

  console.log(`ToDo list (${todos.length} tasks):`); // log the amount of tasks
  console.log('---------------------');

  for (let idx = 0; idx < todos.length; idx++) { // log all the remaining tasks one by one
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();