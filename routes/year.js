var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res,)=>{
    
  res.json({year: "2025"});
});



module.exports = router;
