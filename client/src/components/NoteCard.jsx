import React, { useState } from "react";

const NoteCard = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedNote, setUpdatedNote] = useState({
    title: note.title,
    content: note.content,
  });

  const handleChange = (e) => {
    setUpdatedNote({ ...updatedNote, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onEdit(note._id, updatedNote);
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition relative">
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={updatedNote.title}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
          />
          <textarea
            name="content"
            value={updatedNote.content}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-3 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
          <p className="text-gray-700">{note.content}</p>
          <p className="text-sm text-gray-400 mt-4">
            {new Date(note.createdAt).toLocaleString()}
          </p>
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
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
        </>
      )}
    </div>
  );
};

export default NoteCard;
