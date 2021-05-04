const express = require('express')
const validator = require("brazil-banks-validators")
const app = express()
const port = 3001

app.get('/:banco/:agencia/:conta/:digito', async (req, res) => {

    try {
        const response = await validator.validateBankPromise(req.params.banco, req.params.agencia, null, req.params.conta, req.params.digito, 0, "", true)
        res.send(response)
        
    } catch (error) {
        console.error
        res.send(error)
    }


})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})