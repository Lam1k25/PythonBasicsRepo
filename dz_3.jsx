import React from "react";

export default function UserList() {
  const users = [
    "Иван Иванов",
    "Мария Смирнова",
    "Алексей Кузнецов",
    "Анна Петрова",
  ];

  return (
    <div>
      <h2>Список пользователей</h2>

      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
