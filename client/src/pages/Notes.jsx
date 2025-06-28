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
  const deleteNote = async (noteId) => {
  try {
    await API.delete(`/notes/${noteId}`);
    setNotes((prev) => prev.filter((n) => n._id !== noteId));
  } catch (err) {
    console.error(err);
    alert("Failed to delete note");
  }
};

const updateNote = async (noteId, updatedData) => {
  try {
    const res = await API.put(`/notes/${noteId}`, updatedData);
    setNotes((prev) =>
      prev.map((n) => (n._id === noteId ? res.data : n))
    );
  } catch (err) {
    console.error(err);
    alert("Failed to update note");
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
          <NoteCard key={note._id} note={note} onDelete={deleteNote} onEdit={updateNote} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
