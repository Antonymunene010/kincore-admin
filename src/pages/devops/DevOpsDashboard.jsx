import React from 'react';
import { Settings2, Activity, Terminal, Shield, Zap, PieChart } from 'lucide-react';

const DevOpsDashboard = () => {
    const stats = [
        { label: 'System Health', value: '99.9%', icon: Activity, color: 'text-green-500', bg: 'bg-green-50' },
        { label: 'Active Jobs', value: '12', icon: Zap, color: 'text-blue-500', bg: 'bg-blue-50' },
        { label: 'Config Changes', value: '3', icon: Settings2, color: 'text-orange-500', bg: 'bg-orange-50' },
        { label: 'Security Status', value: 'Secure', icon: Shield, color: 'text-indigo-500', bg: 'bg-indigo-50' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header>
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight">DevOps Command Center</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Monitor and manage system infrastructure</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-brand-darkCard p-6 rounded-[2rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 ${stat.bg} dark:bg-opacity-10 rounded-2xl ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                        </div>
                        <p className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{stat.label}</p>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-brand-darkText mt-1">{stat.value}</h3>
                    </div>
                ))}
            </div>

            <div className="bg-white dark:bg-brand-darkCard p-8 rounded-[2.5rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                    <Terminal size={24} className="text-brand-orange" />
                    <h2 className="text-xl font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight">System Infrastructure</h2>
                </div>
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-brand-darkBg rounded-2xl">
                            <div className="flex items-center space-x-4">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <div>
                                    <p className="text-sm font-bold text-gray-900 dark:text-brand-darkText">Worker-Node-0{i}</p>
                                    <p className="text-xs text-gray-400 font-medium">CPU: 45% | RAM: 2.4GB</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-[10px] font-black uppercase rounded-lg">Healthy</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DevOpsDashboard;
