/* eslint-disable jsx-quotes */
/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/jsx-fragments */
import React, { useState } from 'react';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';
import './App.scss';

const initialTodos: Array<Todo> = [{ text: 'Write a to-do list', complete: false }];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== '' && setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <div className="App">
      <React.Fragment>
        <h1>Write here:</h1>
        <AddTodoForm addTodo={addTodo} />
        <h1>My list</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </React.Fragment>
    </div>
  );
};
export default App;
