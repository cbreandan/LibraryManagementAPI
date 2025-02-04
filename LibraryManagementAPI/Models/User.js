import { Sequelize, DataTypes } from 'sequelize';

const sequelize = requre('../database');


const User = sequelize.define('User', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		unique: true
		allowNull: false
	},
	registered_date: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	}
});


module.exports = User;
