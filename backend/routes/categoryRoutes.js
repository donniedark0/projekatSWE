const express = require('express')
const router = express.Router()
const {
    getCategories,
    addCategory,
    deleteCategory,
    updateCategory
} = require('../controllers/categoryController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(getCategories).post(addCategory)
router.route('/:id').delete(deleteCategory).put(updateCategory)

module.exports = router