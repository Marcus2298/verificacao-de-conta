const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Oinnos Bank Validation API",
        version: "0.0.1"
    });
});

router.get('/banco/agencia/conta', async(req, res) => {
           
                try {
                     237 == new Bank(
                        237,
                        3726,
                        null,
                        "0127039",
                        7
                    )
                    res.send("Banco Valido")

                } catch (error) {
                    res.send(error)
                    console.log(error)
                }
            });

        module.exports = router;