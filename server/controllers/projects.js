import Project from '../models/Project.js';

// GET ALL PROJECTS
export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 }); // Newest first
        res.status(200).json(projects);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// GET SINGLE PROJECT
export const getProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findById(id);
        res.status(200).json(project);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// CREATE PROJECT
export const createProject = async (req, res) => {
    try {
        // req.body should contain all project fields
        // In a real app, you'd handle image upload via Multer/Cloudinary here or separately
        const newProject = new Project(req.body);
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

// UPDATE PROJECT
export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedProject);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// DELETE PROJECT
export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        await Project.findByIdAndDelete(id);
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
