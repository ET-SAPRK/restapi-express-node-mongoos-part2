const express = require('express')
const router = express.Router();

router.get('/', (req,res) => {
    res.send('We ARE ON POST');
})

module.exports = router;