const Product = require('../models/productModel');

exports.addNewProduct = async (req, res) => {
  const {
    title, price, description, category,
  } = req.body;

  const product = new Product({
    title,
    price,
    description,
    category,
  });

  await product.save();
  res.status(201).json({ product });
};

exports.allProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
};

exports.findProduct = async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  res.status(200).json({ product });
};

exports.updateProduct = async (req, res) => {
  const {
    title, price, description, category,
  } = req.body;

  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
    title, price, description, category,
  }, { new: true });
  
  return res.status(200).json({ updatedProduct });
};

exports.deleteProduct = async (req, res) => {
  await Product.findOneAndDelete({ _id: req.params.id });
  return res.status(204).json({});
};
