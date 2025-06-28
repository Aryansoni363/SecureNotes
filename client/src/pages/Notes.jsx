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

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};




  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="flex justify-between items-center mb-4">
  <h1 className="text-3xl font-bold">📝 My Notes</h1>
  <button
    onClick={handleLogout}
    className="bg-red-500 text-white px-4 py-1 rounded"
  >
    Logout
  </button>
</div>

  );
};

export default Notes;
