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
	res.send('Not yet implemented: Retrieve a single friend by email');
});

// POST request: Update the details of a friend with email id
friendsRouter.put('/:email', (req, res) => {
	res.send('Not yet implemented: Update friend details by email');
});

// DELETE request: Delete a friend by email id
friendsRouter.delete('/:email', (req, res) => {
	res.send('Not yet implemented: Delete a friend by email');
});

export default friendsRouter;
