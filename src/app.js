import express from "express"
import Controller from "./controllers/Controller.js";
import env from "../environment.env"

export const exapp = express();

const port = 3000

exapp.get('/', (req, res) => {
    res.send('Hello World!')
})

exapp.use("/controller", Controller)

exapp.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

export default exapp
