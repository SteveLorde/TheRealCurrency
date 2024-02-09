import express from "express"

export const exapp = express();

const port = 3000

exapp.get('/', (req, res) => {
    res.send('Hello World!')
})

exapp.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})