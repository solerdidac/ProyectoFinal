// backend/controllers/routineController.js
const Routine = require('../models/Routine');

exports.getAllRoutines = async (req, res) => {
  try {
    const routines = await Routine.find();
    res.json(routines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createRoutine = async (req, res) => {
  try {
    const newRoutine = await Routine.create(req.body);
    res.json(newRoutine);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
