import express from "express";

const app = express.Router()


export function ProcessReq(req) {
    return "request processed"
}

app.get("/test", (req,res) => res.send("controller test"))

export default app
