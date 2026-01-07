import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

/* REGISTER USER */
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/* LOGGING IN */
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Find user
        const user = await User.findOne({ username: username });
        if (!user) return res.status(400).json({ msg: "User does not exist. " });

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

        // Sign token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
        
        // Remove password from response
        const userObj = user.toObject();
        delete userObj.password;

        res.status(200).json({ token, user: userObj });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
