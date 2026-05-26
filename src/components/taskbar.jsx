export default function Taskbar({ input, setInput, addTask }) {
  return (
    <div>
      <div className="flex items-center gap-2 w-full">
        <input
          className="flex-1 border px-4 py-2.5 pl-6  bg-zinc-600 rounded-xl text-sm"
          placeholder="Add a new task......"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            console.log(e.target.value);
          }}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl" onClick={addTask}>
          +
        </button>
      </div>
    </div>
  );
}
