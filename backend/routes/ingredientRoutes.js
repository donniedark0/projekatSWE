const express = require('express')
const router = express.Router()
const {
    getIngredientsByCategory,
    addIngredient,
    updateIngredient,
    deleteIngredient
} = require('../controllers/ingredientController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').post(addIngredient)
router.route('/:id').get(getIngredientsByCategory).delete(protect, deleteIngredient).put(protect, updateIngredient)

module.exports = router