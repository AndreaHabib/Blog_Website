const express = require('express')
const router = express.Router();

// Comment Model
const Comment = require('../../models/commentSchema');

// @route GET api/comments
// @desc  GET All Comments
// @access Public
router.get('/', (req,res) => {
    Comment.find()
    .sort({date: -1})
    .then(Comments => res.json(Comments) ) 
}) 


// @route POST api/comments
// @desc  Create A Comment
// @access Public
router.post('/', (req,res) => {
    const newComment = new Comment({
        name: req.body.name
    })    
    newComment.save().then(Comment => res.json(Comment))
}) 

// @route DELETE api/comments/:id
// @desc  DELETE An Comment
// @access Public
router.delete('/:id', (req,res) => {
    Comment.findById(req.params.id)
    .then(Comment => Comment.remove().then(()=> res.json({success: true})))
    .catch(err => res.status(404).json({success:false}))
})


module.exports = router;