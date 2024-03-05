import {env}  from "process";
import { connect } from "amqplib";


const connectrabbit = async() => {
  
    try {
      
        let conn = await connect(env.RABBITMQ_URL ?? ' ');
        let ch = await conn.createChannel()

        let exch = 'exchange_purchase'
        let q    = 'queue_purchase'
        let rkey = 'routekey_purchase'
        await ch.assertExchange(exch, 'direct', {durable: true}).catch(console.error);
        await ch.assertQueue(q, {durable: true});
        await ch.bindQueue(q, exch, rkey);
        
        return {ch, exch, rkey}

    } catch (error) {
        return error
    }
  
}

export {connectrabbit}