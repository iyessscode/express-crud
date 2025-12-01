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
