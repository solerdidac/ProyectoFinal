
const mongoose = require('mongoose');

const SupplementSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});
module.exports = mongoose.model('Supplement', SupplementSchema);