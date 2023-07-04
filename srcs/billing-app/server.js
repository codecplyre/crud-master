import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { db } from './app/models/index.js';
import orderApi from './app/routes/order.js';
dotenv.config();
const app = express();
const port = process.env.BILLING_API_PORT || 3000;

app.use(bodyParser.json());

orderApi(app, db);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Billing app  is listening on port ${port}`);
    });
});
