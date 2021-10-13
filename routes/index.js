const router = require('express').Router();


router.use('/', require('./homePage'))
router.use('/', require('./addItem'))
router.use('/', require('./deleteItem'))
router.use('/',require('./customList'))

module.exports = router;