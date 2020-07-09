/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './TodoListItem.css';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => (
  <li>
    <label className={todo.complete ? 'complete' : undefined}>
      <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
      {todo.text}
    </label>
  </li>
);
