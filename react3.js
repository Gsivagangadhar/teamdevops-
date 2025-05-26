import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task" />
      <button onClick={addTask}>Add</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
