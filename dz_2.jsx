import React, {
  useReducer,
  useState,
  useRef,
  useEffect,
  memo,
} from "react";

// ---------------- Reducer ----------------
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter((contact) => contact.id !== action.payload);

    default:
      return state;
  }
};

// ---------------- ContactList ----------------
const ContactList = memo(({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id} style={{ marginBottom: "10px" }}>
          {contact.name} — {contact.phone}
          <button
            onClick={() => onDelete(contact.id)}
            style={{ marginLeft: "10px" }}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
});

// ---------------- App ----------------
export default function App() {
  const [contacts, dispatch] = useReducer(reducer, []);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const addContact = () => {
    if (!name.trim() || !phone.trim()) {
      setError("Введите имя и телефон!");
      return;
    }

    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        name,
        phone,
      },
    });

    setName("");
    setPhone("");
    setError("");
  };

  const deleteContact = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Контакты</h1>

      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <button
        onClick={addContact}
        style={{ marginLeft: "10px" }}
      >
        Добавить контакт
      </button>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      <br />
      <br />

      <input
        ref={searchRef}
        type="text"
        placeholder="Поиск контакта"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ContactList
        contacts={filteredContacts}
        onDelete={deleteContact}
      />
    </div>
  );
}
