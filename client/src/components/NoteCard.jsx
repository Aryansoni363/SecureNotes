import React from "react";

const NoteCard = ({ note, onDelete, onEdit }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition relative">
      <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
      <p className="text-gray-700">{note.content}</p>
      <p className="text-sm text-gray-400 mt-4">
        {new Date(note.createdAt).toLocaleString()}
      </p>

      <div className="absolute top-2 right-2 flex gap-2">
        <button
          onClick={() => onEdit(note)}
          className="text-blue-500 hover:underline text-sm"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => onDelete(note._id)}
          className="text-red-500 hover:underline text-sm"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
