import express from 'express';
import bodyParser from 'body-parser';
import { db } from './app/models/index.js';
import movieApi from './app/routes/movies.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.MOVIES_API_PORT || 8080;

app.use(bodyParser.json());

movieApi(app, db);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Inventory app listening on port ${port}`);
    });
});
