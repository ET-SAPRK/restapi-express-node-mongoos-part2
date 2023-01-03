const express = require('express')
const router = express.Router();
const Post = require('../models/post')

// GET A POST
router.get('/', async (req,res) => {
   try{
    const posts = await Post.find();
    res.json(posts)
   }catch(err){
    res.json({message: err})
   }
})

//SUBMIT A POST
router.post('/',  async (req, res) => {
    const post = new Post({
        title: req.body.title,
        decription: req.body.decription
    })
    try{
        const savePost = await post.save();
        res.json(savePost);
    } catch (err){
        res.json({message: err});
    }
})

//SPECIFIC POST
router.get('/:postId', async (req, res) => {
   try{
     const post = await Post.findById(req.params.postId)
     res.json(post)
   } catch(err) {
    res.json({message: err})
   }
})

//DELETE POST
router.delete('/:postId', async (req, res) => {
    try{
        const postRemove = await Post.remove({_id: req.params.postId})
        res.json(postRemove)
    } catch(err) {
        res.json({message: err})
    }
})

//Update a post
router.patch('/:postId', async (req, res) => {
    try{
        const postUpdate = await Post.updateOne(
            {_id: req.params.postId},
            { $set: {title: req.body.title}}
        )
        res.json(postUpdate) 
    }catch(err) {
        res.json({message: err})
    }
})

module.exports = router;