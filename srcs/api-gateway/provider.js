import { Buffer } from 'buffer';
import amqp from 'amqplib';
let channel, connection; //global variables
async function connectQueue(queueServerUrl) {
    try {
        connection = await amqp.connect(queueServerUrl);
        channel = await connection.createChannel();
        await channel.assertQueue('billing_queue');
    } catch (error) {
        console.log('channel error', error);
    }
}
async function sendData(data) {
    // send data to queue
    await channel.sendToQueue(
        'billing_queue',
        Buffer.from(JSON.stringify(data))
    );
    // close the channel and connection
    // await channel.close();
    // await connection.close();
}

export { sendData, connectQueue };
