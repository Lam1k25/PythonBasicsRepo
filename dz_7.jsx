import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";

function AuthMiddleware({ isAuthenticated, children }) {
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/?error=auth"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
}

function Home({ isAuthenticated, setIsAuthenticated }) {
  const location = useLocation();
  const error = new URLSearchParams(location.search).get("error");

  return (
    <div>
      <h1>Главная страница</h1>

      {error === "auth" && (
        <p style={{ color: "red" }}>
          Для доступа к этой странице требуется авторизация
        </p>
      )}

      {!isAuthenticated ? (
        <button onClick={() => setIsAuthenticated(true)}>Войти</button>
      ) : (
        <p>Вы уже авторизованы</p>
      )}
    </div>
  );
}

function Profile() {
  return <h1>Профиль: доступ разрешён</h1>;
}

function Settings() {
  return <h1>Настройки: доступ разрешён</h1>;
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
        />

        <Route
          path="/profile"
          element={
            <AuthMiddleware isAuthenticated={isAuthenticated}>
              <Profile />
            </AuthMiddleware>
          }
        />

        <Route
          path="/settings"
          element={
            <AuthMiddleware isAuthenticated={isAuthenticated}>
              <Settings />
            </AuthMiddleware>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
