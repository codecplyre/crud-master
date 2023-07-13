import amqp from 'amqplib';
import { Buffer } from 'buffer';

async function connectQueue(queueServerUrl, db) {
    try {
        const connection = await amqp.connect(queueServerUrl);
        const channel = await connection.createChannel();
        process.once('SIGINT', async () => {
            await channel.close();
            await connection.close();
        });
        await channel.assertQueue('billing_queue');
        channel.consume('billing_queue', (data) => {
            const content = Buffer.from(data.content);
            const { user_id, number_of_items, total_amount } =
                JSON.parse(content);
            db.order
                .create({
                    user_id,
                    number_of_items: Number(number_of_items),
                    total_amount: Number(total_amount),
                })
                .then(() => {
                    channel.ack(data);
                })
                .catch((err) => {
                    throw err;
                });
        });
    } catch (error) {
        console.log(error);
    }
}

export { connectQueue };
