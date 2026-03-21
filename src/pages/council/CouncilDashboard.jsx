import React from 'react';

const StatCard = ({ label, value }) => (
    <div className="bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-[2rem] p-8 shadow-sm flex flex-col justify-center min-h-[160px] transition-colors">
        <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mb-3">{label}</p>
        <p className="text-[32px] font-black text-brand-orange">{value}</p>
    </div>
);

const CouncilDashboard = () => {
    const activities = [
        { name: 'Owen Taylor', activity: 'Updated family tree', date: '2024-01-15' },
        { name: 'Chloe Turner', activity: 'Created a new event', date: '2024-01-14' },
        { name: 'Lucas Hayes', activity: 'Uploaded a document', date: '2024-01-12' },
        { name: 'Ava Mitchell', activity: 'Added a new member', date: '2024-01-10' },
        { name: 'Jack Roberts', activity: 'Updated family branch', date: '2024-01-08' },
    ];

    return (
        <div className="max-w-6xl mx-auto text-left py-4">
            <header className="mb-14">
                <h1 className="text-[32px] font-black text-gray-900 dark:text-brand-darkText leading-tight">Dashboard</h1>
                <p className="text-xl font-bold text-gray-900 dark:text-brand-darkText mt-2">Overview</p>
            </header>

            <section className="mb-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard label="Total Members" value="125" />
                    <StatCard label="Active Branches" value="15" />
                    <StatCard label="Pending Member Approvals" value="3" />
                    <StatCard label="Recent Content Activity" value="20" />
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-brand-darkText mb-6 transition-colors">Recent Activity</h2>
                <div className="bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-[2rem] overflow-hidden shadow-sm transition-colors">
                    <table className="w-full text-left">
                        <thead className="bg-[#F9FAFB]/50 dark:bg-brand-darkBg/50 border-b border-gray-50 dark:border-brand-darkBorder transition-colors">
                            <tr>
                                <th className="px-8 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-8 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Activity</th>
                                <th className="px-8 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                            {activities.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-brand-darkBg transition-colors">
                                    <td className="px-8 py-6 text-sm font-bold text-gray-800 dark:text-brand-darkText">{item.name}</td>
                                    <td className="px-8 py-6 text-sm font-bold text-brand-orange">{item.activity}</td>
                                    <td className="px-8 py-6 text-sm font-bold text-brand-orange/80 dark:text-brand-orange/60">{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default CouncilDashboard;
