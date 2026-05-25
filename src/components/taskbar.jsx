export default function Taskbar() {
  return (
    <div className="flex items-center gap-2 w-full">
      <input className="flex-1 border p-2  pl-6  bg-zinc-600 rounded-xl" placeholder="Add a new task......" />
      <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl">+</button>
    </div>
  );
}
