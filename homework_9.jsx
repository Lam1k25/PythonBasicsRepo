import { useState } from 'react'

function UserCard({ name, age, color }) {
  console.log('Ререндер UserCard')

  return (
    <div
      style={{
        backgroundColor: color,
        padding: '20px',
        width: '300px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        marginTop: '20px',
      }}
    >
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
    </div>
  )
}

function App() {
  const [age, setAge] = useState(29)
  const [color, setColor] = useState('lightgreen')

  const changeAge = () => {
    setAge(age + 1)
  }

  const changeColor = () => {
    setColor(color === 'lightgreen' ? 'lightblue' : 'lightgreen')
  }

  return (
    <div>
      <h1>Домашнее задание: Props и ререндеринг</h1>

      <button onClick={changeAge}>Изменить возраст</button>
      <button onClick={changeColor}>Изменить цвет карточки</button>

      <UserCard
        name="Иван Петров"
        age={age}
        color={color}
      />
    </div>
  )
}

export default App
