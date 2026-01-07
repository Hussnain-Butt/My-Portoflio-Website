import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Total Projects</h3>
                    <p className="text-4xl font-bold text-white">12</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Unread Messages</h3>
                    <p className="text-4xl font-bold text-purple-400">3</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Total Views</h3>
                    <p className="text-4xl font-bold text-blue-400">1.2k</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
