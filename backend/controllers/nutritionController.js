// backend/controllers/nutritionController.js
const Nutrition = require('../models/Nutrition');

exports.getAllNutritionPlans = async (req, res) => {
  try {
    const plans = await Nutrition.find();
    res.json(plans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createNutritionPlan = async (req, res) => {
  try {
    const newPlan = await Nutrition.create(req.body);
    res.json(newPlan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
