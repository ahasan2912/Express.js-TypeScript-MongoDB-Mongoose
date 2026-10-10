import { Request, Response } from 'express';
import { CommentServices } from './comment.service';

const createComment = async (req: Request, res: Response) => {
  try {
    const result = await CommentServices.addCommentIntoDB(req.body);

    res.status(201).json({
      success: true,
      message: 'Comment added successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getCommentsByPost = async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    const result = await CommentServices.getCommentsByPostIdFromDB(postId as string);

    res.status(200).json({
      success: true,
      message: 'Comments retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await CommentServices.deleteCommentFromDB(id as string);

    if (!result) {
      return res.status(404).json({ success: false, message: 'Comment not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Comment deleted successfully',
      data: null,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const CommentControllers = {
  createComment,
  getCommentsByPost,
  deleteComment,
};