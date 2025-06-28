import React from "react";

const NoteCard = ({ note }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
      <p className="text-gray-700">{note.content}</p>
      <p className="text-sm text-gray-400 mt-4">
        {new Date(note.createdAt).toLocaleString()}
      </p>
    </div>
  );
};

export default NoteCard;
