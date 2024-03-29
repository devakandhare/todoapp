import { useState } from "react";
import "./App.css";

function App() {
  const [currentTask, setCurrentTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (event) => {
    event.preventDefault();
    setTasks((prevState) => [
      { text: currentTask, status: "NEW" },
      ...prevState,
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
            <div className="task" key={task.text}>
              <li
                style={
                  task.status === "COMPLETED"
                    ? { textDecoration: "line-through" }
                    : {}
                }
              >
                {task.text}
              </li>
              <input
                type="checkbox"
                value={task.text}
                onChange={(event) => {
                  setTasks((prevState) =>
                    prevState.map((theTask) => ({
                      ...theTask,
                      status:
                        theTask.text === event.target.value
                          ? event.target.checked
                            ? "COMPLETED"
                            : "PENDING"
                          : theTask.status,
                    }))
                  );
                }}
              />
            </div>
          ))}
        </ul>
        <button
          className="btn"
          onClick={() => {
            setTasks((prevTasks) =>
              prevTasks.filter((theTask) => theTask.status !== "COMPLETED")
            );
          }}
        >
          Clear Completed Tasks
        </button>
      </div>
    </>
  );
}

export default App;
