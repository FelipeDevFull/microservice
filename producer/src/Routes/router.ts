import { Router, Request, Response } from "express";
import { RegisterPurchaseFactory } from "../Factory/RegisterPurchaseFactory"

import { Validate } from "../Middleware/ValidateRegisterPurchase"

const Routes = Router()
Routes.post("/v1/compra/register", Validate,(req: Request, res: Response) => RegisterPurchaseFactory().create(req, res))
export default Routes