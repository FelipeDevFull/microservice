import { Router, Request, Response } from "express";
import { NfeFactory } from "../Factory/NfeFactory"

const Routes = Router()
Routes.post("/v1/compra/nfe", (req: Request, res: Response) => NfeFactory().create(req, res))
export default Routes