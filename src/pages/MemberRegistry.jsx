import React from 'react';
import { useNavigate } from 'react-router-dom';

const MemberRow = ({ name, branch, generation, status }) => {
    const navigate = useNavigate();
    return (
        <tr className="border-b border-gray-100 dark:border-brand-darkBorder last:border-none transition-colors">
            <td className="py-6 pr-4 text-sm font-medium text-gray-800 dark:text-brand-darkText">{name}</td>
            <td className="py-6 px-4 text-sm text-gray-500 dark:text-gray-400">{branch}</td>
            <td className="py-6 px-4 text-sm text-gray-400 dark:text-gray-500 font-bold">{generation}</td>
            <td className="py-6 px-4">
                <span className={`px-5 py-1.5 rounded-2xl text-[10px] uppercase font-extrabold tracking-wider ${status === 'Active' ? 'bg-brand-success text-brand-successText dark:bg-emerald-400/10 dark:text-emerald-400' : 'bg-brand-error text-brand-errorText dark:bg-rose-400/10 dark:text-rose-400'}`}>
                    {status}
                </span>
            </td>
            <td className="py-6 pl-4 text-xs font-bold space-x-2">
                <button
                    onClick={() => navigate('/member-registry/view')}
                    className="text-gray-900 dark:text-brand-darkText underline opacity-80 hover:opacity-100 transition-opacity"
                >
                    View Profile
                </button>
                <span className="dark:text-gray-600">|</span>
                <button
                    onClick={() => navigate('/member-registry/edit-lineage')}
                    className="text-gray-900 dark:text-brand-darkText underline opacity-80 hover:opacity-100 transition-opacity"
                >
                    Edit Lineage
                </button>
            </td>
        </tr>
    );
};

const MemberRegistry = () => {
    const navigate = useNavigate();
    const members = [
        { name: 'Owen Harper', branch: 'North', generation: '2nd', status: 'Active' },
        { name: 'Chloe Bennett', branch: 'South', generation: '1st', status: 'Active' },
        { name: 'Caleb Turner', branch: 'East', generation: '3rd', status: 'Inactive' },
        { name: 'Emily Hayes', branch: 'West', generation: '2nd', status: 'Active' },
        { name: 'Lucas Foster', branch: 'North', generation: '1st', status: 'Active' },
        { name: 'Hannah Baker', branch: 'South', generation: '3rd', status: 'Inactive' },
        { name: 'Nathan Reed', branch: 'East', generation: '2nd', status: 'Active' },
        { name: 'Grace Powell', branch: 'West', generation: '1st', status: 'Active' },
        { name: 'Elijah Ford', branch: 'North', generation: '3rd', status: 'Inactive' },
        { name: 'Sophia Mitchell', branch: 'South', generation: '2nd', status: 'Active' },
    ];

    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText mb-8">Member Registry & Claims Queue</h1>

            {/* Pending Claims Notification */}
            <h2 className="text-lg font-bold text-gray-800 dark:text-brand-darkText mb-4">Pending Claims</h2>
            <div className="bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 transition-colors">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-brand-darkBg rounded-xl flex items-center justify-center text-gray-400 dark:text-gray-500 shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-gray-800 dark:text-brand-darkText">Claims</h4>
                        <p className="text-sm font-medium text-gray-400 dark:text-gray-500">You have 3 pending claims to review.</p>
                    </div>
                </div>
                <button
                    onClick={() => navigate('/clan-tree')}
                    className="w-full sm:w-auto bg-gray-100 dark:bg-brand-darkBg text-gray-700 dark:text-brand-darkText px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-200 dark:hover:bg-brand-darkBorder transition-colors"
                >
                    View Claims
                </button>
            </div>

            {/* Member Registry Section */}
            <h2 className="text-lg font-bold text-gray-800 dark:text-brand-darkText mb-4">Member Registry</h2>

            {/* Search Bar */}
            <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-brand-orange/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="Search members"
                    className="w-full bg-brand-active dark:bg-brand-orange/10 border-transparent rounded-full px-16 py-4 focus:ring-0 outline-none text-brand-orange font-medium placeholder-brand-orange/40 text-sm md:text-base transition-colors"
                />
            </div>

            {/* Filters */}
            <div className="flex overflow-x-auto pb-4 sm:pb-0 space-x-4 mb-8 no-scrollbar">
                <button className="px-6 py-2 bg-gray-100 dark:bg-brand-darkCard rounded-xl text-sm font-bold text-gray-600 dark:text-gray-400 shadow-sm border border-gray-50 dark:border-brand-darkBorder whitespace-nowrap hover:bg-gray-200 dark:hover:bg-brand-darkBorder transition-colors">Branch</button>
                <button className="px-6 py-2 bg-gray-100 dark:bg-brand-darkCard rounded-xl text-sm font-bold text-gray-600 dark:text-gray-400 shadow-sm border border-gray-50 dark:border-brand-darkBorder whitespace-nowrap hover:bg-gray-200 dark:hover:bg-brand-darkBorder transition-colors">Generation</button>
                <button className="px-6 py-2 bg-gray-100 dark:bg-brand-darkCard rounded-xl text-sm font-bold text-gray-600 dark:text-gray-400 shadow-sm border border-gray-50 dark:border-brand-darkBorder whitespace-nowrap hover:bg-gray-200 dark:hover:bg-brand-darkBorder transition-colors">Status</button>
            </div>

            {/* Registry Table */}
            <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden p-6 transition-colors">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[700px]">
                        <thead>
                            <tr className="border-b border-gray-100 dark:border-brand-darkBorder text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                                <th className="pb-4 pr-4">Name</th>
                                <th className="pb-4 px-4">Branch</th>
                                <th className="pb-4 px-4">Generation</th>
                                <th className="pb-4 px-4">Status</th>
                                <th className="pb-4 pl-4 text-brand-orange/80">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.map((m, i) => (
                                <MemberRow key={i} {...m} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MemberRegistry;
