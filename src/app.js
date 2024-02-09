import express from "express"
import {ProcessReq} from "./Controller.js";

export const exapp = express();

const port = 3000

exapp.get('/', (req, res) => {
    res.send('Hello World!')
})

exapp.get("/test", (req,res) => {
    let proc = ProcessReq(req)
    res.send(proc)
})

exapp.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = exapps;
