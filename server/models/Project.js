import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    challenge: String,
    solution: String,
    impact: String,
    role: String,
    year: String,
    client: String,
    timeline: String,
    tags: [String],
    img: String, // Main image URL (Cloudinary)
    gallery: [String], // Array of image URLs
    repo: String,
    liveDemo: String,
    isFeatured: {
        type: Boolean,
        default: false
    },
    order: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;
