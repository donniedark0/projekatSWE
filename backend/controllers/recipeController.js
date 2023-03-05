const asyncHandler = require('express-async-handler')

const Recipe = require('../models/recipeModel')

//@desc     Get users recipes
//@route    GET /api/recipes/:id
//@access   Public
const getUsersRecipes =  asyncHandler(async (req, res) => {
    const recipes = await Category.find({userId: req.params.id})

    res.status(200).json(categories)
})

//@desc     Add recipe
//@route    POST /api/recipes/:id
//@access   Private
const addRecipe = asyncHandler(async (req, res) => {
    if(!req.body.name && !req.body.description && !req.body.imagePath && !req.body.ingredients && req.body.tags){
        res.status(400)
        throw new Error('Please fill all of the fields!')
    }

    const recipe = await Recipe.create({
        name: req.body.name,
        description: req.body.description,
        userId: req.body.userId,
        tags: req.body.tags,
        ingredients: req.body.ingredients,
        rating: req.body.rating,
        imagePath: req.body.imagePath
    })

    res.status(200).json(recipe)
})

//@desc     Edit recipe
//@route    PUT /api/recipes/:id
//@access   Private
const updateRecipe = asyncHandler(async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)

    if(!recipe){
        res.status(400)
        throw new Error('Recipe not found')
    }
    
    //new: true - kreira ga ako ne postoji
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedRecipe)
})

//@desc     Delete recipe
//@route    DELETE /api/recipes/:id
//@access   Private
const deleteRecipe = asyncHandler(async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)

    if(!recipe){
        res.status(400)
        throw new Error('Recipe not found')
    }

    await recipe.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    addRecipe,
    getUsersRecipes,
    updateRecipe,
    deleteRecipe
}