import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  const addTask = () => {
    if (!text.trim()) return

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ])

    setText('')
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length

  return (
    <div>
      <h2>Todo List</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите задачу"
      />
      <button onClick={addTask}>Добавить</button>

      <p>
        Выполнено {completedCount} из {tasks.length}
      </p>

      {tasks.length === 0 ? (
        <p>Нет задач</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              {task.text}
              <button onClick={() => deleteTask(task.id)}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
