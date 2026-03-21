import React from 'react';
import { Shield, FileText, CreditCard, AlertTriangle, Eye, ArrowUpRight } from 'lucide-react';

const AuditorDashboard = () => {
    const alerts = [
        { type: 'Anomaly', message: 'High volume of exports in Admin node', priority: 'High', time: '2 mins ago' },
        { type: 'Access', message: 'Multiple failed logins - Region: AP-South', priority: 'Medium', time: '15 mins ago' },
        { type: 'Policy', message: 'Unencrypted storage tier detected', priority: 'Critical', time: '1 hour ago' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header>
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight">Audit & Compliance Hub</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Unified monitoring for security and business integrity</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {/* Compliance Overview */}
                    <div className="bg-white dark:bg-brand-darkCard p-8 rounded-[2.5rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center space-x-3">
                                <Shield size={24} className="text-brand-orange" />
                                <h2 className="text-xl font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight">Compliance Score</h2>
                            </div>
                            <span className="text-4xl font-black text-brand-orange">94%</span>
                        </div>
                        <div className="space-y-6">
                            {['Data Privacy', 'Access Control', 'Business Logic'].map((item) => (
                                <div key={item} className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                                        <span>{item}</span>
                                        <span className="text-gray-900 dark:text-brand-darkText">90%</span>
                                    </div>
                                    <div className="h-2 bg-gray-50 dark:bg-brand-darkBg rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-orange" style={{ width: '90%' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-brand-darkCard p-6 rounded-[2rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm group cursor-pointer hover:border-brand-orange/20 transition-all">
                            <div className="p-3 bg-orange-50 dark:bg-brand-orange/10 rounded-2xl text-brand-orange w-fit mb-4">
                                <CreditCard size={24} />
                            </div>
                            <h3 className="text-lg font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight">Financial Audit</h3>
                            <p className="text-xs text-gray-400 font-bold uppercase mt-1">Review billing and transactions</p>
                        </div>
                        <div className="bg-white dark:bg-brand-darkCard p-6 rounded-[2rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm group cursor-pointer hover:border-brand-orange/20 transition-all">
                            <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded-2xl text-red-500 w-fit mb-4">
                                <AlertTriangle size={24} />
                            </div>
                            <h3 className="text-lg font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight">Abuse Reports</h3>
                            <p className="text-xs text-gray-400 font-bold uppercase mt-1">12 pending investigations</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-brand-darkCard p-8 rounded-[2.5rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm">
                    <h2 className="text-xl font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight mb-6">Security Alerts</h2>
                    <div className="space-y-6">
                        {alerts.map((alert, i) => (
                            <div key={i} className="p-4 bg-gray-50 dark:bg-brand-darkBg rounded-2xl space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase ${alert.priority === 'Critical' ? 'bg-red-100 text-red-600' :
                                            alert.priority === 'High' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                                        }`}>
                                        {alert.priority}
                                    </span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">{alert.time}</span>
                                </div>
                                <p className="text-xs font-bold text-gray-900 dark:text-brand-darkText">{alert.message}</p>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-8 py-4 border-2 border-gray-100 dark:border-brand-darkBorder rounded-2xl text-[10px] font-black uppercase text-gray-400 hover:text-brand-orange hover:border-brand-orange transition-all">
                        View All Alerts
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuditorDashboard;
