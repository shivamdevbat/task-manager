export default function Heading() {
  const d = new Date();
  const weekday = d.toLocaleDateString("en-US", { weekday: "short" });
  const day = d.getDate();
  const month = d.toLocaleDateString("en-US", { month: "short" });
  const formatted = `${weekday},${day} ${month}`;
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl text-white">My Tasks</h1>
      <p className="text-sm text-zinc-500">{formatted}</p>
    </div>
  );
}
