import React, { useState } from 'react';

const NoteForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const newNote = {
      id: Date.now(), // Temporary ID for now
      title,
      content,
    };

    onAdd(newNote);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-4 mb-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">➕ Add New Note</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2 mb-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        className="w-full border p-2 mb-4 rounded"
        rows="4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Save Note
      </button>
    </form>
  );
};

export default NoteForm;
