const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: String,
    stock: Number,
    price: Number,
    type: { type: String, enum: ['ropa', 'accesorio'] }
});
module.exports = mongoose.model('Product', ProductSchema);