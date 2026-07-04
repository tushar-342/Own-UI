<div align="center">

# 🚀 Own-UI

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
npm i virtual-ui-component-own

### 💻 GitHub Repository
https://github.com/tushar-342/Own-UI

---

# 📖 Overview

Own-UI is a full-stack AI-powered React UI Component Platform that enables developers to generate production-ready React components using natural language prompts.

Instead of manually building repetitive UI elements, developers can generate customizable components, preview them in real time, modify props dynamically, publish reusable components, and distribute them through npm—all from a single platform.

The project combines AI-assisted UI generation, component management, authentication, cloud deployment, and package publishing into a modern developer workflow.

# ✨ Why Own-UI?

Building reusable UI components repeatedly is time-consuming.

Own-UI simplifies frontend development by combining AI, reusable component libraries, and cloud deployment into one seamless platform.

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

# 💳 AI Credit System

Own-UI follows a credit-based usage model to ensure fair access to AI resources while supporting a scalable SaaS architecture.

## How It Works

- 🎁 Every new user receives **150 free AI credits** after signing in.
- 🤖 Each AI component generation consumes credits.
- 📊 The remaining credit balance is displayed inside the user dashboard.
- ⚡ Users can continue generating components until their credits are exhausted.
- 💰 Additional credits can be purchased securely through Razorpay.

## Credit Workflow

```text
Google Login
      │
      ▼
Receive 150 Free Credits
      │
      ▼
Generate AI Components
      │
      ▼
Credits Deducted
      │
      ▼
Remaining Credits Updated
```

The credit system prevents abuse of AI resources while providing users with a seamless experience for generating production-ready React components.

# 💳 Razorpay Payment Integration

Own-UI integrates **Razorpay** to provide a secure and seamless payment experience for purchasing additional AI credits.

## Features

- 🔒 Secure payment processing
- ⚡ Instant credit allocation after successful payment
- 📦 Subscription-ready architecture
- 🧾 Backend payment verification
- 💰 Automatic credit balance update

## Payment Workflow

```text
Credits Exhausted
      │
      ▼
Choose Premium Plan
      │
      ▼
Razorpay Checkout
      │
      ▼
Secure Payment
      │
      ▼
Payment Verification
      │
      ▼
Credits Added to User Account
      │
      ▼
Continue AI Component Generation
```

This payment flow enables VirtualAI to operate as a scalable SaaS platform while providing a smooth purchasing experience for users.

# 📊 Dashboard Overview

Own-UI includes a powerful admin dashboard that provides complete visibility into platform activity and simplifies component management.

## Dashboard Features

- 📈 Real-time platform analytics
- 👥 Total registered users
- 📦 Published component statistics
- 🔍 Search public components
- ➕ Publish new components
- 📊 Component usage insights
- ⚡ Responsive admin interface

The dashboard enables administrators to efficiently manage the component ecosystem while monitoring user engagement and platform growth.

---

# 📦 NPM Package

Own-UI provides a published React component library that allows developers to install reusable UI components directly into their projects.

## Installation

```bash
npm install virtual-ui-lib
```

## Usage

```jsx
import { Button } from "virtual-ui-lib";

function App() {
  return (
    <Button text="Get Started" />
  );
}

export default App;
```

### Benefits

- 📦 Easy installation through npm
- ⚡ Reusable production-ready components
- 🎨 Customizable props
- 🔄 Version-controlled updates
- 🚀 Faster UI development

---

# ☁️ Deployment

Own-UI is deployed as a production-ready SaaS application.

| Service | Live URL |
|---------|----------|
| 🌐 Frontend | https://own-ui-main.onrender.com |
| ⚙️ Backend | https://own-ui.onrender.com |
| 📦 NPM Package | https://www.npmjs.com/package/virtual-ui-lib |

### Deployment Highlights

- Production-ready React frontend
- Secure Express backend
- MongoDB Atlas database
- Google OAuth authentication
- Razorpay payment integration
- Published npm package

---

# 📚 Lessons Learned

Developing Own-UI provided valuable experience in building and deploying a full-stack AI-powered SaaS platform.

## Key Learnings

- Designing scalable MERN applications
- Integrating AI into real-world workflows
- Implementing secure Google OAuth authentication
- Building a credit-based SaaS business model
- Integrating Razorpay payment gateway
- Publishing reusable React components to npm
- Managing production deployments
- Creating responsive and reusable UI systems

---

# 👨‍💻 Author

## Tushar Kumar

Full-Stack MERN Developer passionate about building AI-powered SaaS applications, scalable backend systems, and modern React experiences.

### Connect With Me

- 💻 GitHub: https://github.com/tushar-342
- 💼 LinkedIn: *(https://www.linkedin.com/in/tushar-kumar-he-him-3rd-44aa09281/)*
- 📧 Email: *(tusharkrverma224@gmail.com)*

---

# 🤝 Contributing

Contributions are welcome!

If you'd like to improve Own-UI:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

For major changes, please open an issue first to discuss your proposed improvements.

---

# 📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute this project in accordance with the license terms.

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

Your support motivates me to continue building open-source projects and developer tools.

Thank you for visiting the Own-UI repository! 🚀
