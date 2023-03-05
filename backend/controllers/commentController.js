const asyncHandler = require('express-async-handler')

const Comment = require('../models/commentModel')

//@desc     Get recipe comments
//@route    GET /api/comments/:id
//@access   Public
const getRecipeComments =  asyncHandler(async (req, res) => {
    const comment = await Category.find({recipeId: req.params.id})

    res.status(200).json(comment)
})

//@desc     Add comment
//@route    POST /api/comments
//@access   Private
const addComment = asyncHandler(async (req, res) => {
    const comment = await Comment.create({
        comment: req.body.name,
        userId: req.body.userId,
        recipeId: req.body.recipeId
    })

    res.status(200).json(comment)
})

//@desc     Update comment
//@route    PUT /api/comments/:id
//@access   Private
const updateComment = asyncHandler(async (req, res) => {
    const comment = await Comment.findById(req.params.id)

    if(!comment){
        res.status(400)
        throw new Error('Comment not found')
    }
    
    //new: true - kreira ga ako ne postoji
    //const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedComment)
})

//@desc     Delete comment
//@route    DELETE /api/comments/:id
//@access   Private
const deleteComment = asyncHandler(async (req, res) => {
    const comment = await Comment.findById(req.params.id)

    if(!comment){
        res.status(400)
        throw new Error('comment not found')
    }

    await comment.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getRecipeComments,
    addComment,
    updateComment,
    deleteComment,
}