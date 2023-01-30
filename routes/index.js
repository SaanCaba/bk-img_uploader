const {Router} = require('express');

const router= Router()


const uploadImage = require('./uploadImage')

router.use('/uploadImage', uploadImage)

module.exports = router;