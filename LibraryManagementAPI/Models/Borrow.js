import { Sequelize, DataTypes } from 'sequelize';

const sequelize = requre('../database');


const Borrow = sequelize.define('Borrow', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	borrow_date: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	},
	return_date: {
		type: DataTypes.DATE,
		allowNull: false
	}
});


Borrow.belongsTo(User, { foreignKey: 'user_id' });
Borrow.belongsTo(Book, { foreignKey: 'book_id' });

module.exports = Borrow;