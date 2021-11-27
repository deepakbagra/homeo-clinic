import express from 'express';
import { getPost } from '../controller/post.js';

const router = express.Router();

router.get('/', getPost);

export default router;
