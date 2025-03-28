const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://didacsolpu:solerdidac@cluster0.dbf5vy3.mongodb.net/gymDB?retryWrites=true&w=majority&appName=Cluster0');
        console.log('MongoDB conectado a gymDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
