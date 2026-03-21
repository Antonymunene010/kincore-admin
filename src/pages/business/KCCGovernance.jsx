import React from 'react';

const Badge = ({ children }) => {
    const variants = {
        Completed: 'bg-[#EAFAEA] dark:bg-green-950/20 text-[#2E8B57] dark:text-green-400',
        Pending: 'bg-[#FFE8E2] dark:bg-red-950/20 text-[#FF6D4D] dark:text-red-400',
        Active: 'bg-[#F9F1EB] dark:bg-orange-950/20 text-[#8B4513] dark:text-orange-400',
        Inactive: 'bg-gray-100 dark:bg-brand-darkBg text-gray-400 dark:text-gray-500',
    };
    return (
        <span className={`px-4 py-1 rounded-full text-xs font-bold transition-colors ${variants[children] || 'bg-gray-100 dark:bg-brand-darkBg text-gray-600 dark:text-gray-400'}`}>
            {children}
        </span>
    );
};

const KCCGovernance = () => {
    const ledgerData = [
        { id: 'TX12345', time: '2024-01-15 10:00 AM', sender: 'Wallet A', recipient: 'Wallet B', amount: '1000 KCC', status: 'Completed' },
        { id: 'TX67890', time: '2024-01-15 10:15 AM', sender: 'Wallet C', recipient: 'Wallet D', amount: '500 KCC', status: 'Completed' },
        { id: 'TX11223', time: '2024-01-15 10:30 AM', sender: 'Wallet E', recipient: 'Wallet F', amount: '2000 KCC', status: 'Pending' },
        { id: 'TX44556', time: '2024-01-15 10:45 AM', sender: 'Wallet G', recipient: 'Wallet H', amount: '750 KCC', status: 'Completed' },
        { id: 'TX77889', time: '2024-01-15 11:00 AM', sender: 'Wallet I', recipient: 'Wallet J', amount: '1200 KCC', status: 'Completed' },
    ];

    const ruleTemplates = [
        { name: 'Distribution Policy', version: '1.2', desc: 'Defines rules for coin distribution', status: 'Active' },
        { name: 'Usage Policy', version: '2.0', desc: 'Outlines acceptable coin usage', status: 'Active' },
        { name: 'Anti-Abuse Policy', version: '1.0', desc: 'Measures to prevent coin abuse', status: 'Inactive' },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl pb-20 px-4 sm:px-0">
            <header>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">KCC Coin Governance</h1>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1 transition-colors">Manage global KCC coin governance and anti-abuse measures.</p>
            </header>

            {/* Global Ledger Monitor */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Global Ledger Monitor</h2>
                <div className="bg-white dark:bg-brand-darkCard rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden transition-colors">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/50 dark:bg-brand-darkBg/50 border-b border-gray-100 dark:border-brand-darkBorder transition-colors">
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Transaction ID</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Timestamp</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Sender</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Recipient</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                                {ledgerData.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-brand-darkBg transition-colors group">
                                        <td className="px-6 py-4 text-sm font-semibold text-brand-orange">{item.id}</td>
                                        <td className="px-6 py-4 text-xs font-semibold text-[#B28E86] dark:text-orange-900/60 leading-relaxed w-32 transition-colors">{item.time}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-brand-orange">{item.sender}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-brand-orange">{item.recipient}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-brand-orange transition-colors">{item.amount}</td>
                                        <td className="px-6 py-4">
                                            <Badge>{item.status}</Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Wallet Controls */}
            <section className="space-y-6 max-w-2xl">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Wallet Controls</h2>
                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <label className="text-sm font-bold text-gray-800 dark:text-brand-darkText transition-colors">Wallet Address</label>
                        <input
                            type="text"
                            placeholder="Enter wallet address"
                            className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-brand-darkCard border-none rounded-xl text-sm font-medium text-gray-800 dark:text-brand-darkText focus:ring-2 focus:ring-[#FF6D4D]/20 transition-all placeholder:text-gray-400 dark:placeholder-gray-600"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-bold text-gray-800 dark:text-brand-darkText transition-colors">Action</label>
                        <select className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-brand-darkCard border-none rounded-xl text-sm font-medium text-gray-800 dark:text-brand-darkText focus:ring-2 focus:ring-[#FF6D4D]/20 transition-all appearance-none cursor-pointer">
                            <option>Select action</option>
                            <option>Freeze Wallet</option>
                            <option>Thaw Wallet</option>
                            <option>Restrict Transactions</option>
                        </select>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-bold text-gray-800 dark:text-brand-darkText transition-colors">Reason</label>
                        <textarea
                            rows={4}
                            className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-brand-darkCard border-none rounded-xl text-sm font-medium text-gray-800 dark:text-brand-darkText focus:ring-2 focus:ring-[#FF6D4D]/20 transition-all placeholder:text-gray-400 dark:placeholder-gray-600 resize-none"
                            placeholder="Describe the reason for this action"
                        ></textarea>
                    </div>
                    <div className="flex justify-end pt-2">
                        <button className="bg-[#FF6D4D] text-white px-8 py-2.5 rounded-lg font-bold text-sm shadow-sm hover:bg-[#FF5D3D] transition-all active:scale-95 leading-none">
                            Submit
                        </button>
                    </div>
                </div>
            </section>

            {/* Rule Templates */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Rule Templates</h2>
                <div className="bg-white dark:bg-brand-darkCard rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden transition-colors">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/50 dark:bg-brand-darkBg/50 border-b border-gray-100 dark:border-brand-darkBorder transition-colors">
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Template Name</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Version</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Description</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-brand-orange uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                                {ruleTemplates.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-brand-darkBg transition-colors group">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-brand-orange transition-colors">{item.name}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-brand-orange">{item.version}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-[#B28E86] dark:text-orange-900/60 leading-relaxed max-w-xs transition-colors">{item.desc}</td>
                                        <td className="px-6 py-4">
                                            <Badge>{item.status}</Badge>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-brand-orange text-right cursor-pointer hover:underline transition-all">
                                            View
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

export default KCCGovernance;