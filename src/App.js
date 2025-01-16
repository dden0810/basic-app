// Initial Setup for a React App
import React, { useState } from 'react';
import './App.css';

//function declaration -- This defines the app component into the DOM.  Under the return is what Displays on the page.
function App() {
  //empty arrays and a useState started null
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  //This shit below is all fucked up so lets fix it first and then finish comments
  const addProject = (event_object_users_input) => {
    const newProject = { id: Date.now(), event_object_users_input, tasks: [] };
    setProjects([...projects, newProject]);
  };

  const addTask = (projectId, taskName) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId) {
        const newTask = { id: Date.now(), event_object_users_input: taskName, completed: false };
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
                {project.event_object_users_input}
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="New Project Name"
            onKeyDown={(event_object_users_input) => {
              if (event_object_users_input.key === 'Enter') addProject(event_object_users_input.target.value);
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
                    {task.event_object_users_input}
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
