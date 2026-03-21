import React from 'react';

const StatCard = ({ title, value, change, isPositive = true }) => (
    <div className="bg-[#FFF5F3] dark:bg-brand-orange/5 rounded-[1.5rem] p-8 border border-transparent dark:border-brand-darkBorder flex flex-col items-start transition-all hover:shadow-sm dark:hover:shadow-brand-orange/5">
        <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">{title}</p>
        <h3 className="text-4xl font-extrabold text-gray-900 dark:text-brand-darkText mb-2">{value}</h3>
        <p className={`text-[10px] font-extrabold ${isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
            {isPositive ? '+' : ''}{change}%
        </p>
    </div>
);

const ActivityItem = ({ icon, title, description, isLast = false }) => (
    <div className="flex items-start space-x-6 relative pb-8 group">
        {!isLast && <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gray-100 dark:bg-brand-darkBorder group-last:hidden transition-colors" />}
        <div className="z-10 w-6 h-6 rounded-full border-2 border-orange-200 dark:border-brand-orange/50 bg-white dark:bg-brand-darkCard flex items-center justify-center p-1.5 shrink-0 transition-colors">
            {icon}
        </div>
        <div className="text-left">
            <h4 className="text-sm font-extrabold text-gray-900 dark:text-brand-darkText mb-1">{title}</h4>
            <p className="text-sm text-brand-orange font-medium opacity-90">{description}</p>
        </div>
    </div>
);

const OwnerDashboard = () => {
    const activities = [
        {
            title: 'New Member Added',
            description: "Olivia Harper added to the 'Alpha' branch",
            icon: <svg className="w-full h-full text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
        },
        {
            title: 'Branch Created',
            description: 'Beta branch created by Noah Bennett',
            icon: <svg className="w-full h-full text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        },
        {
            title: 'Privacy Setting Updated',
            description: "Privacy settings for 'Gamma' branch updated",
            icon: <svg className="w-full h-full text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        },
        {
            title: 'Governance Rule Modified',
            description: "Voting threshold for rule 'X' changed",
            icon: <svg className="w-full h-full text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        },
        {
            title: 'Event Scheduled',
            description: 'Family reunion scheduled for December 2024',
            icon: <svg className="w-full h-full text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        }
    ];

    return (
        <div className="flex flex-col text-left">
            <header className="mb-10 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-brand-darkText leading-tight mb-2">Owner Dashboard</h1>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <StatCard title="Total Members" value="125" change="10" />
                <StatCard title="Active Branches" value="7" change="5" />
                <StatCard title="Pending Approvals" value="3" change="2" isPositive={false} />
                <StatCard title="Recent Privacy Alerts" value="1" change="1" />
            </div>

            {/* Governance Status */}
            <div className="mb-16">
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-brand-darkText mb-8">Governance Status</h3>
                <div className="max-w-4xl">
                    <p className="text-sm font-bold text-gray-800 dark:text-brand-darkText mb-4">Governance Health</p>
                    <div className="relative pt-1">
                        <div className="overflow-hidden h-2.5 text-xs flex rounded-full bg-orange-100 dark:bg-brand-orange/10">
                            <div style={{ width: "75%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-brand-orange"></div>
                        </div>
                    </div>
                    <p className="text-xs font-bold text-brand-orange mt-3">75%</p>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="mb-16">
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-brand-darkText mb-10">Recent Family Activity</h3>
                <div className="max-w-2xl ml-1">
                    {activities.map((activity, index) => (
                        <ActivityItem
                            key={index}
                            {...activity}
                            isLast={index === activities.length - 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OwnerDashboard;
