import { prisma } from "../../../Database/client"
import { PurchaseData } from "../../Entities/Purchase"
import { IPurchaseRepository } from "../IPurchaseRepositories"

export class PrismaPurchaseRepository implements IPurchaseRepository {
  
  async save(CreatePurchase: PurchaseData): Promise<PurchaseData> {
    const {idpurchase, name, description, value} = CreatePurchase
    const PurchaseData = await prisma.purchaseTable.create({data:{idpurchase, name, description, value}})
    //@ts-ignore
    return PurchaseData
  }

}