const express = require('express')
const router = express.Router()
const {
    getUsersRecipes,
    addRecipe,
    updateRecipe,
    deleteRecipe,
} = require('../controllers/recipeController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').post(addRecipe)
router.route('/:id').get(getUsersRecipes).put(updateRecipe).delete(deleteRecipe)

module.exports = router