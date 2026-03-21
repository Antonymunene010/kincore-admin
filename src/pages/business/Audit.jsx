import React from 'react';
import { Search, Download, FileText } from 'lucide-react';

const Audit = () => {
    const logs = [
        { actor: 'Liam Harper', role: 'Admin', action: 'User Login', target: 'System', timestamp: '2024-01-15 10:00 AM', reason: 'Successful login' },
        { actor: 'Noah Bennett', role: 'Editor', action: 'Content Update', target: "Article: 'Tech Trends'", timestamp: '2024-01-15 11:30 AM', reason: 'Updated article content' },
        { actor: 'Ethan Carter', role: 'Viewer', action: 'Report Access', target: "Report: 'Sales Data'", timestamp: '2024-01-15 12:45 PM', reason: 'Accessed sales report' },
        { actor: 'Lucas Foster', role: 'Admin', action: 'User Logout', target: "System", timestamp: '2024-01-15 01:20 PM', reason: 'User logout' },
        { actor: 'Jackson Green', role: 'Editor', action: 'Image Upload', target: "Article: 'New Gadgets'", timestamp: '2024-01-15 02:15 PM', reason: 'Uploaded image for article' },
        { actor: 'Aiden Hayes', role: 'Viewer', action: 'Dashboard View', target: "Dashboard", timestamp: '2024-01-15 03:00 PM', reason: 'Viewed dashboard' },
        { actor: 'Owen Ingram', role: 'Admin', action: 'Password Reset', target: "User: 'Liam Harper'", timestamp: '2024-01-15 04:00 PM', reason: 'Reset user password' },
        { actor: 'Caleb Jones', role: 'Editor', action: 'Article Publish', target: "Article: 'AI in 2024'", timestamp: '2024-01-15 05:30 PM', reason: 'Published new article' },
        { actor: 'Grayson King', role: 'Viewer', action: 'Resource Download', target: "Resource: 'User Guide'", timestamp: '2024-01-15 06:45 PM', reason: 'Downloaded user guide' },
        { actor: 'Elijah Lewis', role: 'Admin', action: 'System Shutdown', target: "System", timestamp: '2024-01-15 07:30 PM', reason: 'Initiated system shutdown' },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl pb-20 px-4 sm:px-0">
            <header className="space-y-1">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Audit & Compliance Logs</h1>
                <p className="text-sm font-semibold text-[#B28E86] dark:text-orange-900/60 transition-colors uppercase tracking-tight">Immutable audit trails for compliance and security</p>
            </header>

            {/* Controls */}
            <div className="space-y-6">
                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-orange" size={20} />
                    <input
                        type="text"
                        placeholder="Search logs"
                        className="w-full pl-12 pr-4 py-4 bg-[#FFE8E2]/30 dark:bg-brand-orange/5 border-none rounded-2xl text-sm font-semibold text-gray-700 dark:text-gray-300 placeholder:text-brand-orange/50 focus:ring-2 focus:ring-brand-orange/20 transition-all outline-none"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                        <button className="text-gray-400 dark:text-gray-600 hover:text-brand-orange transition-colors"><Download size={24} /></button>
                        <button className="text-gray-400 dark:text-gray-600 hover:text-brand-orange transition-colors"><FileText size={24} /></button>
                    </div>
                    <button className="bg-brand-orange text-white px-8 py-2.5 rounded-xl font-bold text-sm shadow-md hover:bg-[#FF5D3D] transition-all active:scale-95 flex items-center space-x-2">
                        <span>Export</span>
                    </button>
                </div>
            </div>

            {/* Audit Table */}
            <div className="bg-white dark:bg-brand-darkCard rounded-[2rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden transition-colors">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/30 dark:bg-brand-darkBg/50 border-b border-gray-100 dark:border-brand-darkBorder transition-colors">
                                <th className="px-6 py-6 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Actor</th>
                                <th className="px-6 py-6 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-6 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Action</th>
                                <th className="px-6 py-6 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Target</th>
                                <th className="px-6 py-6 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Timestamp</th>
                                <th className="px-6 py-6 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Reason</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                            {logs.map((log, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-brand-darkBg transition-colors group">
                                    <td className="px-6 py-6 text-sm font-bold text-[#D88C82] dark:text-brand-orange transition-colors">{log.actor}</td>
                                    <td className="px-6 py-6 text-sm font-bold text-[#D88C82] dark:text-brand-orange/80 transition-colors">{log.role}</td>
                                    <td className="px-6 py-6 text-sm font-bold text-[#D88C82] dark:text-brand-orange/80 transition-colors uppercase tracking-tight">{log.action}</td>
                                    <td className="px-6 py-6 text-sm font-bold text-[#D88C82] dark:text-brand-orange/80 transition-colors">{log.target}</td>
                                    <td className="px-6 py-6 text-xs font-bold text-[#D88C82] dark:text-orange-900/60 leading-relaxed w-40 transition-colors">
                                        {log.timestamp}
                                    </td>
                                    <td className="px-6 py-6 text-sm font-bold text-[#D88C82] dark:text-brand-orange/80 leading-relaxed transition-colors">
                                        {log.reason}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Audit;