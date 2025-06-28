import express from 'express';
import { createNote, getNotes } from '../controllers/noteController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createNote); // create a note
router.get('/', protect, getNotes);    // get all notes of logged-in user

export default router;
