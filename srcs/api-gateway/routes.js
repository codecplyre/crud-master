import { sendData } from './provider.js';
import dotenv from 'dotenv';

dotenv.config();
export default (app) => {
    app.post('/api/billing', async (req, res) => {
        await sendData(req.body); // pass the data to the function we defined
        console.log('A message is sent to queue', req.body);
        res.send('Message Sent'); //response to the API request
    });
    app.get('/api/billing', async (req, res) => {
        console.log('orders get request');
        const response = await fetch(
            `${process.env.BILLING_API_URL}/api/billing`
        );
        const data = await response.json();
        res.send(data);
        // res.send('orders get request');
    });
};
