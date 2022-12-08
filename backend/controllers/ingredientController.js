const asyncHandler = require('express-async-handler')

const Ingredient = require('../models/ingredientModel')

//@desc     Get ingredients
//@route    GET /api/goals
//@access   Private
const getIngredients =  asyncHandler(async (req, res) => {
    const ingredients = await Ingredient.find()

    res.status(200).json(ingredients)
})

//@desc     Add ingredient
//@route    POST /api/goals
//@access   Private
const addIngredient = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const ingredient = await Ingredient.create({
        text: req.body.text
    })

    res.status(200).json(ingredient)
})

//@desc     Update ingredients
//@route    PUT /api/goals/:id
//@access   Private
const updateIngredient = asyncHandler(async (req, res) => {
    const ingredient = await Ingredient.findById(req.params.id)

    if(!ingredient){
        res.status(400)
        throw new Error('Ingredient not found')
    }
    
    //new: ture - kreira ga ako ne postoji
    const updatedIngredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedIngredient)
})

//@desc     Delete ingredient
//@route    DELETE /api/goals
//@access   Private
const deleteIngredient = asyncHandler(async (req, res) => {
    const ingredient = await Ingredient.findById(req.params.id)

    if(!ingredient){
        res.status(400)
        throw new Error('Ingredient not found')
    }

    await ingredient.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getIngredients,
    addIngredient,
    updateIngredient,
    deleteIngredient,
}