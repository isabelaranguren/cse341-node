const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('project/admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  console.log(product)
  product.save();
  res.redirect('/project');
};
