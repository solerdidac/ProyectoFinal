const express = require('express');
const router = express.Router();
const { getAllNutritionPlans, createNutritionPlan } = require('../controllers/nutritionController');
router.get('/', getAllNutritionPlans);
router.post('/', createNutritionPlan);
module.exports = router;