import express from 'express';
import { createNote, getNotes , deleteNote , updateNote} from '../controllers/noteController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createNote); // create a note
router.delete('/:id', protect, deleteNote); // delete a note
router.put('/:id', protect, updateNote); // update a note
router.get('/', protect, getNotes);    // get all notes of logged-in user

export default router;
