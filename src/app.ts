import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { PostRoutes } from './modules/post/post.route';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application Routes
app.use('/api/v1/posts', PostRoutes);

// Root Health Check Route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Blog Backend API running successfully!',
  });
});

export default app;