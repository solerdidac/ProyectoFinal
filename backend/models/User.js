const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    level: { type: String, enum: ['basico', 'intermedio', 'experto'], default: 'basico' }
});
module.exports = mongoose.model('User', UserSchema);