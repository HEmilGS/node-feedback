const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackControllers');

router.get('/:id', feedbackController.getFeedbackById);

module.exports = router;