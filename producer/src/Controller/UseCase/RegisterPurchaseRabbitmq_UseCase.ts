import {connectrabbit}  from "../../provider/ConnectRabbit"
import { Channel }      from "amqplib"
import { PurchaseData } from "../../Domain/Entities/Purchase"

interface IVarRabbitMQ
{
  ch: Channel 
  exch: string
  rkey: string
}

export class RegisterPurchaseRabbitmq{

  async create(Purchase_Data: PurchaseData) {
    
    try {

      const VarRabbitMQ = <IVarRabbitMQ> await connectrabbit()
      const ch   = VarRabbitMQ.ch
      const exch = VarRabbitMQ.exch
      const rkey = VarRabbitMQ.rkey

      
      //salva os dados no Rabbitmq
      const Purchase = JSON.stringify(Purchase_Data)
      await ch.publish(exch, rkey, Buffer.from(Purchase))


    }catch (error) {
      return ​{status:500, menssage:{"menssage":"Servidor encontrou um erro. Tente novamente mais tarde."}}
    }

  }

}