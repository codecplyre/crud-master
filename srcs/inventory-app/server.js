import express from 'express';
const app = express();
const port = 8080;
import bodyParser from 'body-parser';
import { db } from './app/models/index.js';
import movieApi from './app/routes/movies.js';
app.use(bodyParser.json());

movieApi(app, db);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
});
