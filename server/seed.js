import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/User.js';
import connectDB from './config/db.js';

dotenv.config();

const seedAdmin = async () => {
    try {
        await connectDB();

        // Check if admin exists
        const existingAdmin = await User.findOne({ username: 'admin' });
        if (existingAdmin) {
            console.log('Admin user already exists');
            process.exit();
        }

        // Create Admin
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash('admin123', salt);

        const newAdmin = new User({
            username: 'admin',
            email: 'admin@portfolio.com',
            password: passwordHash,
            role: 'admin'
        });

        await newAdmin.save();
        console.log('Default Admin Created: admin / admin123');
        process.exit();
    } catch (error) {
        console.error('Error seeding admin:', error);
        process.exit(1);
    }
};

seedAdmin();
