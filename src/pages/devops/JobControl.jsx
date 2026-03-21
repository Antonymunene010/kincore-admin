import React, { useState } from 'react';
import { Play, Pause, RotateCw, Trash2, Zap } from 'lucide-react';

const JobControl = () => {
    const [jobs, setJobs] = useState([
        { id: 'JOB-001', name: 'Database Backup', status: 'Running', progress: 65, type: 'System' },
        { id: 'JOB-002', name: 'Media Resizing', status: 'Paused', progress: 40, type: 'Storage' },
        { id: 'JOB-003', name: 'User Indexing', status: 'Running', progress: 88, type: 'Search' },
        { id: 'JOB-004', name: 'Billing Digest', status: 'Queued', progress: 0, type: 'Business' },
    ]);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header>
                <div className="flex items-center space-x-2 mb-1">
                    <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 uppercase tracking-widest leading-none">Processes</h2>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 uppercase tracking-widest leading-none">Management</h2>
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight">Background Job Control</h1>
            </header>

            <div className="bg-white dark:bg-brand-darkCard rounded-[2.5rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden text-left">
                <div className="p-8 pb-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-blue-50 dark:bg-blue-900/10 rounded-xl text-blue-500">
                            <Zap size={20} />
                        </div>
                        <h3 className="text-lg font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight uppercase font-black">Active Workers</h3>
                    </div>
                </div>

                <div className="p-8 pt-4 overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-100 dark:border-brand-darkBorder">
                                <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">ID</th>
                                <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Task</th>
                                <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                                <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Progress</th>
                                <th className="px-4 py-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                            {jobs.map((job) => (
                                <tr key={job.id} className="group">
                                    <td className="px-4 py-6 text-xs font-black text-gray-400">{job.id}</td>
                                    <td className="px-4 py-6">
                                        <p className="text-sm font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight">{job.name}</p>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase">{job.type}</p>
                                    </td>
                                    <td className="px-4 py-6">
                                        <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${job.status === 'Running' ? 'bg-green-100 text-green-600' :
                                                job.status === 'Paused' ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-600'
                                            }`}>
                                            {job.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-6">
                                        <div className="w-32 h-1.5 bg-gray-100 dark:bg-brand-darkBg rounded-full overflow-hidden">
                                            <div className="h-full bg-brand-orange" style={{ width: `${job.progress}%` }} />
                                        </div>
                                    </td>
                                    <td className="px-4 py-6 text-right">
                                        <div className="flex items-center justify-end space-x-2">
                                            <button className="p-2 text-gray-400 hover:text-brand-orange transition-colors"><RotateCw size={16} /></button>
                                            <button className="p-2 text-gray-400 hover:text-brand-orange transition-colors">
                                                {job.status === 'Running' ? <Pause size={16} /> : <Play size={16} />}
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                                        </div>
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

export default JobControl;
