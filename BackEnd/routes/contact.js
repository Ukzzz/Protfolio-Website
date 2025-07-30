const express = require('express');
const router = express.Router();
const { submitMessage } = require('../controllers/contactControllers');

router.post('/', submitMessage);

module.exports = router;
