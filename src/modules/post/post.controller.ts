import { Request, Response } from 'express';
import { PostServices } from './post.service';


const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostServices.createPostIntoDB(req.body);

    res.status(201).json({
      success: true,
      message: 'Post created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const result = await PostServices.getAllPostsFromDB();

    res.status(200).json({
      success: true,
      message: 'Posts retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getSinglePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await PostServices.getSinglePostFromDB(id as string);

    if (!result) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Post retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await PostServices.updatePostInDB(id as string, req.body);

    if (!result) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Post updated successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await PostServices.deletePostFromDB(id as string);

    if (!result) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Post deleted successfully',
      data: null,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const PostControllers = {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
};