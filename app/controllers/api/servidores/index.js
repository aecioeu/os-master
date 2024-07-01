const express = require('express');
const router = express.Router();


var pool = require("../../../config/pool-factory");

// Estrutura /API/SERVIDORES


router.get('/search', async function (req, res) {

    const term = req.query.term  ? req.query.term : ' '

    let rows = await pool.query("SELECT * FROM servidores WHERE registration LIKE ? OR name LIKE ? LIMIT 50", [`%${term}%`, `%${term}%`]);
      if (rows.length > 0) return   res.json(rows);
      return res.json({status: "Sorry! Not found."});

})




router.get('/about', function (req, res) {
  res.send('About this Api');

})

module.exports = router;