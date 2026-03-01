const express = require('express');
const router = express.Router();
const consignmentCardController = require('../controllers/consignmentController');




/*
API Endpoint to fetch all consignment cards  LOLOL SO MANY TO DO  '
router.get('/consignment-OTW',consignmentCardController.getConsignmentOTW);
*/


router.get("/consignment-count", consignmentCardController.getConsignmentCount);
module.exports = router;