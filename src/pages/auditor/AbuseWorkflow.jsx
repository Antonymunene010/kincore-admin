import React from 'react';
import { AlertTriangle, ShieldCheck, UserX, CornerUpRight } from 'lucide-react';

const AbuseWorkflow = () => {
    const cases = [
        { id: 'CASE-77', user: 'User_442', report: 'Spam Activity', status: 'In Review', urgency: 'Medium' },
        { id: 'CASE-78', user: 'Enterprise_Admin', report: 'Brute Force Attempt', status: 'Critical', urgency: 'High' },
        { id: 'CASE-79', user: 'Guest_99', report: 'Inappropriate Content', status: 'Resolved', urgency: 'Low' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header>
                <div className="flex items-center space-x-2 mb-1">
                    <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 uppercase tracking-widest leading-none">Trust & Safety</h2>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 uppercase tracking-widest leading-none">Governance</h2>
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight">Abuse Workflow</h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cases.map((c) => (
                    <div key={c.id} className="bg-white dark:bg-brand-darkCard p-8 rounded-[2.5rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm text-left">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{c.id}</span>
                            <span className={`px-3 py-1 rounded-lg text-[8px] font-black uppercase ${c.status === 'Critical' ? 'bg-red-100 text-red-600' :
                                    c.status === 'In Review' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                                }`}>
                                {c.status}
                            </span>
                        </div>
                        <h4 className="text-sm font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight mb-1">{c.user}</h4>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-relaxed mb-6">{c.report}</p>

                        <div className="flex items-center space-x-2 mt-auto pt-6 border-t border-gray-100 dark:border-brand-darkBorder">
                            <button className="flex-1 py-3 bg-gray-50 dark:bg-brand-darkBg rounded-xl text-[10px] font-black uppercase text-gray-400 hover:text-red-500 transition-all">Dismiss</button>
                            <button className="flex-1 py-3 bg-brand-orange text-white rounded-xl text-[10px] font-black uppercase shadow-sm hover:bg-orange-600 transition-all">Take Action</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AbuseWorkflow;
