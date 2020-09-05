const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');

const User = require('../../models/User');
const Budget = require('../../models/Budget');
//@route POST api/budget
//@desc Add a budget item 
//@access Private
router.post('/', [ auth, [
    check('item', 'Text is required').not().isEmpty(),
    check('amount', 'Number is required').isNumeric()
]
],
async (req, res) => {
    const errors = validationResult(req);
   if(!errors.isEmpty()) {
       return res.status(400).json({errors: errors.array()});
   }
   
   try {
    const user = await User.findById(req.user.id).select('-password');

    const newItem = new Budget({
        item: req.body.item,
        amount: req.body.amount,
        user: req.user.id
    });

    const item = await newItem.save();

    res.json(item);

   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error');
   }

   
});

module.exports = router;