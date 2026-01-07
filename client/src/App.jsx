import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import HomePage from './pages/HomePage'
import ProjectDetails from './pages/ProjectDetails'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'

// Admin Imports
import Login from './pages/admin/Login'
import AdminLayout from './pages/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import ProjectManager from './pages/admin/ProjectManager'
import Inbox from './pages/admin/Inbox'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'

function App() {
  const location = useLocation()
  // Loading state
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check session storage to see if user has already visited
    const hasVisited = sessionStorage.getItem('visited')

    if (hasVisited) {
      setLoading(false)
    }
  }, [])

  const handleLoaderComplete = () => {
    setLoading(false)
    sessionStorage.setItem('visited', 'true')
  }

  return (
    <AuthProvider>
      <ScrollToTop />
      <ScrollProgress />
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={handleLoaderComplete} />
        ) : (
          <div className="bg-black min-h-screen text-white selection:bg-purple-500/30 selection:text-white">
            <Routes location={location} key={location.pathname}>
              {/* Public Routes */}
              <Route
                path="/"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <HomePage />
                  </motion.div>
                }
              />
              <Route
                path="/project/:id"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectDetails />
                  </motion.div>
                }
              />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<Login />} />

              <Route path="/admin" element={<ProtectedRoute />}>
                <Route element={<AdminLayout />}>
                  <Route index element={<Navigate to="dashboard" replace />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="projects" element={<ProjectManager />} />
                  <Route path="messages" element={<Inbox />} />
                </Route>
              </Route>

            </Routes>
          </div>
        )}
      </AnimatePresence>

      <ToastContainer position="bottom-right" theme="dark" />
    </AuthProvider>
  )
}

export default App
