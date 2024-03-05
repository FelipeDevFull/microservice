import { PurchaseData } from "../Entities/Purchase"

export interface IPurchaseRepository {
  save(CreatePurchase: PurchaseData): Promise<PurchaseData>  
}
