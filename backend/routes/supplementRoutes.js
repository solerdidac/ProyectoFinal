const express = require('express');
const router = express.Router();
const { getAllSupplements, createSupplement } = require('../controllers/supplementController');
router.get('/', getAllSupplements);
router.post('/', createSupplement);
module.exports = router;