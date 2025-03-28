const mongoose = require('mongoose');
const RoutineSchema = new mongoose.Schema({
    name: String,
    difficulty: { type: String, enum: ['basico', 'intermedio', 'experto'] },
    exercises: [String]
});
module.exports = mongoose.model('Routine', RoutineSchema);