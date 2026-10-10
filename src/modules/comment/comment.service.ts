import { Comment } from "./comment.model";
import { IComment } from "./commnet.interface";

const addCommentIntoDB = async (payload: IComment) => {
  const result = await Comment.create(payload);
  return result;
};

const getCommentsByPostIdFromDB = async (postId: string) => {
  const result = await Comment.find({ postId }).sort({ createdAt: -1 });
  return result;
};

const deleteCommentFromDB = async (id: string) => {
  const result = await Comment.findByIdAndDelete(id);
  return result;
};

export const CommentServices = {
  addCommentIntoDB,
  getCommentsByPostIdFromDB,
  deleteCommentFromDB,
};