import React, { useState } from "react";
import { produce } from "immer";

export default function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Frontend",
      tasks: [
        {
          id: 1,
          text: "Code custom hook",
          completed: false,
        },
      ],
    },
  ]);

  const [projectName, setProjectName] = useState("");
  const [selectedProject, setSelectedProject] = useState(1);
  const [taskText, setTaskText] = useState("");

  // Добавление проекта
  const addProject = () => {
    if (!projectName.trim()) return;

    setProjects(
      produce((draft) => {
        draft.push({
          id: Date.now(),
          name: projectName,
          tasks: [],
        });
      })
    );

    setProjectName("");
  };

  // Добавление задачи
  const addTask = () => {
    if (!taskText.trim()) return;

    setProjects(
      produce((draft) => {
        const project = draft.find(
          (p) => p.id === Number(selectedProject)
        );

        if (project) {
          project.tasks.push({
            id: Date.now(),
            text: taskText,
            completed: false,
          });
        }
      })
    );

    setTaskText("");
  };

  // Отметить выполненной
  const toggleTask = (projectId, taskId) => {
    setProjects(
      produce((draft) => {
        const project = draft.find((p) => p.id === projectId);

        if (project) {
          const task = project.tasks.find((t) => t.id === taskId);

          if (task) {
            task.completed = !task.completed;
          }
        }
      })
    );
  };

  // Удаление задачи
  const deleteTask = (projectId, taskId) => {
    setProjects(
      produce((draft) => {
        const project = draft.find((p) => p.id === projectId);

        if (project) {
          project.tasks = project.tasks.filter(
            (task) => task.id !== taskId
          );
        }
      })
    );
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Управление проектами с Immer</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Название проекта"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <button
          onClick={addProject}
          style={{ marginLeft: 10 }}
        >
          Добавить проект
        </button>
      </div>

      <div style={{ marginBottom: 20 }}>
        <select
          value={selectedProject}
          onChange={(e) => setSelectedProject(Number(e.target.value))}
        >
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: 30 }}>
        <input
          type="text"
          placeholder="Новая задача"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />

        <button
          onClick={addTask}
          style={{ marginLeft: 10 }}
        >
          Добавить задачу
        </button>
      </div>

      {projects.map((project) => (
        <div
          key={project.id}
          style={{
            border: "1px solid #ccc",
            padding: 15,
            marginBottom: 20,
          }}
        >
          <h2>{project.name}</h2>

          {project.tasks.length === 0 ? (
            <p>Нет задач</p>
          ) : (
            <ul>
              {project.tasks.map((task) => (
                <li key={task.id} style={{ marginBottom: 10 }}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() =>
                      toggleTask(project.id, task.id)
                    }
                  />

                  <span
                    style={{
                      marginLeft: 8,
                      textDecoration: task.completed
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {task.text}
                  </span>

                  <button
                    style={{ marginLeft: 10 }}
                    onClick={() =>
                      deleteTask(project.id, task.id)
                    }
                  >
                    Удалить
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
