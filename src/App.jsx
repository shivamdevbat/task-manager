import Heading from "./components/heading";
import Taskbar from "./components/taskbar";

function App() {
  return (
    <main className="bg-zinc-950 min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-between min-h-80 w-100 h-100 bg-zinc-800 border rounded-xl">
        <div className="flex-1 p-5">
          <Heading />
        </div>

        <div className="border-t border-zinc-500"></div>

        <div className="p-5">
          <Taskbar />
        </div>
      </div>
    </main>
  );
}

export default App;
