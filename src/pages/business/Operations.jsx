import React from 'react';

const KPICard = ({ title, value, color }) => (
    <div className="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm transition-all hover:shadow-md dark:shadow-brand-orange/5 flex-1 transition-colors">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1 transition-colors">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">{value}</h3>
    </div>
);

const Badge = ({ children }) => {
    const variants = {
        Pending: 'bg-[#FFF9E5] dark:bg-yellow-950/20 text-[#DAA520] dark:text-yellow-400',
        Approved: 'bg-[#EAFAEA] dark:bg-green-950/20 text-[#2E8B57] dark:text-green-400',
        Rejected: 'bg-[#FFE8E2] dark:bg-red-950/20 text-[#FF6D4D] dark:text-red-400',
        Verified: 'bg-[#EAFAEA] dark:bg-green-950/20 text-[#2E8B57] dark:text-green-400',
        Open: 'bg-[#FFE8E2] dark:bg-orange-950/20 text-[#FF6D4D] dark:text-brand-orange',
        Closed: 'bg-gray-100 dark:bg-brand-darkBg text-gray-400 dark:text-gray-500',
    };
    return (
        <span className={`px-4 py-1 rounded-full text-xs font-bold transition-colors ${variants[children] || 'bg-gray-100 dark:bg-brand-darkBg text-gray-600 dark:text-gray-400'}`}>
            {children}
        </span>
    );
};

const Operations = () => {
    const moderationQueue = [
        { id: '#12345', name: 'Premium Korean Skincare Set', seller: 'Seller A', status: 'Pending' },
        { id: '#67890', name: 'Authentic Kimchi Variety Pack', seller: 'Seller B', status: 'Approved' },
        { id: '#11223', name: 'Traditional Korean Tea Set', seller: 'Seller C', status: 'Rejected' },
    ];

    const sellerVerification = [
        { id: '#98765', type: 'Family Seller', status: 'Verified' },
        { id: '#43210', type: 'Branch Seller', status: 'Pending' },
    ];

    const disputes = [
        { id: '#54321', buyer: 'Buyer X', seller: 'Seller Y', status: 'Open' },
        { id: '#01234', buyer: 'Buyer Z', seller: 'Seller W', status: 'Closed' },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl pb-20 px-4 sm:px-0">
            <header>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Platform Operations Dashboard</h1>
            </header>

            {/* Moderation Queue */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Moderation Queue</h2>
                <div className="bg-white dark:bg-brand-darkCard rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden transition-colors">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/50 dark:bg-brand-darkBg/50 border-b border-gray-100 dark:border-brand-darkBorder transition-colors">
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Listing ID</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Product Name</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Seller</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-brand-orange uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                                {moderationQueue.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-brand-darkBg transition-colors group">
                                        <td className="px-6 py-4 text-sm font-semibold text-brand-orange">{item.id}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-brand-orange transition-colors">{item.name}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-brand-orange">{item.seller}</td>
                                        <td className="px-6 py-4">
                                            <Badge>{item.status}</Badge>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-brand-orange text-right cursor-pointer hover:underline">
                                            {item.status === 'Pending' ? 'Review' : item.status === 'Approved' ? 'View' : 'Edit'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Seller Verification */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Seller Verification</h2>
                <div className="bg-white dark:bg-brand-darkCard rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden transition-colors">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/50 dark:bg-brand-darkBg/50 border-b border-gray-100 dark:border-brand-darkBorder transition-colors">
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Seller ID</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider text-center">Seller Type</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider text-center">Verification Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-brand-orange uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                                {sellerVerification.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-brand-darkBg transition-colors group">
                                        <td className="px-6 py-4 text-sm font-semibold text-brand-orange">{item.id}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-brand-orange text-center">{item.type}</td>
                                        <td className="px-6 py-4 text-center">
                                            <Badge>{item.status}</Badge>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-brand-orange text-right cursor-pointer hover:underline">
                                            {item.status === 'Verified' ? 'View Details' : 'Verify'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Payout Overview */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Payout Overview</h2>
                <div className="flex flex-col md:flex-row gap-6">
                    <KPICard title="Settlement Status" value="95% Complete" />
                    <KPICard title="Chargebacks" value="2% Reported" />
                    <KPICard title="Refund Patterns" value="1% Anomalies" />
                </div>
            </section>

            {/* Dispute Resolution Board */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Dispute Resolution Board</h2>
                <div className="bg-white dark:bg-brand-darkCard rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden transition-colors">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/50 dark:bg-brand-darkBg/50 border-b border-gray-100 dark:border-brand-darkBorder transition-colors">
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Dispute ID</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Buyer</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Seller</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-brand-orange uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                                {disputes.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-brand-darkBg transition-colors group">
                                        <td className="px-6 py-4 text-sm font-semibold text-brand-orange">{item.id}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-brand-orange">{item.buyer}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-brand-orange">{item.seller}</td>
                                        <td className="px-6 py-4">
                                            <Badge>{item.status}</Badge>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-brand-orange text-right cursor-pointer hover:underline">
                                            {item.status === 'Open' ? 'Resolve' : 'View Details'}
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

export default Operations;