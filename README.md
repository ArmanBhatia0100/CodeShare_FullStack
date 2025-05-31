# NoteCode - Code Sharing App

NoteCode is a fullstack web application that allows users to create, save, and share coding snippets with unique URLs. This project is designed to help developers practice and demonstrate their skills in both frontend and backend development.

## 🚀 Features

- Create, edit, and share code snippets
- Unique ID generation for each shared snippet
- Choose language and theme for code editing
- Responsive design for all devices
- No authentication required

## 🛠️ Tech Stack

**Frontend:**
- React
- Monaco Editor / CodeMirror / Ace Editor
- Zustand, useState, useEffect for state management
- Tailwind CSS (or styled-components/CSS)

**Backend:**
- Node.js with Express.js (or Next.js)
- MongoDB or PostgreSQL
- UUID for unique ID generation

## 📦 Getting Started

### Prerequisites

- Node.js & npm
- (If using MongoDB/PostgreSQL) A running database instance

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/NoteCode.git
   cd NoteCode
   ```

2. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the backend directory for your database connection string and other secrets.

4. **Run the development servers:**
   - **Backend:**
     ```bash
     cd backend
     npm run dev
     ```
   - **Frontend:**
     ```bash
     cd frontend
     npm run dev
     ```

5. **Open the app:**
   - Visit `http://localhost:5173` (or the port shown in your terminal).

## 🌐 Deployment

- The app is ready to deploy on platforms like Netlify (frontend) and Render/Heroku (backend).
- For Netlify, set the build command to `npm run build` and the publish directory to `dist`.
- Add a `public/_redirects` file with:
  ```
  /*    /index.html   200
  ```

  #Future Enhancements

## 📋 API Endpoints

| Method | Endpoint         | Description                        |
|--------|------------------|------------------------------------|
| POST   | `/api/snippets`  | Save a new code snippet            |
| GET    | `/api/snippets/:id` | Retrieve a code snippet by ID  |

> See backend code for full API details.

## 🖥️ Code Guide

- By default, users see a sample HTML snippet.
- The Share button generates a unique ID and disables until the code is edited.
- Users can select language and theme before sharing.

## 📱 Responsive Design

- The app uses Tailwind CSS and Flexbox/Grid for a seamless experience on all devices.

## 🧑‍💻 Learning Goals

- Practice fullstack development
- Integrate a code editor in React
- Implement unique ID generation and sharing
- Deploy a modern web app

## 📄 License

MIT

---

**Repository URL:** [your GitHub repo link here]  
**Demo URL:** [your deployed app link here]
