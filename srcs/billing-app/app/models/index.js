import { Sequelize, DataTypes } from 'sequelize';
import database from '../config/config.js';
import models from './order.js';

const db = {};
const sequelize = new Sequelize(database.development);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.order = models(sequelize, DataTypes);

export { db };
