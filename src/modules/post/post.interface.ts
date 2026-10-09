export interface IPost {
  title: string;
  content: string;
  author: string;
  category: string;
  tags?: string[];
  isPublished: boolean;
}