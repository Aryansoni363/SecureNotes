import React, { useState } from 'react';
import NoteCard from '../components/NoteCard';
import NoteForm from '../components/NoteForm';

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'My First Note',
      content: 'This is a sample note.',
    },
  ]);

  const handleAddNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">📝 My Notes</h1>
      <NoteForm onAdd={handleAddNote} />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-6">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
