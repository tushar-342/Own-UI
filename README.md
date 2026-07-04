<div align="center">

# 🚀 VirtualAI

### Build Production-Ready React Components with AI in Seconds

<p align="center">
Generate beautiful React UI components using natural language, customize them with live props, preview instantly, publish reusable components, and install them directly through your own NPM package.
</p>

<br>

<p align="center">

<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>

<img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>

<img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white"/>

<img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>

<img src="https://img.shields.io/badge/Google-OAuth-4285F4?style=for-the-badge&logo=google&logoColor=white"/>

<img src="https://img.shields.io/badge/Gemini-AI-8E75FF?style=for-the-badge"/>

<img src="https://img.shields.io/badge/NPM-Package-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>

<img src="https://img.shields.io/badge/License-MIT-success?style=for-the-badge"/>

</p>

<br>

[🌐 Live Demo](https://own-ui-main.onrender.com)
&nbsp;&nbsp;&nbsp;
[📦 NPM Package](https://www.npmjs.com/package/virtual-ui-component-own)
&nbsp;&nbsp;&nbsp;
[💻 Backend]([🖥️ Backend](https://github.com/tushar-342/virtual-ui-client))
&nbsp;&nbsp;&nbsp;
[⭐ Star this Repository](../../stargazers)

</div>
---

### 📦 NPM Package
https://www.npmjs.com/package/virtual-ui-component-own

### 💻 GitHub Repository
https://github.com/tushar-342/Own-UI

---

# 📖 Overview

VirtualAI is a full-stack AI-powered React UI Component Platform that enables developers to generate production-ready React components using natural language prompts.

Instead of manually building repetitive UI elements, developers can generate customizable components, preview them in real time, modify props dynamically, publish reusable components, and distribute them through npm—all from a single platform.

The project combines AI-assisted UI generation, component management, authentication, cloud deployment, and package publishing into a modern developer workflow.

# ✨ Why VirtualAI?

Building reusable UI components repeatedly is time-consuming.

VirtualAI simplifies frontend development by combining AI, reusable component libraries, and cloud deployment into one seamless platform.

### It provides:

- 🤖 AI-powered React component generation
- 🎨 Live component customization using props
- ⚡ Instant preview before publishing
- 📦 One-click npm package installation
- 🌍 Public component marketplace
- 🔐 Secure Google OAuth authentication
- 📊 Admin dashboard for component management
- ☁️ Cloud deployment with Render

# 🚀 Features

## 🤖 AI Component Studio
- Generate React components using natural language.
- Customize props before publishing.
- Instant JSX preview.

## 📚 Public Component Library
- Browse reusable community components.
- Search published components.
- Copy or install components instantly.

## 📦 NPM Package Integration
- Publish reusable components.
- Install directly into React projects.
- Version-controlled package releases.

## 🔐 Authentication
- Google OAuth login.
- Secure JWT authentication.
- Protected dashboard routes.

## 📊 Admin Dashboard
- User analytics.
- Published component statistics.
- Component management.

## ☁️ Deployment
- Frontend deployed on Render.
- npm package published publicly.
- Production-ready architecture.

# 🛠️ Tech Stack

## Frontend
- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Axios
- Lucide React
- Recharts

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication
- Google OAuth 2.0
- JWT Authentication

## Cloud & Deployment
- Render
- npm Registry

## Developer Tools
- Git
- GitHub
- VS Code
- Postman

# 🏗️ System Architecture

```

                    +----------------------+
                    |      React Client    |
                    +----------+-----------+
                               |
                               |
                               ▼
                    +----------------------+
                    |    Express Server    |
                    +----------+-----------+
                               |
        +----------------------+----------------------+
        |                      |                      |
        ▼                      ▼                      ▼
 Google OAuth            MongoDB Database        AI Component Engine
        |                      |                      |
        +----------------------+----------------------+
                               |
                               ▼
                      Public Component Library
                               |
                               ▼
                         npm Package Registry

```

# ⚙️ How It Works

1. User signs in using Google OAuth.
2. AI credits are assigned.
3. User enters a natural language prompt.
4. VirtualAI generates a React component.
5. User customizes component props.
6. Live preview is rendered instantly.
7. Component can be published publicly.
8. Other developers can browse and install it via npm.

# 📂 Folder Structure

```
Own-UI/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── assets/
│
└── README.md
```

# 🔐 Authentication Flow

- User clicks **Continue with Google**.
- Google OAuth verifies identity.
- Backend validates the user.
- JWT token is generated.
- Protected dashboard becomes accessible.
- AI credits are assigned to the user account.

# 🤖 AI Component Generation Flow

User Prompt

↓

Prompt Validation

↓

AI Component Generation

↓

React JSX Output

↓

Live Preview

↓

Component Customization

↓

Publish Component

↓

Install via npm
