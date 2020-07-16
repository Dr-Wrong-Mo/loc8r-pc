const express = require('express');
const router = express.Router();
const ctrlLocations = require('../contollers/locations');
const ctrlOthers = require('../contollers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about)

module.exports = router;