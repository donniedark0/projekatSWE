const asyncHandler = require('express-async-handler')

const recipeLike = require('../models/recipeLikesModel')

//@desc     Get recipe likes
//@route    GET /api/recipeLikes/:id
//@access   Public

const getRecipeLikes = asyncHandler(async (req, res) => {
    const recipeLikes = await recipeLike.find({recipeId: req.params.id})

    res.status(200).json(recipeLikes)
})

//@desc     Add recipe like
//@route    POST /api/recipeLikes
//@access   Private
const addRecipeLike = asyncHandler(async (req, res) => {
    const recipeLike = await recipeLike.create({
        like: req.body.like,
        userId: req.body.userId,
        recipeId: req.body.recipeId
    })
})

module.exports = {
    getRecipeLikes,
    addRecipeLike
}