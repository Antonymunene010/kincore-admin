import React from 'react';

const FilterButton = ({ label }) => (
    <button className="px-5 py-2.5 rounded-xl border border-gray-100 dark:border-brand-darkBorder bg-white dark:bg-brand-darkCard text-[11px] font-black text-gray-800 dark:text-brand-darkText hover:border-brand-orange/30 hover:bg-orange-50/10 dark:hover:bg-brand-orange/10 transition-all shadow-xs">
        {label}
    </button>
);

const AuditLogs = () => {
    const logs = [
        { id: 1, timestamp: '2024-01-15 14:30:00', actor: 'Sophia Carter', action: 'Privacy Change', branch: 'Main Branch', ip: '192.168.1.100' },
        { id: 2, timestamp: '2024-01-15 14:25:00', actor: 'Ethan Harper', action: 'Role Edit', branch: 'Main Branch', ip: '192.168.1.101' },
        { id: 3, timestamp: '2024-01-15 14:20:00', actor: 'Olivia Bennett', action: 'Document Upload', branch: 'Main Branch', ip: '192.168.1.102' },
        { id: 4, timestamp: '2024-01-15 14:15:00', actor: 'Noah Foster', action: 'Voting Started', branch: 'Main Branch', ip: '192.168.1.103' },
        { id: 5, timestamp: '2024-01-15 14:10:00', actor: 'Ava Mitchell', action: 'Calendar Event Created', branch: 'Main Branch', ip: '192.168.1.104' },
        { id: 6, timestamp: '2024-01-15 14:05:00', actor: 'Liam Coleman', action: 'Audit Log Access', branch: 'Main Branch', ip: '192.168.1.105' },
        { id: 7, timestamp: '2024-01-15 14:00:00', actor: 'Isabella Hayes', action: 'Member Added', branch: 'Main Branch', ip: '192.168.1.106' },
        { id: 8, timestamp: '2024-01-15 13:55:00', actor: 'Jackson Reed', action: 'Document Download', branch: 'Main Branch', ip: '192.168.1.107' },
        { id: 9, timestamp: '2024-01-15 13:50:00', actor: 'Chloe Morgan', action: 'Voting Ended', branch: 'Main Branch', ip: '192.168.1.108' },
        { id: 10, timestamp: '2024-01-15 13:45:00', actor: 'Lucas Parker', action: 'Calendar Event Updated', branch: 'Main Branch', ip: '192.168.1.109' },
    ];

    return (
        <div className="max-w-6xl mx-auto text-left py-4 pb-20">
            <header className="mb-10">
                <h1 className="text-[32px] font-black text-gray-900 dark:text-brand-darkText leading-tight mb-3">Global Audit Logs</h1>
                <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 leading-relaxed max-w-2xl">
                    A detailed chronological ledger of every administrative action taken.
                </p>
            </header>

            <div className="mb-8">
                <div className="relative mb-6">
                    <input
                        type="text"
                        placeholder="Search by member, action type, or IP/Device"
                        className="w-full bg-[#FFE5DE]/40 dark:bg-brand-orange/5 border-none rounded-2xl py-5 px-14 text-xs font-bold text-gray-800 dark:text-brand-darkText outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:font-bold transition-colors"
                    />
                    <svg className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-brand-orange/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <div className="flex flex-wrap gap-4">
                    <FilterButton label="Date Range" />
                    <FilterButton label="Specific Member" />
                    <FilterButton label="High Risk Events" />
                </div>
            </div>

            <div className="bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-[2rem] overflow-hidden shadow-sm transition-colors text-left">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-[#F9FAFB]/50 dark:bg-brand-darkBg/50 border-b border-gray-50 dark:border-brand-darkBorder">
                            <tr>
                                <th className="px-8 py-5 text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest whitespace-nowrap text-left">Timestamp</th>
                                <th className="px-8 py-5 text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest whitespace-nowrap text-left">Actor (User)</th>
                                <th className="px-8 py-5 text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest whitespace-nowrap text-left">Action Type</th>
                                <th className="px-8 py-5 text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest whitespace-nowrap text-left">Branch</th>
                                <th className="px-8 py-5 text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest whitespace-nowrap text-left">IP/Device</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                            {logs.map((log) => (
                                <tr key={log.id} className="hover:bg-gray-50/50 dark:hover:bg-brand-darkBg transition-colors">
                                    <td className="px-8 py-6 text-[11px] font-black text-gray-800 dark:text-brand-darkText whitespace-nowrap font-mono">{log.timestamp}</td>
                                    <td className="px-8 py-6 text-[11px] font-black text-gray-500 dark:text-gray-400 whitespace-nowrap">{log.actor}</td>
                                    <td className="px-8 py-6 text-[11px] font-black text-gray-500 dark:text-gray-400 whitespace-nowrap">{log.action}</td>
                                    <td className="px-8 py-6 text-[11px] font-black text-gray-500 dark:text-gray-400 whitespace-nowrap">{log.branch}</td>
                                    <td className="px-8 py-6 text-[11px] font-black text-gray-500 dark:text-gray-400 whitespace-nowrap font-mono">{log.ip}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex justify-end mt-12">
                <button className="bg-brand-orange text-white px-10 py-3.5 rounded-xl font-black text-sm shadow-xl shadow-brand-orange/20 hover:bg-orange-600 transition-all active:scale-95 leading-none">
                    Export to PDF
                </button>
            </div>
        </div>
    );
};

export default AuditLogs;
