const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Oinnos Bank Validation API",
        version: "0.0.1"
    });
});

router.get('/:banco/:conta/:digito', async (req, res) => {


    res.send({req.params.banco, req.params.conta, req.params.digito})

});

module.exports = router;