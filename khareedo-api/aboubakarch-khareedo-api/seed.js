require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/product');
const Category = require('./models/category');
const { category, products } = require('./data');
const connectDB = require('./db');

const seedDB = async () => {
  await connectDB();

  console.log('Clearing existing data...');
  await Product.deleteMany({});
  await Category.deleteMany({});

  console.log('Inserting categories...');
  const catDocs = category.map(c => ({
    _id: c.id.toString(),
    title: c.name
  }));
  await Category.insertMany(catDocs);

  console.log('Inserting products...');
  const prodDocs = products.map(p => ({
    _id: p.id.toString(),
    title: p.title,
    img: p.img,
    price: p.price,
    category: p.category.toString(),
    rating: p.rating,
    description: p.title + ' description'
  }));
  await Product.insertMany(prodDocs);

  console.log('Database seeded successfully!');
  mongoose.connection.close();
};

seedDB().catch(err => {
  console.error(err);
  mongoose.connection.close();
});
