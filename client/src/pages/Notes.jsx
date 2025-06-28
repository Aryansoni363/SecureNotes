import React, { useState, useEffect } from 'react';
import API from '../utils/api';
import NoteCard from '../components/NoteCard';
import NoteForm from '../components/NoteForm';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const res = await API.get('/notes');
      setNotes(res.data);
    } catch (err) {
      console.error("Error fetching notes:", err);
    }
  };

  const handleAddNote = async (newNote) => {
    try {
      const res = await API.post('/notes', newNote);
      setNotes([res.data, ...notes]);
    } catch (err) {
      console.error("Error adding note:", err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">📝 My Notes</h1>
      <NoteForm onAdd={handleAddNote} />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-6">
        {notes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
