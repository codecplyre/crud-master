import { sendData } from './provider.js';
import dotenv from 'dotenv';
import express from 'express';

const router = express();

dotenv.config();

const billingApiIp = process.env.BILLING_API_IP || 'localhost';
const billingApiPort = process.env.BILLING_API_PORT || 8081;

router.post('/', async (req, res) => {
    await sendData(req.body); // pass the data to the function we defined
    console.log('A message is sent to queue', req.body);
    res.send('Message Sent'); //response to the API request
});
router.get('/', async (req, res) => {
    console.log('orders get request');
    const response = await fetch(
        `http://${billingApiIp}:${billingApiPort}/api/billing`
    );
    const data = await response.json();
    res.send(data);
    // res.send('orders get request');
});

export default router;
