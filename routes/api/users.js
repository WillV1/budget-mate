const express = require('express');
const router = express.Router();
var cors = require('cors');
router.use(cors());
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

//@route POST api/users
//@desc test route
//@access Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
], 
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {name, email, password} = req.body
    
    try {
    //See if user exists
        let user = await User.findOne({email});

        if(user) {
            return res.status(400).json({errors: [{msg: 'User already exists'}]});
        }
    //Encrypt password
        user = new User({
            name, email, password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);
        await user.save();

    //Return jsonwebtoken

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, process.env.jwtSecret,
        {expiresIn: 36000}, 
        (err, token) => {
            if(err) throw err;
            res.json({token})
        })

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
    
});

module.exports = router;
