export default function Taskbar() {
  return (
    <div className="flex items-center gap-2 w-full">
      <input
        className="flex-1 border px-4 py-2.5 pl-6  bg-zinc-600 rounded-xl text-sm"
        placeholder="Add a new task......"
      />
      <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl">+</button>
    </div>
  );
}
