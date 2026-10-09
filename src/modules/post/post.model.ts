import mongoose, { model } from "mongoose";
import { IPost } from "./post.interface";

const postSchema = new mongoose.Schema<IPost>(
    {
        title: { type: String, required: true, trim: true },
        content: { type: String, required: true },
        author: { type: String, required: true, trim: true },
        category: { type: String, required: true, trim: true },
        tags: [{ type: String }],
        isPublished: { type: Boolean, default: true },
    },
    {
        timestamps: true,
    }
);

export const Post = model<IPost>('Post', postSchema);