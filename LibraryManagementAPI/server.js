const express = require('express');
const User = require('./models/User');
const Book = require('./models/Book');
const Borrow = require('./models/Borrow');
const sequelize = requre('./database');
import { DataTypes } from 'sequelize';


const app = express();
const port = 3000;


sequelize.sync();


// Borrow a book

app.post('/borrow', (req, res) => {
	const { user_id, book_id, borrow_date, return_date } = req.body;

	try {
		const borrow = await Borrow.create({ user_id, book_id, borrow_date, return_date });
		res.send({ borrowId: borrow.id });
	} catch (err) {
		res.status(500).send(err);
	}
});


// Return a borrowed book
app.put('/return', (req, res) => {
	const { user_id, book_id } = req.body;

	try {
		const update = await Borrow.update(
		  { return_date: DateTypes.NOW },
		  {
		    where: {
		      user_id,
		      book_id
		    },
		  },
		);

	} catch (err){
		res.status(500).send(err);
	}
});


// Fetch all borrow records for a specific user
app.get('/books', (req, res) => {
	const { user_id } = req.body;

	try {
		const books = await Borrow.findAll({
			where: {
				user_id
			}
		});
	} catch (err) {
		res.status(500).send(err);
	}
});


//Search books by URL param
app.get('/books/:id', (req,res) => {
	try {
		const book = await Borrow.findByPk(req.params.id);
		if (!book){
			res.status(404).send({ message: 'Book with id is invalid or not found' });
		}
	} catch (err) {
		res.status(500).send(err);
	}
});


app.listen(port, () => {
  console.log(`Library Management API listening on port localhost:${port}`)
})


// Bonus

// Use jest for unit testing the different API endpoints

// DB optimizations:
// Create indexes on foreign keys & columns in WHERE clause to speed up retrieval:
// ie. user_id, book_id
// Make sure Data types are used correctly for IDs (INT) and strings (VARCHAR)
// Caching with Redis if needed
// Possibly return specific columns only for /books endpoint to reduce fetching all columns from db
















