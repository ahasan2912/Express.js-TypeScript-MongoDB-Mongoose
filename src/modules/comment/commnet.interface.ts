import { Types } from 'mongoose';

export interface IComment {
  postId: Types.ObjectId;
  user: string;
  comment: string;
}