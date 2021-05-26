const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const faker = require('faker')
const productRoutes = require('./Routes/ProductsRoutes');
const productsData = require('./Model/Product');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// const some = (req, res, next) => {
//   console.log('............................: ', faker.finance.amount(100, 5000, 0));

//   console.log(`${faker.address.secondaryAddress()}-${faker.address.streetAddress()}-${faker.address.streetName()}`);

//   // userId = req.params.id;
//   let name, price, quantity, description;
//   const dataToBeSaved = []

//   for (let i = 0; i < 10; i++) {
//     price = faker.finance.amount(10, 5000, 0);
//     quantity = faker.finance.amount(10, 5000, 0);
//     name = faker.name.findName();
//     description = `${faker.address.secondaryAddress()}-${faker.address.streetAddress()}-${faker.address.streetName()}`;
//     const data = {
//       name,
//       price,
//       quantity,
//       description
//     }
//     dataToBeSaved.push(data)
//   }
//   console.log({ dataToBeSaved })

//   productsData.insertMany(dataToBeSaved);
//   next();
// }

app.use("/v1", productRoutes);

app.use((req, res, next) => {
  res.status(422).json({ success: false, message: 'Fetched failed' })
})

mongoose.connect('mongodb://localhost/material_shopping_back-end').then(() => {
  app.listen(8080);
  console.log('connected to the database')
}).catch((err) => {
  console.log('conncetion to the database failed: ', err)
})