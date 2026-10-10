import express from 'express';
import { CommentControllers } from './comment.controller';

const router = express.Router();

router.post('/', CommentControllers.createComment);
router.get('/post/:postId', CommentControllers.getCommentsByPost);
router.delete('/:id', CommentControllers.deleteComment);

export const CommentRoutes = router;