const express = require('express');
const router = express.Router();
const ctrlLocations = require('../contollers/locations');
const ctrlOthers = require('../contollers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router
  .route('/location/:locationid/review/new')
  .get(ctrlLocations.addReview)
  .post(ctrlLocations.doAddReview);


/* Other pages */
router.get('/about', ctrlOthers.about)

module.exports = router;