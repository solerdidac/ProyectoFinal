// backend/controllers/subscriptionController.js
const Subscription = require('../models/Subscription');

exports.getAllSubscriptions = async (req, res) => {
  try {
    const subs = await Subscription.find();
    res.json(subs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSubscription = async (req, res) => {
  try {
    const newSub = await Subscription.create(req.body);
    res.json(newSub);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
