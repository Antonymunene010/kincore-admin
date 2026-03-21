import React from 'react';

const StatusPill = ({ status }) => {
    const isActive = status === 'Active';
    return (
        <span className={`px-4 py-1.5 rounded-full text-[11px] font-black tracking-wide transition-colors ${isActive ? 'bg-[#FFE5DE] dark:bg-brand-orange/20 text-brand-orange' : 'bg-gray-100 dark:bg-brand-darkBg text-gray-400 dark:text-gray-500'}`}>
            {status}
        </span>
    );
};

const CouncilMembers = () => {
    const members = [
        { name: 'Clara Bennett', branch: 'Alpha', role: 'Administrator', status: 'Active', lastLogin: '2024-01-15' },
        { name: 'Owen Carter', branch: 'Beta', role: 'Member', status: 'Active', lastLogin: '2024-01-10' },
        { name: 'Emma Foster', branch: 'Gamma', role: 'Member', status: 'Active', lastLogin: '2024-01-05' },
        { name: 'Lucas Hayes', branch: 'Delta', role: 'Member', status: 'Inactive', lastLogin: '2023-12-20' },
        { name: 'Chloe Hughes', branch: 'Alpha', role: 'Member', status: 'Active', lastLogin: '2024-01-12' },
        { name: 'Ryan Murphy', branch: 'Beta', role: 'Member', status: 'Active', lastLogin: '2024-01-08' },
        { name: 'Lily Powell', branch: 'Gamma', role: 'Member', status: 'Active', lastLogin: '2024-01-02' },
        { name: 'Caleb Reed', branch: 'Delta', role: 'Member', status: 'Inactive', lastLogin: '2023-12-15' },
        { name: 'Zoe Coleman', branch: 'Alpha', role: 'Member', status: 'Active', lastLogin: '2024-01-09' },
        { name: 'Elijah Brooks', branch: 'Beta', role: 'Member', status: 'Active', lastLogin: '2024-01-06' },
    ];

    return (
        <div className="max-w-6xl mx-auto text-left py-4 pb-24 relative">
            <header className="mb-10">
                <h1 className="text-[32px] font-black text-gray-900 dark:text-brand-darkText leading-tight mb-2">Global Members Management</h1>
                <p className="text-xs font-bold text-brand-orange">Manage all members across your entire lineage</p>
            </header>

            <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
                <div className="relative w-full md:w-[480px]">
                    <input
                        type="text"
                        placeholder="Search members"
                        className="w-full bg-[#EEEEEE] dark:bg-brand-darkCard border-none rounded-xl py-4 px-14 text-[13px] font-bold text-gray-800 dark:text-brand-darkText outline-none placeholder:text-gray-400 dark:placeholder:text-gray-600 transition-colors"
                    />
                    <svg className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <button className="bg-[#FFE5DE] dark:bg-brand-orange/10 text-gray-900 dark:text-brand-darkText px-5 py-2.5 rounded-xl font-black text-[11px] flex items-center space-x-2 border border-orange-50/50 dark:border-brand-darkBorder hover:bg-orange-100/50 dark:hover:bg-brand-orange/20 transition-all w-fit">
                    <span>Filter by Branch</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </button>
            </div>

            <div className="bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-[2.5rem] overflow-hidden shadow-sm transition-colors">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#F9FAFB]/50 dark:bg-brand-darkBg/50 border-b border-gray-50 dark:border-brand-darkBorder transition-colors">
                            <tr>
                                <th className="px-8 py-5 text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Name</th>
                                <th className="px-8 py-5 text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Branch</th>
                                <th className="px-8 py-5 text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Role</th>
                                <th className="px-8 py-5 text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Status</th>
                                <th className="px-8 py-5 text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Last Login</th>
                                <th className="px-8 py-5 text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                            {members.map((member, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-brand-darkBg transition-colors">
                                    <td className="px-8 py-6 text-[13px] font-bold text-gray-800 dark:text-brand-darkText">{member.name}</td>
                                    <td className="px-8 py-6 text-[13px] font-bold text-gray-500 dark:text-gray-400">{member.branch}</td>
                                    <td className="px-8 py-6 text-[13px] font-bold text-gray-500 dark:text-gray-400">{member.role}</td>
                                    <td className="px-8 py-6">
                                        <StatusPill status={member.status} />
                                    </td>
                                    <td className="px-8 py-6 text-[13px] font-bold text-gray-400 dark:text-gray-500">{member.lastLogin}</td>
                                    <td className="px-8 py-6 text-right pr-12">
                                        <button className="text-brand-orange font-black text-[13px] hover:underline transition-all">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex justify-end mt-12">
                <button className="bg-brand-orange text-white px-8 py-3.5 rounded-xl font-black text-sm shadow-xl shadow-brand-orange/20 hover:bg-orange-600 transition-all active:scale-95 leading-none w-fit">
                    Add New Member
                </button>
            </div>
        </div>
    );
};

export default CouncilMembers;
