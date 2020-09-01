const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');

const User = require('../../models/User');
const Goal = require('../../models/Goals');
//@route POST api/goals
//@desc Add goal
//@access Private
router.post('/',[ auth, [
    check('goal', 'Text is required').not().isEmpty()
]
],
async (req, res) => {
   const errors = validationResult(req);
   if(!errors.isEmpty()) {
       return res.status(400).json({errors: errors.array()});
   } 

   try {
    const user = await User.findById(req.user.id).select('-password');

    const newPost = new Goal({
        goal: req.body.goal,
        user: req.user.id
    });

    const post = await newPost.save();

    res.json(post);
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error');
   }
   
});

//@route GET api/goals
//@desc Get all goals
//@access Private
router.get('/', auth, async(req, res) => {
    try {
        const posts = await Goal.find().sort();
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
)

//@route GET api/goals/:id
//@desc Get post by id
//@access Private
router.get('/:id', auth, async(req, res) => {
    try {
        const post = await Goal.findById(req.params.id);
        if(!post) {
            return res.status(404).json({msg: 'Post not found'})
        }
        
        res.json(post);
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({msg: 'Post not found'})
        }
        res.status(500).send('Server Error');
    }
}
)

//@route DELETE api/goals/:id
//@desc Delete goals by id
//@access Private
router.delete('/:id', auth, async(req, res) => {
    try {
        const post = await Goal.findById(req.params.id);
        
        if(!post) {
            return res.status(404).json({msg: 'Post not found'})
        }

        //Check user
        if(post.user.toString() !== req.user.id) {
            return res.status(401).json({msg: 'User not authorized'})
        } 

        await post.remove();
        
        res.json({msg: 'Post removed'});
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({msg: 'Post not found'})
        }
        res.status(500).send('Server Error');
    }
}
)

module.exports = router;