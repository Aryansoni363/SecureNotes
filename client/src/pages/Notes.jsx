import React, { useState } from 'react';
import NoteCard from '../components/NoteCard';

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'My First Note',
      content: 'This is a sample note.',
    },
    {
      id: 2,
      title: 'React Learning',
      content: 'Today I learned about components and state!',
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📝 My Notes</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
