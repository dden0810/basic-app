// Initial Setup for a React App
import React, { useState } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const addProject = (name) => {
    const newProject = { id: Date.now(), name, tasks: [] };
    setProjects([...projects, newProject]);
  };

  const addTask = (projectId, taskName) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId) {
        const newTask = { id: Date.now(), name: taskName, completed: false };
        return { ...project, tasks: [...project.tasks, newTask] };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  const toggleTaskCompletion = (projectId, taskId) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId) {
        const updatedTasks = project.tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
        return { ...project, tasks: updatedTasks };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  return (
    <div className="App">
      <header>
        <h1>Asana Clone</h1>
      </header>

      <main>
        <section className="project-section">
          <h2>Projects</h2>
          <ul>
            {projects.map((project) => (
              <li key={project.id} onClick={() => setSelectedProject(project)}>
                {project.name}
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="New Project Name"
            onKeyDown={(e) => {
              if (e.key === 'Enter') addProject(e.target.value);
            }}
          />
        </section>

        <section className="task-section">
          {selectedProject ? (
            <>
              <h2>Tasks for {selectedProject.name}</h2>
              <ul>
                {selectedProject.tasks.map((task) => (
                  <li key={task.id}>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTaskCompletion(selectedProject.id, task.id)}
                    />
                    {task.name}
                  </li>
                ))}
              </ul>
              <input
                type="text"
                placeholder="New Task Name"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') addTask(selectedProject.id, e.target.value);
                }}
              />
            </>
          ) : (
            <p>Select a project to see tasks</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
