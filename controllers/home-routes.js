const router = require('express').Router();

router.get('/', async (req, res)=> {
    res.render('homepage', {title: 'main'});
  });


router.get('/login', (req, res) => {
if (req.session.loggedIn) {
    res.redirect('/');
    return;
}
res.render('login');
});

router.get('/blogs', async (req, res) => {
  res.render('blogs');
});

router.get('/comments', async (req, res) => {
  res.render('comments');
});


module.exports = router;