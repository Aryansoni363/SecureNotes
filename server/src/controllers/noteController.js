import Note from '../models/Note.js';

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.create({ title, content, userId: req.userId });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create note' });
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch notes' });
  }
};
export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!note) return res.status(404).json({ message: "Note not found" });

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete note" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { title, content },
      { new: true }
    );

    if (!note) return res.status(404).json({ message: "Note not found" });

    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ message: "Failed to update note" });
  }
};
