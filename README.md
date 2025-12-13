# 🎬 Hulu Clone (React + Docker)

A Hulu-style movie browsing application built with **React (Create React App)** and powered by **real-time TMDB API data**.  
The application is containerised using a **multi-stage Docker build** and served via **nginx** for fast, production-grade delivery.

---

## 🚀 Features

- Responsive Hulu-style user interface
- Real movie data fetched from the TMDB API
- Category-based browsing (Trending, Top Rated, Action, etc.)
- Optimised production build served via nginx
- Fully containerised frontend (no Node.js runtime in production)

---

## 🛠 Tech Stack

- **Frontend:** React (Create React App)
- **UI:** Material UI (icons)
- **Data Source:** TMDB REST API
- **Package Manager:** npm
- **Containerisation:** Docker (multi-stage build)
- **Web Server:** nginx

---

## 📁 Project Structure

HULU-CLONE/
├─ src/ # React source code
├─ public/ # Static public assets
├─ nginx.conf # nginx SPA routing configuration
├─ Dockerfile # Production Dockerfile
├─ .dockerignore
├─ package.json
├─ package-lock.json
└─ README.md


---

## 🧑‍💻 Local Development (Node.js)

### Prerequisites
- Node.js 18 or later
- npm

### Install dependencies
npm install

### Run the application
npm start

### Open in your browser
http://localhost:3000

### 🐳 Docker (Production)

Running the app via Docker is the recommended approach.

Build the Docker image
docker build -t hulu-clone:prod .

### Run the container
docker run --rm -p 3000:80 hulu-clone:prod


### Open in your browser:

http://localhost:3000

### What happens in Docker

React app is built using Node.js in a build stage

A static production build is generated

nginx serves the static files

No Node.js runtime is required in the final image

### 🌐 SPA Routing

This application is a Single Page Application (SPA).

The nginx configuration ensures that client-side routes work correctly on refresh or direct access:

location / {
  try_files $uri $uri/ /index.html;
}

Without this configuration, refreshing routes such as /movie/123 would result in a 404 error.


### 🔐 TMDB API Notes

Movie data is fetched client-side from the TMDB API

API keys used in the frontend are public-read and visible in the browser

This is expected behaviour for TMDB and similar public APIs

No secrets are stored inside the Docker image

### 📦 Why nginx + Docker?

Faster and lighter than running a Node.js dev server

Smaller, more secure runtime image

Matches real-world SPA deployment patterns (CDN / edge hosting)

Clear separation between build-time and runtime concerns