import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function App() {
  const [showAll, setShowAll] = useState(false);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return res.data;
    },
  });

  if (isLoading) return <h2>Загрузка...</h2>;

  if (isError) return <h2>Ошибка: {error.message}</h2>;

  const posts = showAll ? data : data.slice(0, 5);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Query: Загрузка постов</h1>

      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "Показать первые 5" : "Показать все"}
      </button>

      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "20px" }}>
            <h3>{post.title}</h3>
            <p>
              {post.body.length > 100
                ? post.body.slice(0, 100) + "..."
                : post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
