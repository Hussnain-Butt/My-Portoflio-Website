import express from 'express';
import { login, register } from '../controllers/auth.js';

const router = express.Router();

router.post('/login', login);
// Keep register route open initially to create the first admin, then you can comment it out or protect it.
router.post('/register', register); 

export default router;
