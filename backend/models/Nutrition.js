const mongoose = require('mongoose');
const NutritionSchema = new mongoose.Schema({
    userLevel: { type: String, enum: ['basico', 'intermedio', 'experto'] },
    meals: [String]
});
module.exports = mongoose.model('Nutrition', NutritionSchema);
