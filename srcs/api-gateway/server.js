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
const moviesApiIp = process.env.MOVIES_API_IP || 'localhost';
const moviesApiPort = process.env.MOVIES_API_PORT || 8080;
const rabbitmqIp = process.env.RABBITMQ_IP || 'localhost';
const rabbitmqPort = process.env.RABBITMQ_PORT || 5672;

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(
    '/api/movies',
    proxyMiddleware(`http://${moviesApiIp}:${moviesApiPort}`)
);
app.use(bodyParser.json());
app.use('/api/billing', billingRoutes);
connectQueue(`amqp://${rabbitmqIp}:${rabbitmqPort}`);
app.listen(port, () => {
    console.log(`API Gateway is listening on port ${port}`);
});
