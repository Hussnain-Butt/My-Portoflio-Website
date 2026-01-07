import cloudinary from '../config/cloudinary.js';

// Upload image to Cloudinary
export const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Convert buffer to base64
        const b64 = Buffer.from(req.file.buffer).toString('base64');
        const dataURI = `data:${req.file.mimetype};base64,${b64}`;

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(dataURI, {
            folder: 'portfolio-projects',
            resource_type: 'auto',
            transformation: [
                { width: 1200, height: 800, crop: 'limit', quality: 'auto' }
            ]
        });

        res.status(200).json({
            success: true,
            url: result.secure_url,
            public_id: result.public_id
        });
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        res.status(500).json({ 
            message: 'Failed to upload image',
            error: error.message 
        });
    }
};

// Upload multiple images
export const uploadMultipleImages = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'No files uploaded' });
        }

        const uploadPromises = req.files.map(async (file) => {
            const b64 = Buffer.from(file.buffer).toString('base64');
            const dataURI = `data:${file.mimetype};base64,${b64}`;

            const result = await cloudinary.uploader.upload(dataURI, {
                folder: 'portfolio-projects',
                resource_type: 'auto',
                transformation: [
                    { width: 1200, height: 800, crop: 'limit', quality: 'auto' }
                ]
            });

            return {
                url: result.secure_url,
                public_id: result.public_id
            };
        });

        const results = await Promise.all(uploadPromises);

        res.status(200).json({
            success: true,
            images: results,
            urls: results.map(r => r.url)
        });
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        res.status(500).json({ 
            message: 'Failed to upload images',
            error: error.message 
        });
    }
};

// Delete image from Cloudinary
export const deleteImage = async (req, res) => {
    try {
        const { public_id } = req.body;

        if (!public_id) {
            return res.status(400).json({ message: 'Public ID required' });
        }

        await cloudinary.uploader.destroy(public_id);

        res.status(200).json({
            success: true,
            message: 'Image deleted successfully'
        });
    } catch (error) {
        console.error('Cloudinary delete error:', error);
        res.status(500).json({ 
            message: 'Failed to delete image',
            error: error.message 
        });
    }
};
