import express from 'express';

const friendsRouter = express.Router();

let friends = {
	'johnsmith@gamil.com': {
		firstName: 'John',
		lastName: 'Doe',
		DOB: '22-12-1990',
	},
	'annasmith@gamil.com': {
		firstName: 'Anna',
		lastName: 'smith',
		DOB: '02-07-1983',
	},
	'peterjones@gamil.com': {
		firstName: 'Peter',
		lastName: 'Jones',
		DOB: '21-03-1989',
	},
};

// GET /friends - Retrieve all friends
friendsRouter.get('/', (req, res) => {
	res.send(JSON.stringify(friends, null, 2));
});

// GET by specific ID request: Retrieve a single friend by email
friendsRouter.get('/:email', (req, res) => {
	const email = req.params.email;
	if (!friends[email]) {
		return res.status(404).json({ message: 'Friend not found' });
	}

	res.send(friends[email]);
});

// POST request: Add a new friend
friendsRouter.post('/', (req, res) => {
	const { email, firstName, lastName, dob } = req.body;
	console.log(req.body);
	if (!email || !firstName || !lastName || !dob) {
		res.status(400).json({
			message: 'Missing required fields: email, firstName, lastName, dob',
		});
	}

	friends[email] = {
		firstName: firstName,
		lastName: lastName,
		DOB: dob,
	};

	res.send(`The user ${firstName} has been added!`);
});

// PUT request: Update the details of a friend with email id
friendsRouter.put('/:email', (req, res) => {
	const email = req.params.email;

	let friend = friends[email];
	if (!friend) {
		return res.status(404).json({ message: 'Friend not found' });
	}

	const { firstName, lastName, dob } = req.body;

	if (firstName) friend.firstName = firstName;
	if (lastName) friend.lastName = lastName;
	if (dob) friend.DOB = dob;

	friends[email] = friend;

	res.send(`The user with email ${email} has been updated!`);
});

// DELETE request: Delete a friend by email id
friendsRouter.delete('/:email', (req, res) => {
	const email = req.params.email;
	if (!friends[email]) {
		return res.status(404).json({ message: 'Friend not found' });
	}

	delete friends[email];

	res.send(`The user with email ${email} has been deleted!`);
});

export default friendsRouter;
