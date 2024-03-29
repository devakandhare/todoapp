import { useState } from "react";
import "./App.css";

function App() {
  const [currentTask, setCurrentTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (event) => {
    event.preventDefault();
    setTasks((prevState) => [
      ...prevState,
      { text: currentTask, status: "NEW" },
    ]);
    setCurrentTask("");
  };

  return (
    <>
      <div className="main-container">
        <div className="task-container">
          <header>
            <h2>Todo Application</h2>
          </header>
          <div>
            <form onSubmit={addTask}>
              <div className="task-input">
                <input
                  type="text"
                  value={currentTask}
                  onChange={(event) => setCurrentTask(event.target.value)}
                />
                <button type="submit" className="btn">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.text}
              onClick={() => {
                setTasks((prevState) =>
                  prevState.map((theTask) => ({
                    ...theTask,
                    status:
                      theTask.text === task.text ? "COMPLETED" : task.status,
                  }))
                );
              }}
              style={
                task.status === "COMPLETED"
                  ? { textDecoration: "line-through" }
                  : {}
              }
            >
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
