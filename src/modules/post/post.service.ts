import { IPost } from "./post.interface";
import { Post } from "./post.model";

const createPostIntoDB = async (payload: IPost) => {
  const result = await Post.create(payload);
  return result;
};

const getAllPostsFromDB = async () => {
  const result = await Post.find();
  return result;
};

const getSinglePostFromDB = async (id: string) => {
  const result = await Post.findById(id);
  return result;
};

const updatePostInDB = async (id: string, payload: Partial<IPost>) => {
  const result = await Post.findByIdAndUpdate(id, payload, {
    returnDocument: 'after'
  });
  return result;
};

const deletePostFromDB = async (id: string) => {
  const result = await Post.findByIdAndDelete(id);
  return result;
};

export const PostServices = {
  createPostIntoDB,
  getAllPostsFromDB,
  getSinglePostFromDB,
  updatePostInDB,
  deletePostFromDB,
};