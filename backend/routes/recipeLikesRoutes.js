const express = require('express')
const { get } = require('express/lib/response')
const router = express.Router()
const {
    getRecipeLikes,
    addRecipeLike,

} = require('../controllers/recipeLikesController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').post(addRecipeLike)
router.route('/:id').get(getRecipeLikes)

module.exports = router