const router = require('express').Router();

router.get('/blogs', async (req, res) => {
    res.render('blogs');
  });

  module.exports = router;