# 🚀 Practice Project — Friends List API with Express, JWT & Session Auth

A simple yet solid practice project where you build a **Friends List CRUD API** using **Express.js**, secured with **JWT-based authentication** and session management.
Perfect for understanding how authentication gates protect API endpoints.

## 📌 What You’ll Build

- Create an Express server that handles **CRUD operations** for a `friends` resource.
- Store friends in an in-memory **JSON object**, using `email` as the key.
- Use `body` parameters instead of `query` or `params`.
- **Protect all CRUD routes** so only authenticated users can access them.
- Test everything via **Postman**.

## ⚙️ Setup — Create the Application

### 1️⃣ Initialize the Project

Open your terminal:

```bash
npm init
```

Fill in the following values:

| Field        | Value                                                              |
| ------------ | ------------------------------------------------------------------ |
| package name | `crud`                                                             |
| version      | `1.0.0`                                                            |
| description  | _In the CRUD lab you performed CRUD operations on transient data…_ |
| entry point  | `./src/index.js`                                                   |
| test command | `echo \"Error: no test specified\" && exit 1`                      |
| repository   | `https://github.com/iyessscode/express-crud.git`                   |
| keywords     | `CREATE`, `READ`, `UPDATE`, `DELETE`, `EXPRESS`, `NODEMON`, `JWT`  |
| author       | `https://github.com/iyessscode`                                    |
| license      | `MIT`                                                              |
| type         | `module`                                                           |

## 🧩 Tech Stack

- **Node.js**
- **Express.js**
- **JWT (JSON Web Token)**
- **Postman** for testing
- **Nodemon** for dev workflow

## 🟢 Push this Project into GitHub

```bash
git add .
git commit -m "initial setup"
git branch -M main
git remote add origin https://github.com/iyessscode/express-crud.git
git push -u origin main
```

## 📦 Install Dependencies

Before building the API, install all required packages:

### 1️⃣ Core Dependencies

```bash
npm install express express-session jsonwebtoken
```

### 2️⃣ Dev Dependency (for auto-restart)

```bash
npm install --save-dev nodemon
```

### 3️⃣ Update `package.json` Scripts

Add a development script so your server restarts automatically:

```json
"scripts": {
  "start": "node ./src/index.js",
  "dev": "nodemon ./src/index.js"
}
```

### 4️⃣ Create `.gitignore`

Before committing your project, create a .gitignore file to keep unwanted files out of Git:

```lua
# Node modules
node_modules/

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Env files (DO NOT COMMIT SECRETS)
.env
.env.local
.env.*.local

# OS files
.DS_Store
Thumbs.db

# Editor folders
.vscode/
.idea/

# Build output
dist/
build/

# Nodemon
nodemon-debug.log

# Coverage / Testing
coverage/
```

### 5️⃣ Push to GitHub (Using on-dev Branch)

Create a new development branch and push it to GitHub:

```bash
git checkout -b on-dev
git add .
git commit -m "setup project with dependencies"
git push -u origin on-dev
```

If your remote hasn’t been set yet:

```bash
git remote add origin https://github.com/iyessscode/express-crud.git
git push -u origin on-dev
```

## 🗂️ Create Project Structure

Follow these steps to set up the base structure of your Express application in a clean and organized way.

### 1️⃣ Create a Feature Branch

Before making structural changes, create a new branch:

```bash
git checkout -b feat/setup-project-structure
```

This keeps your development workflow clean and professional.

### 2️⃣ Create the `src` Folder and `index.js`

This file will be the entry point of your Express application.

```bash
mkdir src
touch src/index.js
```

Your project now contains:

```
src/
└── index.js
```

### 3️⃣ Create the `routers` Folder and `friendsRouter.js`

This router will handle your Friends CRUD API.

```bash
mkdir src/routers
touch src/routers/friendsRouter.js
```

Updated structure:

```
src/
├── index.js
└── routers/
    └── friendsRouter.js
```

### 4️⃣ Commit Your Changes

After creating the folder structure and files:

```bash
git add .
git commit -m "Add project structure and base router files"
```

### 5️⃣ Push the Branch to GitHub

Push your new feature branch:

```bash
git push -u origin feat/setup-project-structure
```

## 🚀 Initialize the Express Server (`index.js`)

Now that your project structure is ready, let’s set up the main server file where the Express app, middleware, and routers will live.

### 0️⃣ Create a New Branch for Server Setup

```bash
git checkout -b feat/setup-express-server
```

This branch will contain everything related to initializing the Express application.

### 1️⃣ Create a Basic Express Server

Open `src/index.js` and add the following starter code:

```js
import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to read JSON body
app.use(express.json());

// Root route (optional)
app.get('/', (req, res) => {
	res.send('API is running...');
});

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
```

### 2️⃣ Run the Server (Development Mode)

Use nodemon to auto-restart on file changes:

```bash
npm run dev
```

You should see:

```
Server is running on http://localhost:8080
```

Open your browser:

👉 [http://localhost:8080/](http://localhost:8080/)

You should get:
**API is running...”**

### 3️⃣ Commit the Server Setup

Now commit your work:

```bash
git add .
git commit -m "Initialize Express server with basic setup"
```

### 4️⃣ Push to GitHub

```bash
git push -u origin feat/setup-express-server
```
