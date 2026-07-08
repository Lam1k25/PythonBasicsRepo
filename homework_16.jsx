import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function UserPanel() {
  const { user, login, logout } = useContext(AuthContext);
  const [name, setName] = useState("");

  return (
    <div style={{ border: "1px solid gray", padding: "10px", width: "300px" }}>
      <h3>Панель пользователя</h3>

      {user ? (
        <>
          <p>Привет, {user}!</p>
          <button onClick={logout}>Выйти</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Введите имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => login(name)}>Войти</button>
        </>
      )}
    </div>
  );
}

function Level3() {
  return <UserPanel />;
}

function Level2() {
  return <Level3 />;
}

function Level1() {
  return <Level2 />;
}

function App() {
  const [user, setUser] = useState("");

  const login = (name) => {
    if (name.trim() !== "") {
      setUser(name);
    }
  };

  const logout = () => {
    setUser("");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div style={{ padding: "20px" }}>
        <h1>Главная страница</h1>
        <Level1 />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
