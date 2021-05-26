// import mongoose, { Schema } from 'mongoose';
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: 'String',
    required: true
  },
  price: 'String',
  quantity: 'String',
  description: 'String'
});


const ProductsData = mongoose.model('Products', schema);

module.exports = ProductsData;