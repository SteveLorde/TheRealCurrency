import {exapp} from "./app"

exapp.post('/', (req, res) => {
    res.send('Hello World!')
})
