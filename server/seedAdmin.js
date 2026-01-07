import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

// Admin credentials - Change these before running!
const ADMIN_CREDENTIALS = {
    username: 'admin',
    email: 'muhammadhussaininfo1@gmail.com',
    password: '6qVvAcuxei(a%!r',  // Change this to a strong password
    role: 'admin'
};

const seedAdmin = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ MongoDB Connected');

        // Check if admin already exists
        const existingAdmin = await User.findOne({ 
            $or: [
                { email: ADMIN_CREDENTIALS.email },
                { username: ADMIN_CREDENTIALS.username }
            ]
        });

        if (existingAdmin) {
            console.log('⚠️  Admin user already exists!');
            console.log('   Email:', existingAdmin.email);
            console.log('   Username:', existingAdmin.username);
            await mongoose.connection.close();
            process.exit(0);
        }

        // Hash password
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(ADMIN_CREDENTIALS.password, salt);

        // Create admin user
        const adminUser = new User({
            username: ADMIN_CREDENTIALS.username,
            email: ADMIN_CREDENTIALS.email,
            password: hashedPassword,
            role: ADMIN_CREDENTIALS.role
        });

        await adminUser.save();

        console.log('');
        console.log('🎉 Admin user created successfully!');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('   Username:', ADMIN_CREDENTIALS.username);
        console.log('   Email:   ', ADMIN_CREDENTIALS.email);
        console.log('   Password:', ADMIN_CREDENTIALS.password);
        console.log('   Role:    ', ADMIN_CREDENTIALS.role);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('');
        console.log('⚠️  IMPORTANT: Change the password after first login!');
        console.log('');

        await mongoose.connection.close();
        process.exit(0);

    } catch (error) {
        console.error('❌ Error creating admin:', error.message);
        await mongoose.connection.close();
        process.exit(1);
    }
};

seedAdmin();
