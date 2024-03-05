import { Request, Response } from "express"
import { RegisterPurchaseUseCase } from "./UseCase/RegisterPurchase_UseCase"


export class RegisterPurchaseController{

    constructor(private RegisterPurchaseUseCase: RegisterPurchaseUseCase) {}

    async create(req: Request, res: Response){

        const {name, description, value} = req.body

        try {            
            const PurchaseData = await this.RegisterPurchaseUseCase.execute({name, description, value})
            ​let result_stringify = JSON.stringify(PurchaseData)
            let result_obj = JSON.parse(result_stringify)
            res.status(result_obj.status).json(result_obj.menssage)
        } 
        catch (error) 
        {
            res.status(500).json({message:"Servidor encontrou um erro. Tente novamente mais tarde."})
            return
        }
     
    } 
}