const asyncHandler = require('express-async-handler')

//@desc     Get ingredients
//@route    GET /api/goals
//@access   Private
const getIngredients =  asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Ingredients'})
})

//@desc     Add ingredient
//@route    POST /api/goals
//@access   Private
const addIngredient = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Add Ingredient'})
})

//@desc     Update ingredients
//@route    PUT /api/goals/:id
//@access   Private
const updateIngredient = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update Ingredient ${req.params.id}`})
})

//@desc     Delete ingredient
//@route    DELETE /api/goals
//@access   Private
const deleteIngredient = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete Ingredient ${req.params.id}`})
})

module.exports = {
    getIngredients,
    addIngredient,
    updateIngredient,
    deleteIngredient,
}