import amqp from 'amqplib';
import { Buffer } from 'buffer';
let channel, connection;
async function connectQueue(queueServerUrl, db) {
    try {
        connection = await amqp.connect(queueServerUrl);
        channel = await connection.createChannel();
        await channel.assertQueue('billing_queue');
        channel.consume('billing_queue', (data) => {
            const content = Buffer.from(data.content);
            const { user_id, number_of_items, total_amount } =
                JSON.parse(content);
            db.order
                .create({
                    user_id,
                    number_of_items: Number(number_of_items),
                    toal_amount: Number(total_amount),
                })
                .then(() => {
                    channel.ack(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    } catch (error) {
        console.log(error);
    }
}

export { connectQueue };
