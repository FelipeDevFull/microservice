import {Nfe} from "../Entities/Nfe"

export interface INfeDataRepository {
  save(RabbitMQData:Nfe): Promise<boolean>
  list(purchase:string): Promise<Nfe>
}
