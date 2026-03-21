import React, { useState } from 'react';

const Badge = ({ children, color }) => {
    const colors = {
        'purple': 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400',
        'orange': 'bg-orange-100 dark:bg-brand-orange/20 text-orange-600 dark:text-brand-orange',
        'green': 'bg-green-100/50 dark:bg-green-900/30 text-green-500 dark:text-green-400',
        'red': 'bg-red-100/50 dark:bg-red-900/30 text-red-500 dark:text-red-400',
    };
    return (
        <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider transition-colors ${colors[color] || 'bg-gray-100 dark:bg-brand-darkBg text-gray-400 dark:text-gray-500'}`}>
            {children}
        </span>
    );
};

const ApprovalCard = ({ name, type, badgeColor, description, status }) => {
    return (
        <div className="bg-white dark:bg-brand-darkCard border md:border-transparent border-gray-100 dark:border-brand-darkBorder p-6 sm:p-8 rounded-[2rem] md:hover:bg-[#F9FAFB]/50 dark:md:hover:bg-brand-darkBg/50 transition-all flex flex-col md:flex-row md:items-center justify-between space-y-6 md:space-y-0 relative md:after:content-[''] md:after:absolute md:after:bottom-0 md:after:left-8 md:after:right-8 md:after:h-[1px] md:after:bg-gray-50 dark:md:after:bg-brand-darkBorder last:after:hidden group">
            <div className="flex-1 text-left">
                <div className="flex items-center space-x-4 mb-2">
                    <h4 className="text-xl font-black text-gray-900 dark:text-brand-darkText group-hover:text-brand-orange transition-colors">{name}</h4>
                    <Badge color={badgeColor}>{type}</Badge>
                </div>
                <p className="text-[15px] font-bold text-gray-400 dark:text-gray-500 transition-colors">{description}</p>
            </div>
            <div className="flex items-center sm:space-x-4 space-x-2 shrink-0 transition-all">
                {status === 'Pending' ? (
                    <>
                        <button className="flex-1 sm:flex-none bg-red-100/60 dark:bg-red-900/30 text-red-500 dark:text-red-400 px-6 sm:px-14 py-3.5 rounded-2xl font-black text-sm hover:bg-red-100 dark:hover:bg-red-900/40 transition-all active:scale-95 leading-none uppercase tracking-wider">
                            Reject
                        </button>
                        <button className="flex-1 sm:flex-none bg-green-100/60 dark:bg-green-900/30 text-green-500 dark:text-green-400 px-6 sm:px-14 py-3.5 rounded-2xl font-black text-sm hover:bg-green-100 dark:hover:bg-green-900/40 transition-all active:scale-95 leading-none uppercase tracking-wider">
                            Approve
                        </button>
                    </>
                ) : (
                    <div className={`w-full sm:w-auto text-center px-14 py-3.5 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest transition-colors ${status === 'Approved' ? 'bg-green-100 dark:bg-green-900/30 text-green-500 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-500 dark:text-red-400'}`}>
                        {status}
                    </div>
                )}
            </div>
        </div>
    );
};

const BranchApprovals = () => {
    const [activeTab, setActiveTab] = useState('All');
    const tabs = ['All', 'Pending', 'Approved', 'Rejected'];

    const requests = [
        { name: 'Priya Shah', type: 'Relation', badgeColor: 'purple', description: 'Adding spouse relation to Rahul Shah', status: 'Approved' },
        { name: 'Priya Shah', type: 'Claim', badgeColor: 'orange', description: 'Adding spouse relation to Rahul Shah', status: 'Pending' },
        { name: 'Priya Shah', type: 'Relation', badgeColor: 'purple', description: 'Adding spouse relation to Rahul Shah', status: 'Rejected' },
        { name: 'Priya Shah', type: 'Relation', badgeColor: 'purple', description: 'Adding spouse relation to Rahul Shah', status: 'Pending' },
    ];

    return (
        <div className="max-w-7xl mx-auto text-left py-4 px-4 sm:px-0">
            <header className="mb-12">
                <h1 className="text-2xl sm:text-[32px] font-black text-gray-900 dark:text-brand-darkText leading-none mb-6 sm:mb-10 transition-colors">Branch approvals</h1>
                <h2 className="text-xl font-black text-gray-900 dark:text-brand-darkText transition-colors uppercase tracking-tight">Change Requests</h2>
            </header>

            {/* Tabs */}
            <div className="relative mb-14 overflow-x-auto scrollbar-hide">
                <div className="flex items-center space-x-0 border-b border-gray-100 dark:border-brand-darkBorder min-w-max transition-colors">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 md:flex-none md:w-56 py-4.5 text-[15px] font-bold transition-all relative ${activeTab === tab ? 'text-white' : 'text-gray-900 dark:text-brand-darkText hover:text-brand-orange dark:hover:text-brand-orange'}`}
                        >
                            {activeTab === tab && (
                                <div className="absolute inset-x-0 top-0 bottom-1 bg-brand-orange rounded-xl -z-10 shadow-lg shadow-brand-orange/20" />
                            )}
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Request List */}
            <div className="space-y-4 md:space-y-0">
                {requests.filter(r => activeTab === 'All' || r.status === activeTab).map((request, idx) => (
                    <ApprovalCard key={idx} {...request} />
                ))}
            </div>
        </div>
    );
};

export default BranchApprovals;
