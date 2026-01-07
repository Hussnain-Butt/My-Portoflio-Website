import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, X, Loader2 } from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState('idle') // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const response = await fetch(`${API_URL}/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            })

            const result = await response.json()

            if (response.ok && result.success) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                setStatus('error')
                setTimeout(() => setStatus('idle'), 5000)
            }
        } catch (error) {
            console.error('Error sending message:', error)
            setStatus('error')
            setTimeout(() => setStatus('idle'), 5000)
        }
    }

    const [focused, setFocused] = useState('')

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
        >
            {/* Name Input */}
            <div className="relative">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    required
                    className={`w-full bg-transparent border-b ${focused === 'name' ? 'border-purple-500' : 'border-white/10'
                        } py-4 text-white placeholder-gray-600 focus:outline-none transition-colors duration-300 text-base`}
                />
            </div>

            {/* Email Input */}
            <div className="relative">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    required
                    className={`w-full bg-transparent border-b ${focused === 'email' ? 'border-purple-500' : 'border-white/10'
                        } py-4 text-white placeholder-gray-600 focus:outline-none transition-colors duration-300 text-base`}
                />
            </div>

            {/* Message Input */}
            <div className="relative">
                <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    required
                    rows={3}
                    className={`w-full bg-transparent border-b ${focused === 'message' ? 'border-purple-500' : 'border-white/10'
                        } py-4 text-white placeholder-gray-600 focus:outline-none transition-colors duration-300 text-base resize-none`}
                />
            </div>

            {/* Submit Button */}
            <motion.button
                type="submit"
                disabled={status === 'loading'}
                className="group flex items-center gap-4 pt-4 disabled:opacity-50"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
            >
                <span className="text-white text-base font-medium group-hover:text-purple-400 transition-colors duration-300">
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                </span>

                {status === 'loading' ? (
                    <Loader2 className="w-5 h-5 text-white animate-spin" />
                ) : (
                    <ArrowRight className="w-5 h-5 text-white group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                )}
            </motion.button>

            {/* Status Messages */}
            <AnimatePresence>
                {status === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 text-purple-400 py-4"
                    >
                        <Check className="w-5 h-5" />
                        <span className="text-sm">Message sent. I'll respond within 24 hours.</span>
                    </motion.div>
                )}

                {status === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 text-red-400 py-4"
                    >
                        <X className="w-5 h-5" />
                        <span className="text-sm">Something went wrong. Try again or email me directly.</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.form>
    )
}

export default ContactForm
