# 🔐 User Authentication Setup (Register, Login, Session, JWT)

Before giving access to the `/friends` routes, we need a complete authentication flow.
This section walks through everything you need:

- Register users
- Check for duplicates
- Authenticate users
- Create sessions
- Generate JWT access tokens
- Protect all `/friends` routes with middleware

## 0️⃣ Create a New Branch

Since we are introducing authentication logic:

```bash
git checkout -b feat/authentication
```

## 1️⃣ In-Memory Users List

At the top of `src/index.js`, add:

```js
// Temporary in-memory users storage
let users = [];
```

This is only for learning — no database yet.

## 2️⃣ Utility: Check if Username Already Exists

```js
const userExists = (username) => {
	return user.filter((u) => u.username === username).length > 0;
};
```

This ensures all usernames remain unique.

## 3️⃣ Utility: Validate Username + Password

```js
const authenticatedUser = (username, password) => {
	return (
		user.filter((u) => u.username === username && u.password === password)
			.length > 0
	);
};
```

This is used during login.

## 4️⃣ Register Endpoint (`POST /register`)

Open `src/index.js` and add:

```js
app.post('/register', (req, res) => {
	// get username and password from request body
	const { username, password } = req.body;

	// check if username or password is missing
	if (!username || !password) {
		return res.status(404).json({ message: 'Username or password missing' });
	}

	// check if user already exists
	if (userExists(username)) {
		return res.status(409).json({ message: 'User already exists' });
	}

	// Add new user to the user array
	user.push({
		username,
		password,
	});

	return res
		.status(200)
		.json({ message: 'User successfully registered. Now you can login' });
});
```

✔️ No authentication required for registration.

## 5️⃣ Enable Session Middleware

Add this after `express.json()`:

```js
import session from 'express-session';

app.use(
	session({
		secret: 'fingerprint',
		resave: true,
		saveUninitialized: true,
	})
);
```

This allows storing JWT tokens inside `req.session`.

## 6️⃣ Login Endpoint (`POST /login`)

```js
app.post('/login', (req, res) => {
	// get username and password from request body
	const { username, password } = req.body;

	// check if username or password is missing
	if (!username || !password) {
		return res.status(404).json({ message: 'Invalid credentials' });
	}

	if (!authenticatedUser(username, password)) {
		return res
			.status(404)
			.json({ message: 'Invalid login. Check username and password' });
	}

	// Authenticate the user

	// Generate JWT access token
	let accessToken = jwt.sign({ data: password }, 'access', {
		expiresIn: 60 * 60,
	});

	// Store access token and username in session
	req.session.authorization = {
		accessToken,
		username,
	};

	return res.status(200).json({ message: 'User successfully logged in' });
});
```

✔️ Generates JWT
✔️ Saves token + username inside the session

## 7️⃣ Protect `/friends` Routes With Auth Middleware

This ensures only logged-in users can access your Friends API.

```js
app.use('/friends', (req, res, next) => {
	// Check if user is logged in and has valid access token
	if (req.session.authorization) {
		let token = req.session.authorization['accessToken'];

		// verify JWT token
		jwt.verify(token, 'access', (error, user) => {
			if (!error) {
				req.user = user;
				next();
			} else {
				return res.status(403).json({ message: 'User not authenticated' });
			}
		});
	} else {
		return res.status(403).json({ message: 'User not logged in' });
	}
});
```

## 8️⃣ After Authentication → Continue With CRUD

Now `/friends` is protected.
To test in Postman:

1. Register via `POST /register`
2. Login via `POST /login`
3. Now call all `/friends/*` endpoints

## 9️⃣ Commit & Push

```bash
git add .
git commit -m "Add authentication flow (register, login, session, JWT)"
git push -u origin feat/authentication
```
