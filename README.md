# 📝 Blog Post REST API (Express.js + TypeScript)

A clean, modular, and scalable Backend RESTful API for managing blog posts, built with **Express.js**, **TypeScript**, **Mongoose**, and **MongoDB Atlas / Compass**. Built with **ES Modules (`"module": "NodeNext"`)** for modern Node.js execution.

---

## 🚀 Features

- **Modular Architecture**: Feature-based folder structure (Interface, Model, Service, Controller, Route).
- **TypeScript & ES Modules**: Fully typed codebase utilizing native ES Module imports (`import/export`).
- **CRUD Operations**: Complete functionality to Create, Read, Update, and Delete blog posts.
- **Database Integration**: Powered by Mongoose with cloud storage on MongoDB Atlas and GUI inspection via MongoDB Compass.
- **Environment Configuration**: Secure environment variable management via `dotenv`.

---

## 📁 Project Structure

```text
blog-backend/
├── src/
│   ├── app/
│   │   ├── config/
│   │   │   └── index.ts            # Environment configurations
│   │   └── modules/
│   │       └── post/              # Blog Post feature module
│   │           ├── post.interface.ts # TypeScript interfaces
│   │           ├── post.model.ts     # Mongoose schema and model
│   │           ├── post.service.ts   # Business and database logic
│   │           ├── post.controller.ts# Request & Response handling
│   │           └── post.route.ts     # Express endpoints routing
│   ├── app.ts                      # Express app setup & middleware
│   └── server.ts                   # Database connection & server entry
├── .env.example                    # Sample environment variables
├── package.json
├── tsconfig.json
└── README.md
