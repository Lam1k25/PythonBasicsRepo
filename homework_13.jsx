function UserCard({ user }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>Возраст: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

function App() {
  const users = [
    {
      name: "Анна",
      age: 25,
      email: "anna@example.com",
    },
    {
      name: "Иван",
      age: 30,
      email: "ivan@example.com",
    },
    {
      name: "Мария",
      age: 22,
      email: "maria@example.com",
    },
  ];

  return (
    <div>
      <h1>Список пользователей</h1>

      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}

export default App;
