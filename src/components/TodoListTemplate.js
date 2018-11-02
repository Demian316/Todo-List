import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({search, filter, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        Things To Do
      </div>
      <section className="search-wrapper">
        {search}
        {filter}
      </section>
      <section className="todos-wrapper">
        {children}
      </section>
    </main>
  );
};

export default TodoListTemplate;