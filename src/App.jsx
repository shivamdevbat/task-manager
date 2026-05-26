import Heading from "./components/heading";
import Taskbar from "./components/taskbar";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTask] = useState([]);

  function addTask() {
    if (!input.trim()) return;

    setTask([...tasks, { id: Date.now(), title: input, label: "" }]);
    setInput("");
  }

  function deleteTask(id) {
    setTask(tasks.filter((task) => task.id !== id));
  }
  return (
    <main className="bg-zinc-950 min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-between w-full max-w-md min-h-175 bg-zinc-700 border rounded-xl">
        <div className="flex-1 p-5">
          <Heading />
        </div>
        {tasks.map((task) => (
          <div>
            <p
              key={task.id}
              className={`flex justify-between text-white text-sm mt-2 p-2 pl-6  border-b border-zinc-500 mx-5 `}
            >
              {task.title}{" "}
              <div className="flex gap-2">
                <span>
                  <FaRegEdit />
                </span>
                <span onClick={() => deleteTask(task.id)} className="cursor-pointer">
                  <MdDeleteOutline />
                </span>
              </div>
            </p>
          </div>
        ))}
        <div className="border-t border-zinc-500"></div>

        <div className="p-5">
          <Taskbar input={input} setInput={setInput} addTask={addTask} />
        </div>
      </div>
    </main>
  );
}

export default App;
