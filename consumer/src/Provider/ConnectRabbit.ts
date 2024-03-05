import {env}  from "process";
import { connect, ConsumeMessage } from "amqplib";


const connectrabbit = async() => {
  
    try {
      
        let conn = await connect(env.RABBITMQ_URL ?? ' ');
        let ch = await conn.createChannel()
        let queue = 'queue_purchase'
        await ch.assertQueue(queue, {durable: true})
        let received: Record<string, any> = {}
        await ch.consume(queue, (msg: ConsumeMessage | null) => {
            if(msg)
            {
                const json = JSON.parse(msg.content.toString())
                received = json
                ch.ack(msg);
            }
        });
        return received

    } catch (error) {
        return error
    }
  
}

export {connectrabbit}