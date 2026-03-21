import React, { useState } from 'react';

const Badge = ({ children }) => {
    const variants = {
        Open: 'bg-[#FFE8E2] dark:bg-brand-orange/20 text-[#FF6D4D] dark:text-brand-orange',
        Closed: 'bg-gray-100 dark:bg-brand-darkBg text-gray-400 dark:text-gray-500',
        Harassment: 'bg-[#FFE8E2] dark:bg-red-950/20 text-[#FF6D4D] dark:text-red-400',
        Spam: 'bg-[#FFF9E5] dark:bg-yellow-950/20 text-[#DAA520] dark:text-yellow-400',
        'Hate Speech': 'bg-[#FFE8E2] dark:bg-red-950/20 text-[#FF6D4D] dark:text-red-400',
        Fraud: 'bg-[#FFF9E5] dark:bg-yellow-950/20 text-[#DAA520] dark:text-yellow-400',
        Violence: 'bg-[#FFE8E2] dark:bg-red-950/20 text-[#FF6D4D] dark:text-red-400',
    };
    return (
        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-colors ${variants[children] || 'bg-gray-100 dark:bg-brand-darkBg text-gray-600 dark:text-gray-400'}`}>
            {children}
        </span>
    );
};

const Safety = () => {
    const [activeTab, setActiveTab] = useState('Users');

    const abuseReports = [
        { id: '#12345', user: 'User: Alex', reporter: 'User: Sarah', type: 'Harassment', reason: 'Bullying and threats', status: 'Open' },
        { id: '#12346', user: 'User: Jordan', reporter: 'User: Chris', type: 'Spam', reason: 'Unsolicited content', status: 'Closed' },
        { id: '#12347', user: 'User: Taylor', reporter: 'User: Jamie', type: 'Hate Speech', reason: 'Discriminatory remarks', status: 'Open' },
        { id: '#12348', user: 'User: Casey', reporter: 'User: Drew', type: 'Fraud', reason: 'Scam attempts', status: 'Closed' },
        { id: '#12349', user: 'User: Morgan', reporter: 'User: Blake', type: 'Violence', reason: 'Threats of physical harm', status: 'Open' },
    ];

    const blocklist = [
        { id: '#U12345', username: 'User: Alex', reason: 'Violation of community guidelines' },
        { id: '#U67890', username: 'User: Jordan', reason: 'Repeated harassment reports' },
        { id: '#U11223', username: 'User: Taylor', reason: 'Spam and fraudulent activity' },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl pb-20 px-4 sm:px-0">
            <header>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Trust, Safety & Abuse Management</h1>
            </header>

            {/* Global Abuse Reports */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText leading-none transition-colors">Global Abuse Reports</h2>
                <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden transition-colors">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/30 dark:bg-brand-darkBg/50 border-b border-gray-100 dark:border-brand-darkBorder transition-colors">
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Report ID</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Reported User</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Reporter</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider text-center">Report Type</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Report Reason</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider text-center">Status</th>
                                    <th className="px-6 py-5 text-xs font-bold text-brand-orange uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                                {abuseReports.map((report, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-brand-darkBg transition-colors group">
                                        <td className="px-6 py-5 text-sm font-semibold text-[#B28E86] dark:text-orange-900/60 transition-colors uppercase">{report.id}</td>
                                        <td className="px-6 py-5 text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-brand-orange transition-colors">{report.user}</td>
                                        <td className="px-6 py-5 text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-brand-orange transition-colors">{report.reporter}</td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge>{report.type}</Badge>
                                        </td>
                                        <td className="px-6 py-5 text-xs font-semibold text-[#B28E86] dark:text-orange-900/60 leading-relaxed max-w-[180px] transition-colors">{report.reason}</td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge>{report.status}</Badge>
                                        </td>
                                        <td className="px-6 py-5 text-sm font-bold text-brand-orange text-right cursor-pointer hover:underline uppercase tracking-tight transition-all">
                                            {report.status === 'Open' ? 'Moderate' : 'View'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Technical Controls */}
            <section className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Technical Controls</h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-white dark:bg-brand-darkCard rounded-2xl border border-gray-100 dark:border-brand-darkBorder transition-colors">
                    <div>
                        <h4 className="text-sm font-bold text-gray-800 dark:text-brand-darkText transition-colors">IP Rate Limiting</h4>
                        <p className="text-xs font-semibold text-[#B28E86] dark:text-orange-900/60 mt-1 transition-colors">Limit the number of requests from a single IP address to prevent abuse.</p>
                    </div>
                    <button className="w-full sm:w-auto bg-[#FFE8E2] dark:bg-brand-orange/20 text-brand-orange px-8 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:bg-[#FFD8D2] dark:hover:bg-brand-orange/30 transition-all active:scale-95 leading-none">
                        Configure
                    </button>
                </div>
            </section>

            {/* Blocklist Manager */}
            <section className="space-y-6 pt-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Blocklist Manager</h3>

                {/* Tabs */}
                <div className="flex items-center space-x-8 border-b border-gray-100 dark:border-brand-darkBorder overflow-x-auto custom-scrollbar transition-colors">
                    {['Users', 'Families', 'IP Addresses'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 text-sm font-bold transition-all whitespace-nowrap ${activeTab === tab ? 'text-brand-orange border-b-2 border-brand-orange' : 'text-gray-400 dark:text-gray-600'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden transition-colors">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/30 dark:bg-brand-darkBg/50 border-b border-gray-100 dark:border-brand-darkBorder transition-colors">
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">User ID</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Username</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Block Reason</th>
                                    <th className="px-6 py-5 text-xs font-bold text-brand-orange uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                                {blocklist.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-brand-darkBg transition-colors group">
                                        <td className="px-6 py-5 text-sm font-semibold text-[#B28E86] dark:text-orange-900/60 uppercase transition-colors">{item.id}</td>
                                        <td className="px-6 py-5 text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-brand-orange transition-colors">{item.username}</td>
                                        <td className="px-6 py-5 text-xs font-semibold text-[#B28E86] dark:text-orange-900/60 leading-relaxed transition-colors">{item.reason}</td>
                                        <td className="px-6 py-5 text-sm font-bold text-brand-orange text-right cursor-pointer hover:underline uppercase tracking-tight transition-all">
                                            Unblock
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Safety;