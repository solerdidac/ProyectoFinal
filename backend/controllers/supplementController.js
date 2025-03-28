// backend/controllers/supplementController.js
const Supplement = require('../models/Supplement');

exports.getAllSupplements = async (req, res) => {
  try {
    const supplements = await Supplement.find();
    res.json(supplements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSupplement = async (req, res) => {
  try {
    const newSupp = await Supplement.create(req.body);
    res.json(newSupp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
