import { Request, Response } from "express"
import { NfeRegister_UseCase } from "./UseCase/NfeRegister_UseCase"


export class NfeRegister_Controller {

    constructor(private NfeRegister_UseCase: NfeRegister_UseCase) {}

    async create(req: Request, res: Response){

        const {idcompra} = req.body

        let purchase = idcompra

        if(!purchase)
        {
            res.status(422).json({message:"Dados Incompletos."})
            return
        }

        try {            
            const NfeData = await this.NfeRegister_UseCase.execute(purchase)
            ​let result_stringify = JSON.stringify(NfeData)
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