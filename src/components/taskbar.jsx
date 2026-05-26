export default function Taskbar({ input, setInput, addTask }) {
  return (
    <div className="flex items-center gap-2 w-full">
      <input
        className="flex-1 border px-4 py-2.5 bg-zinc-600 rounded-xl text-sm text-white outline-none placeholder:text-zinc-400"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <button className="bg-emerald-600 text-white px-4 py-2.5 rounded-xl hover:bg-emerald-700" onClick={addTask}>
        +
      </button>
    </div>
  );
}
