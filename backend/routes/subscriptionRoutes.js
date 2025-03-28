const express = require('express');
const router = express.Router();
const { getAllSubscriptions, createSubscription } = require('../controllers/subscriptionController');
router.get('/', getAllSubscriptions);
router.post('/', createSubscription);
module.exports = router;