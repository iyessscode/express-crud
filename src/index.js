import express from 'express';
import session from 'express-session';
import jwt from 'jsonwebtoken';
import friendsRouter from './routers/friendsRouter.js';

let user = [];

// Check if a user already exists
const userExists = (username) => {
	return user.filter((u) => u.username === username).length > 0;
};

// Check if a user with given credentials exists
const authenticatedUser = (username, password) => {
	return (
		user.filter((u) => u.username === username && u.password === password)
			.length > 0
	);
};

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to read JSON body
app.use(express.json());

// Enable Session Middleware
app.use(
	session({
		secret: 'fingerprint',
		resave: true,
		saveUninitialized: true,
	})
);

// Middleware to authenticate requests to "/friends" endpoint
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

// Root route
app.get('/', (req, res) => {
	res.send('API is running...');
});

// Login endpoint
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

// Register endpoint
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

// adding friends router
app.use('/friends', friendsRouter);

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
