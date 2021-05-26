const Products = require('../Model/Product');


exports.findProducts = (req, res, next) => {
  console.log('this is the first controller');
  Products.find().then((products) => {

    console.log('these are the founded products: ', products.length);
    res.status(200).json({
      success: true,
      products,
      total: products.length
    })

  }).catch(() => {
    res.status(422).json({
      success: false,
      message: 'Sorry The Products could not be found!'
    })
  })
}