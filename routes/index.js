var express = require('express');
var router = express.Router();

var data = {
  title: "Site title",
  cover: {
    content: "<h1>Simple and beautiful website template</h1>"
  },
  mainNav: [
    { label: 'About', route: '#about' },
    { label: 'Products', route: '#products' }
  ],
  about: {
    title: "About",
    content: "This site was built to show how express and EJS works together."
  },
  products: {
    title: "Products",
    content: "<p>Teste</p><p>Texto de teste da página</p>",
    list: [
      { id: 1, title: "Produto 1", description: "Esse é o primeiro produto", route: "/products/1", image: "/img/test-image.png" },
      { id: 2, title: "Produto 2", description: "Esse é o segundo produto", route: "/products/2", image: "/img/test-image.png" },
      { id: 3, title: "Produto 3", description: "Esse é o terceiro produto", route: "/products/3", image: "/img/test-image.png" },
      { id: 4, title: "Produto 4", description: "Esse é o quarto produto", route: "/products/4", image: "/img/test-image.png" },
    ]
  }
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', data);
});

module.exports = router;
