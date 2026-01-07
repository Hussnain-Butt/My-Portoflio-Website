import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const removeRepoLinks = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio_admin');
        
        const result = await mongoose.connection.db.collection('projects').updateMany(
            {},
            { $set: { repo: '' } }
        );
        
        console.log('✅ Removed GitHub repo links from', result.modifiedCount, 'projects');
        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

removeRepoLinks();
