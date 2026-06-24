function FruitList({ fruits }) {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  )
}

function App() {
  const fruits = ['Яблоко', 'Банан', 'Апельсин', 'Киви', 'Виноград']

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Домашнее задание: Рендеринг списков</h1>
      <FruitList fruits={fruits} />
    </div>
  )
}

export default App
