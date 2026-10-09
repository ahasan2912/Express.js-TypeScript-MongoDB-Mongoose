import mongoose from 'mongoose';
import app from './app';
import config from './config';
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('MongoDB connected successfully');

    app.listen(config.port, () => {
      console.log(`Server is running on http://localhost:${config.port}`);
    });
  } catch (err) {
    console.error('Failed to connect database', err);
  }
}

main();