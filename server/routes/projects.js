import express from 'express';
import { 
    createProject, 
    getProjects, 
    getProject, 
    updateProject, 
    deleteProject 
} from '../controllers/projects.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/* READ */
router.get('/', getProjects);
router.get('/:id', getProject);

/* WRITE - PROTECTED */
router.post('/', verifyToken, createProject);
router.patch('/:id', verifyToken, updateProject);
router.delete('/:id', verifyToken, deleteProject);

export default router;
