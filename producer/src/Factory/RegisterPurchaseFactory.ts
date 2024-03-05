import { PrismaPurchaseRepository }     from "../Domain/Repositories/Prisma/PrismaPurchaseRepository"
import { RegisterPurchaseUseCase }      from "../Controller/UseCase/RegisterPurchase_UseCase"
import { RegisterPurchaseRabbitmq }     from "../Controller/UseCase/RegisterPurchaseRabbitmq_UseCase"
import { RegisterPurchaseController }   from "../Controller/RegisterPurchase_Controller"

export const RegisterPurchaseFactory = () => {
  const PrismaPurchase_Repository   = new PrismaPurchaseRepository()
  const RegisterMensage_Rabbitmq    = new RegisterPurchaseRabbitmq()
  const RegisterPurchase_UseCase    = new RegisterPurchaseUseCase(PrismaPurchase_Repository, RegisterMensage_Rabbitmq)
  const RegisterPurchase_Controller = new RegisterPurchaseController(RegisterPurchase_UseCase)
  return RegisterPurchase_Controller
}