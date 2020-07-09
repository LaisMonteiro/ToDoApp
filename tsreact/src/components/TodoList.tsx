/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map((todo) => (
      <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
    ))}
  </ul>
);
