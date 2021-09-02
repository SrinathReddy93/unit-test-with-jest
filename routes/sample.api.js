const { Router } = require('express');
const router = Router();

router.get('/welcome', (req, res) => res.send({message:'Welcome'}));

module.exports = router;