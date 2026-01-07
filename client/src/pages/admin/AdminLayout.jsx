import React, { useContext } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { LayoutDashboard, FolderKanban, Mail, LogOut, ExternalLink } from 'lucide-react'

const AdminLayout = () => {
    const { logout } = useContext(AuthContext)
    const location = useLocation()

    const navItems = [
        { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/admin/projects', icon: FolderKanban, label: 'Projects' },
        { path: '/admin/messages', icon: Mail, label: 'Inbox' },
    ]

    return (
        <div className="min-h-screen bg-black text-white flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 bg-black/50 backdrop-blur-md fixed h-full z-20 hidden md:flex flex-col">
                <div className="p-6 border-b border-white/10">
                    <h2 className="text-xl font-bold tracking-tight">Admin<span className="text-purple-500">Panel</span></h2>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${location.pathname === item.path
                                    ? 'bg-purple-600 text-white'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="text-sm font-medium">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10 space-y-2">
                    <a href="/" target="_blank" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                        <span className="text-sm">View Site</span>
                    </a>
                    <button
                        onClick={logout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="text-sm">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Header (Visible only on small screens) */}
            <div className="md:hidden fixed top-0 w-full bg-black border-b border-white/10 z-20 p-4 flex justify-between items-center">
                <span className="font-bold">Admin Panel</span>
                <button onClick={logout}><LogOut className="w-5 h-5 text-red-400" /></button>
            </div>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-8 pt-20 md:pt-8 bg-neutral-900/20 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default AdminLayout
