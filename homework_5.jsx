import React from 'react'

let clickCount = 0

function handleClick() {
  clickCount++
  console.log('Нажатий:', clickCount)
}

function handleChange(event) {
  console.log('Имя:', event.target.value)
}

function handleMouseOver() {
  console.log('Мышь наведена!')
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Обработка событий в React</h2>

      
      <button onClick={handleClick}>
        Нажми меня
      </button>
      <p>Количество нажатий смотрите в консоли</p>

      
      <input
        type="text"
        placeholder="Введите имя"
        onChange={handleChange}
      />
      <p>Смотрите имя в консоли</p>

     
      <div
        onMouseOver={handleMouseOver}
        style={{
          backgroundColor: 'lightblue',
          padding: '20px',
          marginTop: '20px',
          width: '200px',
          textAlign: 'center',
          cursor: 'pointer'
        }}
      >
        Наведи на меня
      </div>
    </div>
  )
}

