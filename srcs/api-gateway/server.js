import express from 'express';
import dotenv from 'dotenv';
import { proxyMiddleware } from './proxy.js';
import bodyParser from 'body-parser';
import routes from './routes.js';
import { connectQueue } from './provider.js';

dotenv.config();
const app = express();
const port = process.env.API_GATEWAY_PORT || 3000;

app.use(bodyParser.json());
app.use('/api', proxyMiddleware(process.env.MOVIES_API_URL));

routes(app);
connectQueue(process.env.RABBITMQ_URL);
app.listen(port, () => {
    console.log(`API Gateway is listening on port ${port}`);
});
