import { prisma } from "../../../Database/client"
import { Nfe } from "../../Entities/Nfe"
import { INfeDataRepository } from "../INfeDataRepositories"

export class PrismaNfeDataRepository implements INfeDataRepository {
  
  async save(RabbitMQData: Nfe):Promise<boolean> {
    const {idNfe, idpurchase, name, description, value} = RabbitMQData
    const NfeData = await prisma.nfeTable.create({data:{idNfe, idpurchase, name, description, value}})
    return !!NfeData
  }

  async list(idpurchase:string):Promise<Nfe> {
    const NfeDataList = await prisma.nfeTable.findUnique({where:{idpurchase:idpurchase}})
    //@ts-ignore
    return NfeDataList!
  }

}
