import React, { useState, useEffect, useContext, useRef } from 'react'
import { Plus, Pencil, Trash2, X, Save, Loader2, Star, ExternalLink, Github, Upload, Image as ImageIcon } from 'lucide-react'
import { AuthContext } from '../../context/AuthContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-neutral-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <h2 className="text-xl font-bold text-white">{title}</h2>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <X className="w-5 h-5 text-gray-400" />
                    </button>
                </div>
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                    {children}
                </div>
            </div>
        </div>
    )
}

// Image Upload Component
const ImageUpload = ({ label, value, onChange, token, multiple = false }) => {
    const [uploading, setUploading] = useState(false)
    const fileInputRef = useRef(null)

    const handleUpload = async (e) => {
        const files = e.target.files
        if (!files || files.length === 0) return

        try {
            setUploading(true)

            if (multiple) {
                const formData = new FormData()
                Array.from(files).forEach(file => {
                    formData.append('images', file)
                })

                const res = await axios.post(`${API_URL}/upload/multiple`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                })

                if (res.data.success) {
                    // Append new URLs to existing ones
                    const currentUrls = value ? value.split('\n').filter(Boolean) : []
                    const newUrls = [...currentUrls, ...res.data.urls]
                    onChange(newUrls.join('\n'))
                    toast.success(`${res.data.urls.length} images uploaded!`)
                }
            } else {
                const formData = new FormData()
                formData.append('image', files[0])

                const res = await axios.post(`${API_URL}/upload/single`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                })

                if (res.data.success) {
                    onChange(res.data.url)
                    toast.success('Image uploaded!')
                }
            }
        } catch (error) {
            console.error('Upload error:', error)
            toast.error(error.response?.data?.message || 'Failed to upload image')
        } finally {
            setUploading(false)
            if (fileInputRef.current) {
                fileInputRef.current.value = ''
            }
        }
    }

    return (
        <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
            <div className="space-y-2">
                {/* Preview */}
                {value && !multiple && (
                    <div className="relative w-32 h-24 rounded-lg overflow-hidden bg-white/10">
                        <img src={value} alt="Preview" className="w-full h-full object-cover" />
                        <button
                            type="button"
                            onClick={() => onChange('')}
                            className="absolute top-1 right-1 p-1 bg-black/50 rounded-full hover:bg-red-500 transition-colors"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    </div>
                )}

                {value && multiple && (
                    <div className="flex flex-wrap gap-2">
                        {value.split('\n').filter(Boolean).map((url, i) => (
                            <div key={i} className="relative w-20 h-16 rounded-lg overflow-hidden bg-white/10">
                                <img src={url} alt={`Preview ${i + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                )}

                {/* Upload Button */}
                <div className="flex items-center gap-3">
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleUpload}
                        accept="image/*"
                        multiple={multiple}
                        className="hidden"
                    />
                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm disabled:opacity-50"
                    >
                        {uploading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Uploading...
                            </>
                        ) : (
                            <>
                                <Upload className="w-4 h-4" />
                                {multiple ? 'Upload Images' : 'Upload Image'}
                            </>
                        )}
                    </button>
                    <span className="text-xs text-gray-500">or paste URL below</span>
                </div>

                {/* URL Input */}
                {multiple ? (
                    <textarea
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none font-mono text-sm"
                        placeholder="https://example.com/img1.png&#10;https://example.com/img2.png"
                    />
                ) : (
                    <input
                        type="url"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="https://example.com/image.png"
                    />
                )}
            </div>
        </div>
    )
}

// Project Form Component
const ProjectForm = ({ project, onSubmit, onCancel, loading, token }) => {
    const [formData, setFormData] = useState({
        title: project?.title || '',
        description: project?.description || '',
        challenge: project?.challenge || '',
        solution: project?.solution || '',
        impact: project?.impact || '',
        role: project?.role || '',
        year: project?.year || new Date().getFullYear().toString(),
        client: project?.client || '',
        timeline: project?.timeline || '',
        tags: project?.tags?.join(', ') || '',
        img: project?.img || '',
        gallery: project?.gallery?.join('\n') || '',
        repo: project?.repo || '',
        liveDemo: project?.liveDemo || '',
        isFeatured: project?.isFeatured || false
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Process tags and gallery
        const processedData = {
            ...formData,
            tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
            gallery: formData.gallery.split('\n').map(url => url.trim()).filter(Boolean)
        }

        onSubmit(processedData)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Title *</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Project Title"
                />
            </div>

            {/* Role & Year */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Role</label>
                    <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Full Stack Engineer"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Year</label>
                    <input
                        type="text"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="2025"
                    />
                </div>
            </div>

            {/* Client & Timeline */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Client</label>
                    <input
                        type="text"
                        name="client"
                        value={formData.client}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Client Name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Timeline</label>
                    <input
                        type="text"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Ongoing (2+ Months)"
                    />
                </div>
            </div>

            {/* Description */}
            <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Brief project description..."
                />
            </div>

            {/* Challenge */}
            <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Challenge</label>
                <textarea
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="What was the main challenge?"
                />
            </div>

            {/* Solution */}
            <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Solution</label>
                <textarea
                    name="solution"
                    value={formData.solution}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="How did you solve it?"
                />
            </div>

            {/* Impact */}
            <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Impact</label>
                <textarea
                    name="impact"
                    value={formData.impact}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="What was the impact/result?"
                />
            </div>

            {/* Tags */}
            <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Tags (comma separated)</label>
                <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="React, Node.js, MongoDB"
                />
            </div>

            {/* Main Image Upload */}
            <ImageUpload
                label="Main Image"
                value={formData.img}
                onChange={(url) => setFormData(prev => ({ ...prev, img: url }))}
                token={token}
                multiple={true}
            />

            {/* Gallery Upload */}
            <ImageUpload
                label="Gallery Images"
                value={formData.gallery}
                onChange={(urls) => setFormData(prev => ({ ...prev, gallery: urls }))}
                token={token}
                multiple={true}
            />

            {/* Repo & Live Demo */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">GitHub Repo</label>
                    <input
                        type="url"
                        name="repo"
                        value={formData.repo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="https://github.com/..."
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Live Demo</label>
                    <input
                        type="url"
                        name="liveDemo"
                        value={formData.liveDemo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="https://example.com"
                    />
                </div>
            </div>

            {/* Featured Checkbox */}
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    name="isFeatured"
                    id="isFeatured"
                    checked={formData.isFeatured}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-white/20 bg-black/50 text-purple-500 focus:ring-purple-500"
                />
                <label htmlFor="isFeatured" className="text-gray-300 flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    Featured Project
                </label>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors disabled:opacity-50"
                >
                    {loading ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Saving...
                        </>
                    ) : (
                        <>
                            <Save className="w-4 h-4" />
                            Save Project
                        </>
                    )}
                </button>
            </div>
        </form>
    )
}

const ProjectManager = () => {
    const { token } = useContext(AuthContext)
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [editingProject, setEditingProject] = useState(null)
    const [deleteConfirm, setDeleteConfirm] = useState(null)

    // Fetch projects
    const fetchProjects = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${API_URL}/projects`)
            setProjects(res.data)
        } catch (error) {
            console.error('Error fetching projects:', error)
            toast.error('Failed to load projects')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    // Create project
    const handleCreate = async (data) => {
        try {
            setSaving(true)
            await axios.post(`${API_URL}/projects`, data, {
                headers: { Authorization: `Bearer ${token}` }
            })
            toast.success('Project created successfully!')
            setShowModal(false)
            fetchProjects()
        } catch (error) {
            console.error('Error creating project:', error)
            toast.error(error.response?.data?.message || 'Failed to create project')
        } finally {
            setSaving(false)
        }
    }

    // Update project
    const handleUpdate = async (data) => {
        try {
            setSaving(true)
            await axios.patch(`${API_URL}/projects/${editingProject._id}`, data, {
                headers: { Authorization: `Bearer ${token}` }
            })
            toast.success('Project updated successfully!')
            setEditingProject(null)
            fetchProjects()
        } catch (error) {
            console.error('Error updating project:', error)
            toast.error(error.response?.data?.message || 'Failed to update project')
        } finally {
            setSaving(false)
        }
    }

    // Delete project
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/projects/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            toast.success('Project deleted successfully!')
            setDeleteConfirm(null)
            fetchProjects()
        } catch (error) {
            console.error('Error deleting project:', error)
            toast.error(error.response?.data?.message || 'Failed to delete project')
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
            </div>
        )
    }

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white">Project Manager</h1>
                    <p className="text-gray-400 mt-1">{projects.length} projects in database</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    Add Project
                </button>
            </div>

            {/* Projects Table */}
            {projects.length === 0 ? (
                <div className="bg-white/5 border border-white/10 p-12 rounded-xl text-center">
                    <p className="text-gray-400 mb-4">No projects found</p>
                    <button
                        onClick={() => setShowModal(true)}
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                        Add your first project
                    </button>
                </div>
            ) : (
                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-black/30">
                            <tr>
                                <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Project</th>
                                <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
                                <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Year</th>
                                <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {projects.map((project) => (
                                <tr key={project._id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={project.img}
                                                alt={project.title}
                                                className="w-12 h-12 rounded-lg object-cover bg-white/10"
                                            />
                                            <div>
                                                <p className="font-medium text-white">{project.title}</p>
                                                <p className="text-sm text-gray-500">{project.client}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-400 text-sm">{project.role}</td>
                                    <td className="px-6 py-4 text-gray-400 text-sm">{project.year}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            {project.isFeatured && (
                                                <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs">
                                                    <Star className="w-3 h-3" />
                                                    Featured
                                                </span>
                                            )}
                                            {project.liveDemo && (
                                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="p-1 hover:text-purple-400 text-gray-500 transition-colors">
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                            {project.repo && (
                                                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="p-1 hover:text-purple-400 text-gray-500 transition-colors">
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => setEditingProject(project)}
                                                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => setDeleteConfirm(project)}
                                                className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-gray-400 hover:text-red-400"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Add Modal */}
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add New Project">
                <ProjectForm
                    onSubmit={handleCreate}
                    onCancel={() => setShowModal(false)}
                    loading={saving}
                    token={token}
                />
            </Modal>

            {/* Edit Modal */}
            <Modal isOpen={!!editingProject} onClose={() => setEditingProject(null)} title="Edit Project">
                <ProjectForm
                    project={editingProject}
                    onSubmit={handleUpdate}
                    onCancel={() => setEditingProject(null)}
                    loading={saving}
                    token={token}
                />
            </Modal>

            {/* Delete Confirmation */}
            <Modal isOpen={!!deleteConfirm} onClose={() => setDeleteConfirm(null)} title="Delete Project">
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                        <Trash2 className="w-8 h-8 text-red-500" />
                    </div>
                    <p className="text-white mb-2">Are you sure you want to delete</p>
                    <p className="text-purple-400 font-bold text-lg mb-6">"{deleteConfirm?.title}"?</p>
                    <p className="text-gray-400 text-sm mb-6">This action cannot be undone.</p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setDeleteConfirm(null)}
                            className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => handleDelete(deleteConfirm._id)}
                            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                        >
                            Delete Project
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ProjectManager
