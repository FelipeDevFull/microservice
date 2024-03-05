import { NextFunction, Request, Response } from "express";

function Validate(req: Request, res: Response, next: NextFunction) {
  
    const {name, description, value} = req.body


    if(!name){
        res.status(422).json({menssage:'O nome do produto é obrigatório'})
        return
    }
    if(!description){
        res.status(422).json({menssage:'A descrição do produto é obrigatório'})
        return
    }
    if(!value){
        res.status(422).json({menssage:'o valor do produto é obrigatório'})
        return
    }
    let valueString = value.toString()
    if(valueString !== parseInt(valueString).toString()) {
        res.status(422).json({menssage:'Insira apenas números'})
        return
    }
    let valueformart = valueString.replace(/(\d+)(\d{2})$/, "$1.$2")
    let resultvalue  = parseFloat(valueformart)

    next()
        
}
export {Validate}

  