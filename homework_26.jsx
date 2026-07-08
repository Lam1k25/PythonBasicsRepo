import React, { useReducer, useState, useRef, useEffect, memo } from "react";

const initialState = {
  contacts: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        contacts: [...state.contacts, action.payload],
      };

    case "DELETE":
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

function ContactForm({ dispatch }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const addContact = () => {
    if (name.trim() === "" || phone.trim() === "") {
      setError("Заполните имя и телефон!");
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

  return (
    <div>
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
      />

      <button onClick={addContact}>Добавить контакт</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

function SearchBar({ search, setSearch, inputRef }) {
  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Поиск контакта"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

const ContactList = memo(function ContactList({
  contacts,
  dispatch,
}) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} — {contact.phone}

          <button
            onClick={() =>
              dispatch({
                type: "DELETE",
                payload: contact.id,
              })
            }
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [search, setSearch] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const filteredContacts = state.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Контакты</h1>

      <ContactForm dispatch={dispatch} />

      <br />

      <SearchBar
        search={search}
        setSearch={setSearch}
        inputRef={inputRef}
      />

      <ContactList
        contacts={filteredContacts}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
