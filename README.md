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
