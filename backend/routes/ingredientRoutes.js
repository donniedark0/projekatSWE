const express = require('express')
const router = express.Router()
const {
    getIngredients,
    addIngredient,
    updateIngredient,
    deleteIngredient
} = require('../controllers/ingredientController')


router.route('/').get(getIngredients).post(addIngredient)
router.route('/:id').delete(deleteIngredient).put(updateIngredient)

module.exports = router