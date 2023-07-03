import express from 'express';
import dotenv from 'dotenv';
import { proxyMiddleware } from './proxy.js';

dotenv.config();
const app = express();
const port = process.env.API_GATEWAY_PORT || 3000;

app.use(proxyMiddleware(process.env.MOVIES_API_URL));

app.listen(port, () => {
    console.log(`API Gateway is listening on port ${port}`);
});
