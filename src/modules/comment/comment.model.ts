import { Schema, model } from 'mongoose';
import { IComment } from './commnet.interface';

const commentSchema = new Schema<IComment>(
  {
    postId: { 
      type: Schema.Types.ObjectId, 
      ref: 'Post',  // Reference to the Post model
      required: true 
    },
    user: { 
      type: String, 
      required: true, 
      trim: true 
    },
    comment: { 
      type: String, 
      required: true 
    },
  },
  {
    timestamps: true,
  }
);

export const Comment = model<IComment>('Comment', commentSchema);