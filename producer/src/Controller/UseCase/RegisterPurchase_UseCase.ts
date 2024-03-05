import { PurchaseData } from "../../Domain/Entities/Purchase"
import { IPurchaseRepository } from "../../Domain/Repositories/IPurchaseRepositories"
import { RegisterPurchaseRabbitmq } from "./RegisterPurchaseRabbitmq_UseCase"


interface IPurchaseRequest {
  name: string
  description:string 
  value: number
}

export class RegisterPurchaseUseCase{
  
  constructor(private PurchaseRepository: IPurchaseRepository, private RegisterPurchaseRabbitmq: RegisterPurchaseRabbitmq) {}

  async execute({name, description, value}: IPurchaseRequest) {
    try {   
      const CreatePurchase = await PurchaseData.create({name, description, value})
   
      await this.RegisterPurchaseRabbitmq.create(CreatePurchase)
      await this.PurchaseRepository.save(CreatePurchase)
     
      const {idpurchase} = CreatePurchase
      return ​{status:201, menssage:{"idcompra":idpurchase}}
    }
    catch (error) 
    {
      return ​{status:500, menssage:{"menssage":"Servidor encontrou um erro. Tente novamente mais tarde."}}
    }

  }

}