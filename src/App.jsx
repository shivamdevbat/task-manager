import { useState } from "react";
import Heading from "./components/heading";
import Taskbar from "./components/taskbar";
import TaskItem from "./components/edittask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function addTask() {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: input }]);
    setInput("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function updateTask(id, newTitle) {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title: newTitle } : task)));
  }

  return (
    <main className="bg-zinc-950 min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-between w-full max-w-md min-h-175 bg-zinc-700 border rounded-xl">
        <div className="flex-1 p-5">
          <Heading />
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onUpdate={updateTask} onDelete={deleteTask} />
          ))}
        </div>

        <div className="border-t border-zinc-500"></div>

        <div className="p-5">
          <Taskbar input={input} setInput={setInput} addTask={addTask} />
        </div>
      </div>
    </main>
  );
}

export default App;
