import React, { useState } from "react";

const NoteForm = ({ onAdd }) => {
  const [form, setForm] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.content) return alert("Fill all fields");
    onAdd(form);
    setForm({ title: "", content: "" }); // Reset form
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md max-w-xl mx-auto"
    >
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="w-full mb-3 p-2 border rounded"
        value={form.title}
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="Content"
        className="w-full mb-3 p-2 border rounded"
        value={form.content}
        onChange={handleChange}
        rows={4}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        ➕ Add Note
      </button>
    </form>
  );
};

export default NoteForm;
