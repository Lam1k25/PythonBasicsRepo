import React, { useState, useCallback, memo } from "react";

const AddTodo = memo(({ onAdd }) => {
  console.log("AddTodo");

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите задачу"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
});

function TodoList({ todos }) {
  console.log("TodoList");

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

export default function App() {
  console.log("App");

  const [todos, setTodos] = useState([
    "Купить хлеб",
    "Сделать домашнее задание",
  ]);

  const addTodo = useCallback((text) => {
    setTodos((prev) => [...prev, text]);
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>Virtual DOM и React Developer Tools</h2>

      <AddTodo onAdd={addTodo} />

      <TodoList todos={todos} />
    </div>
  );
}
