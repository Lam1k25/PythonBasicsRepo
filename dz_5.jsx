import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
const API = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [title, setTitle] = useState("");
  const [localTodos, setLocalTodos] = useState([]);
  const queryClient = useQueryClient();

  const {
    data: todos = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await axios.get(API + "?_limit=10");
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (todo) => {
      const res = await axios.post(API, todo);
      return res.data;
    },
    onSuccess: (newTodo) => {
      // jsonplaceholder не сохраняет данные,
      // поэтому добавляем задачу локально
      setLocalTodos((prev) => [
        { ...newTodo, id: Date.now(), completed: false },
        ...prev,
      ]);

      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });

      setTitle("");
    },
  });

  const addTodo = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    mutation.mutate({
      title,
      completed: false,
      userId: 1,
    });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial" }}>
      <h1>React Query: Todo List</h1>

      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Название задачи"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Добавление..." : "Добавить"}
        </button>
      </form>

      {mutation.isError && (
        <p style={{ color: "red" }}>
          Ошибка добавления: {mutation.error.message}
        </p>
      )}

      {isLoading && <p>Загрузка...</p>}

      {isError && (
        <p style={{ color: "red" }}>
          Ошибка: {error.message}
        </p>
      )}

      <ul>
        {[...localTodos, ...todos].map((todo) => (
          <li key={todo.id}>
            {todo.completed ? "✅" : "❌"} {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
