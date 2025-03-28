const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);
