import express from 'express';
import { createMessage, getMessages } from '../controllers/messages.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/* PUBLIC */
router.post('/', createMessage);

/* PROTECTED */
router.get('/', verifyToken, getMessages);

export default router;
