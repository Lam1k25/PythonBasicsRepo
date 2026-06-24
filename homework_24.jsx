import { useState } from "react";

function useCounter(initialValue, step = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Домашнее задание: useCounter</h1>

      <p>Текущее значение: {count}</p>

      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Уменьшить
      </button>
      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Сбросить
      </button>
    </div>
  );
}

export default App;
