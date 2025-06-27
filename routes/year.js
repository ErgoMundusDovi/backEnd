var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res,)=>{
    const date = new Date()
    let year= date.getFullYear()
  res.json(year);
});



module.exports = router;
