import { useReducer, useState } from "react";

const initialUsers = [
  { id: 1, name: "Иван", active: true },
  { id: 2, name: "Мария", active: false },
  { id: 3, name: "Алексей", active: true },
];

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return state.map((user) =>
        user.id === action.payload.id
          ? { ...user, name: action.payload.name }
          : user
      );

    case "TOGGLE_ACTIVE":
      return state.map((user) =>
        user.id === action.payload
          ? { ...user, active: !user.active }
          : user
      );

    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload);

    default:
      return state;
  }
}

function App() {
  const [users, dispatch] = useReducer(reducer, initialUsers);
  const [newNames, setNewNames] = useState({});

  const handleInputChange = (id, value) => {
    setNewNames({
      ...newNames,
      [id]: value,
    });
  };

  const saveName = (id) => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        id,
        name: newNames[id] || "",
      },
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Список пользователей</h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            color: user.active ? "green" : "gray",
          }}
        >
          <h3>{user.name}</h3>
          <p>
            Статус: {user.active ? "Активен" : "Неактивен"}
          </p>

          <input
            type="text"
            placeholder="Новое имя"
            value={newNames[user.id] || ""}
            onChange={(e) =>
              handleInputChange(user.id, e.target.value)
            }
          />

          <button onClick={() => saveName(user.id)}>
            Сохранить
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "TOGGLE_ACTIVE",
                payload: user.id,
              })
            }
            style={{ marginLeft: "10px" }}
          >
            Сменить статус
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "DELETE_USER",
                payload: user.id,
              })
            }
            style={{ marginLeft: "10px" }}
          >
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
