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

module.exports = router;