import Message from '../models/Message.js';
import nodemailer from 'nodemailer';

// Create email transporter
const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT) || 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
};

// Send email notification
const sendEmailNotification = async (messageData) => {
    try {
        const transporter = createTransporter();

        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO || 'muhammadhussaininfo1@gmail.com',
            subject: `New Contact: ${messageData.name} - ${messageData.message.substring(0, 50)}...`,
            html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 12px;">
                    <div style="border-bottom: 1px solid #333; padding-bottom: 20px; margin-bottom: 30px;">
                        <h1 style="color: #a855f7; margin: 0; font-size: 24px;">New Contact Message</h1>
                        <p style="color: #888; margin-top: 8px; font-size: 14px;">Someone reached out through your portfolio</p>
                    </div>
                    
                    <div style="background: #111; padding: 25px; border-radius: 8px; border-left: 3px solid #a855f7;">
                        <div style="margin-bottom: 20px;">
                            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0;">From</p>
                            <p style="color: #fff; font-size: 18px; margin: 5px 0 0 0; font-weight: 600;">${messageData.name}</p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0;">Email</p>
                            <p style="color: #a855f7; font-size: 16px; margin: 5px 0 0 0;">
                                <a href="mailto:${messageData.email}" style="color: #a855f7; text-decoration: none;">${messageData.email}</a>
                            </p>
                        </div>
                        
                        <div>
                            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0;">Message</p>
                            <p style="color: #ddd; font-size: 15px; margin: 10px 0 0 0; line-height: 1.7; white-space: pre-wrap;">${messageData.message}</p>
                        </div>
                    </div>
                    
                    <div style="margin-top: 30px; text-align: center;">
                        <a href="mailto:${messageData.email}" style="display: inline-block; background: linear-gradient(135deg, #a855f7, #6366f1); color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">Reply to ${messageData.name}</a>
                    </div>
                    
                    <div style="border-top: 1px solid #333; margin-top: 40px; padding-top: 20px; text-align: center;">
                        <p style="color: #666; font-size: 12px; margin: 0;">Portfolio Contact Form • ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email notification sent successfully');
        return true;
    } catch (error) {
        console.error('Error sending email:', error.message);
        return false;
    }
};

// CREATE MESSAGE (Public)
export const createMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Name, email, and message are required' });
        }

        // Save to database
        const newMessage = new Message({ name, email, message });
        const savedMessage = await newMessage.save();

        // Send email notification
        await sendEmailNotification({ name, email, message });

        res.status(201).json({ 
            success: true,
            message: 'Message sent successfully!',
            data: savedMessage 
        });
    } catch (err) {
        console.error('Error creating message:', err);
        res.status(500).json({ message: err.message });
    }
};

// GET MESSAGES (Admin only)
export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
