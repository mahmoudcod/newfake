const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Save the new user
        user = new User({
            email,
            password,
        });

        await user.save();
        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
