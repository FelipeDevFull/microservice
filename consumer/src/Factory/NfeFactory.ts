import { PrismaNfeDataRepository }     from "../Domain/Repositories/Prisma/PrismaNfeDataRepository"
import { NfeRegister_UseCase }         from "../Controller/UseCase/NfeRegister_UseCase"
import { NfeRegister_Controller }      from "../Controller/NfeRegister_Controller"

export const NfeFactory = () => {
  const PrismaNfeData_Repository = new PrismaNfeDataRepository()
  const NfeRegisterUseCase       = new NfeRegister_UseCase(PrismaNfeData_Repository)
  const NfeRegisterController    = new NfeRegister_Controller(NfeRegisterUseCase)
  return NfeRegisterController
}