import React from 'react';

const NoteCard = ({ note }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-semibold">{note.title}</h2>
      <p className="text-gray-600 mt-2">{note.content}</p>
    </div>
  );
};

export default NoteCard;
