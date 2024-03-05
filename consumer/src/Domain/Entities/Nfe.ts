import { randomUUID } from 'node:crypto'

export class Nfe {
  idNfe?:string
  idpurchase: string
  name: string            
  description: string
  value: number         
  

 private constructor({idpurchase, name, description, value}: Nfe){
    this.idNfe = randomUUID()
    this.idpurchase  = idpurchase
    this.name        = name 
    this.description = description
    this.value       = value
  }

  static async create(VarRabbitMQ: Nfe) {
    const RabbitMQData = {idpurchase:VarRabbitMQ['idpurchase'], name:VarRabbitMQ['name'], description:VarRabbitMQ['description'], value:VarRabbitMQ.value}
    const nfe = new Nfe(RabbitMQData)
    return nfe
  }
}
  