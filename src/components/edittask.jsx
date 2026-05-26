import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export default function TaskItem({ task, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editVal, setEditVal] = useState(task.title);

  function handleSave() {
    if (!editVal.trim()) return;
    onUpdate(task.id, editVal);
    setIsEditing(false);
  }

  return (
    <div className="flex justify-between items-center text-white text-sm mt-2 p-2 pl-6 border-b border-zinc-500 mx-5 last:border-b-0">
      {isEditing ? (
        <input
          className="bg-zinc-600 text-white text-sm p-1 rounded flex-1 outline-none"
          value={editVal}
          onChange={(e) => setEditVal(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          onBlur={handleSave}
          autoFocus
        />
      ) : (
        <p className="flex-1">{task.title}</p>
      )}

      <div className="flex gap-2 ml-2">
        <span onClick={() => setIsEditing(true)} className="cursor-pointer hover:text-emerald-400">
          <FaRegEdit />
        </span>
        <span onClick={() => onDelete(task.id)} className="cursor-pointer hover:text-red-400">
          <MdDeleteOutline />
        </span>
      </div>
    </div>
  );
}
