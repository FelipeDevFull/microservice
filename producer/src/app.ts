import express from 'express'
import Router from "./Routes/router"
const app = express()

//CONFIG JSON URL,
app.use(express.json())

//ROUTER_API
app.use(Router)

export {app}