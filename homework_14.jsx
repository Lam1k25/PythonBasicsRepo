import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Главная страница</h1>;
}

function About() {
  return <h1>О нас</h1>;
}

function Contacts() {
  return <h1>Контакты</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          padding: "20px",
          fontFamily: "Arial",
        }}
      >
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px" }}>
            Главная
          </Link>

          <Link to="/about" style={{ marginRight: "15px" }}>
            О нас
          </Link>

          <Link to="/contacts">
            Контакты
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
