var express = require('express');
var router = express.Router();

var data = {
  title: "Site title",
  tagLine: "Main Tagline",
  mainNav: [
    { label: 'Teste', link: '#about' },
    { label: 'Teste', link: '#about' }
  ],
  about: {
    title: "About",
    content: "This site was built to show how express and EJS works together."
  },
  products: {
    title: "Products",
    content: "<p>Teste</p><p>Texto de teste da página</p>"
  }
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', data);
});

module.exports = router;
