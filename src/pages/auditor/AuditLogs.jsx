import React from 'react';
import { History, Search, Filter } from 'lucide-react';

const AuditLogs = () => {
    const logs = [
        { id: 'LOG-001', user: 'Admin', action: 'Login', module: 'Auth', time: '2024-01-22 10:00:05' },
        { id: 'LOG-002', user: 'DevOps', action: 'Config Change', module: 'System', time: '2024-01-22 10:15:30' },
        { id: 'LOG-003', user: 'Editor', action: 'Upload', module: 'Media', time: '2024-01-22 10:45:12' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header>
                <div className="flex items-center space-x-2 mb-1">
                    <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 uppercase tracking-widest leading-none">Security</h2>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 uppercase tracking-widest leading-none">Intelligence</h2>
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight">Access Audit Logs</h1>
            </header>

            <div className="bg-white dark:bg-brand-darkCard rounded-[2.5rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden text-left">
                <div className="p-8 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-blue-50 dark:bg-blue-900/10 rounded-xl text-blue-500">
                            <History size={20} />
                        </div>
                        <h3 className="text-lg font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight uppercase font-black">System Event Stream</h3>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input type="text" placeholder="Search events..." className="pl-12 pr-6 py-3 bg-gray-50 dark:bg-brand-darkBg border-none rounded-xl text-xs font-bold w-full sm:w-64" />
                    </div>
                </div>

                <div className="p-8 pt-4 overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-100 dark:border-brand-darkBorder">
                                <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">ID</th>
                                <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">User</th>
                                <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Action</th>
                                <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Module</th>
                                <th className="px-4 py-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                            {logs.map((log) => (
                                <tr key={log.id} className="group hover:bg-gray-50 dark:hover:bg-brand-darkBg transition-all">
                                    <td className="px-4 py-6 text-xs font-black text-gray-400">{log.id}</td>
                                    <td className="px-4 py-6 text-sm font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight">{log.user}</td>
                                    <td className="px-4 py-6 text-sm font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight">{log.action}</td>
                                    <td className="px-4 py-6">
                                        <span className="px-3 py-1 bg-gray-100 dark:bg-brand-darkBg text-gray-500 text-[10px] font-black uppercase rounded-lg">
                                            {log.module}
                                        </span>
                                    </td>
                                    <td className="px-4 py-6 text-right text-xs font-bold text-gray-400 uppercase">{log.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AuditLogs;
