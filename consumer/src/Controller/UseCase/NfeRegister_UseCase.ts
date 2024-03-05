import { INfeDataRepository } from "../../Domain/Repositories/INfeDataRepositories"
import { Nfe } from "../../Domain/Entities/Nfe"
import {connectrabbit} from "../../Provider/ConnectRabbit"


interface IRabbitMQ {
  idpurchase: string
  name: string
  description: string
  value: number
}

export class NfeRegister_UseCase{
  
  constructor(private NfeDataRepository: INfeDataRepository) {}

  async execute(idpurchase:string) {
    
    if(!idpurchase)
    {
      return ​{status:422, menssage:{"menssage":"Dados Incompletos."}}
    }

    try {
      
      const VarRabbitMQ  = <IRabbitMQ> await connectrabbit()
      if(VarRabbitMQ['idpurchase'])
      {
        const NfeData = await Nfe.create(VarRabbitMQ)
        await this.NfeDataRepository.save(NfeData)
      }

      const NfeDataList = await this.NfeDataRepository.list(idpurchase)  
      if(NfeDataList)
      { 
        let value = NfeDataList.value*1//string to number
        const NfeData_List = {...NfeDataList, value: value}
        return ​{status:200, menssage:[NfeData_List]}
      }else{
        return ​{status:500, menssage:{"menssage":"idcompra inválido."}}
      }
      
      
    }
    catch (error) 
    {
      return ​{status:500, menssage:{"menssage":"Servidor encontrou um erro. Tente novamente mais tarde."}}
    }

  }

}