const router = require('express').Router();

router.get('/comments', async (req, res) => {
    res.render('comments');
  });

  module.exports = router;
