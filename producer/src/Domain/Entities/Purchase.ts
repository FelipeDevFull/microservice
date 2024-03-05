import { randomUUID } from 'node:crypto'


interface IPurchaseData {
  name: string             
  description: string         
  resultvalue: number
}

export class PurchaseData {
  idpurchase?: string
  name: string             
  description: string         
  value: number

 private constructor({name, description, resultvalue}: IPurchaseData){
    this.idpurchase = randomUUID()
    this.name = name 
    this.description = description
    this.value = resultvalue
  }

  static async create({name, description, value}: PurchaseData) {
    let valueString  = value.toString()
    let valueformart = valueString.replace(/(\d+)(\d{2})$/, "$1.$2")
    let resultvalue  = parseFloat(valueformart)
    const Purchase_Data = new PurchaseData({name, description, resultvalue})
    return Purchase_Data
  }
}
  