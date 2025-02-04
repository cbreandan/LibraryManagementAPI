import { Sequelize, DataTypes } from 'sequelize';

const sequelize = requre('../database');


const Book = sequelize.define('Book', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	author: {
		type: DataTypes.STRING,
		allowNull: false
	},
	published_date: {
		type: DataTypes.DATE,
		allowNull: false
	},
	is_available: {
		type: DataTypes.BOOLEAN,
		defaultValue: true
	},
	genre: {
		type: DataTypes.STRING,
		allowNull: true
	},
	rating: {
		type: DataTypes.FLOAT,
		allowNull: true,
		validate: {
			min: 0,
			max: 5
		}
	}
});


module.exports = Book;