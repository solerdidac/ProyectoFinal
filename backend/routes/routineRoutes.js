const express = require('express');
const router = express.Router();
const { getAllRoutines, createRoutine } = require('../controllers/routineController');
router.get('/', getAllRoutines);
router.post('/', createRoutine);
module.exports = router;