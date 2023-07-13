import express from 'express';
import dotenv from 'dotenv';
import { proxyMiddleware } from './proxy.js';
import bodyParser from 'body-parser';
import billingRoutes from './routes.js';
import { connectQueue } from './provider.js';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerDocument = YAML.load('./swagger.yaml');

dotenv.config();
const app = express();
const port = process.env.API_GATEWAY_PORT || 3000;

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/movies', proxyMiddleware(process.env.MOVIES_API_URL));
app.use(bodyParser.json());
app.use('/api/billing', billingRoutes);
connectQueue(process.env.RABBITMQ_URL);
app.listen(port, () => {
    console.log(`API Gateway is listening on port ${port}`);
});
