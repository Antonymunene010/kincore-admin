import React from 'react';

const ClaimRow = ({ member, lineage, claimedBy, claimedAt }) => (
    <tr className="border-b border-gray-50 dark:border-brand-darkBorder last:border-none transition-colors group">
        <td className="py-6 pr-4 text-sm font-medium text-gray-800 dark:text-brand-darkText group-hover:text-brand-orange transition-colors">{member}</td>
        <td className="py-6 px-4 text-sm text-gray-500 dark:text-gray-400 font-medium transition-colors uppercase tracking-tight">{lineage}</td>
        <td className="py-6 px-4 text-sm text-gray-500 dark:text-gray-400 transition-colors uppercase tracking-widest text-[10px]">{claimedBy}</td>
        <td className="py-6 px-4 text-sm text-gray-400 dark:text-gray-500 font-semibold transition-colors">{claimedAt}</td>
        <td className="py-6 pl-4 text-sm font-bold">
            <button className="text-brand-orange hover:text-orange-600 underline transition-colors uppercase tracking-tighter">Review</button>
        </td>
    </tr>
);

const ClanTreeManagement = () => {
    const claims = [
        { member: 'Ethan Harper', lineage: 'Grandfather > Father > Self', claimedBy: 'Olivia Bennett', claimedAt: '2024-01-15' },
        { member: 'Sophia Carter', lineage: 'Grandmother > Mother > Self', claimedBy: 'Liam Foster', claimedAt: '2024-02-20' },
        { member: 'Noah Parker', lineage: 'Grandfather > Father > Self', claimedBy: 'Ava Mitchell', claimedAt: '2024-03-25' },
        { member: 'Isabella Reed', lineage: 'Grandmother > Mother > Self', claimedBy: 'Lucas Hayes', claimedAt: '2024-04-30' },
        { member: 'Jackson Cole', lineage: 'Grandfather > Father > Self', claimedBy: 'Chloe Morgan', claimedAt: '2024-05-05' },
    ];

    return (
        <div className="flex flex-col">
            <div className="mb-10 text-left px-4 sm:px-0">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-brand-darkText mb-6 transition-colors">Clan Tree Management</h1>
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText mb-6 transition-colors uppercase tracking-tight border-b-2 border-brand-orange inline-block pb-1">Claim Verification Queue</h2>
            </div>

            <div className="bg-white dark:bg-brand-darkCard rounded-[2rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden p-6 sm:p-8 mb-10 transition-colors mx-4 sm:mx-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[700px]">
                        <thead>
                            <tr className="border-b border-gray-100 dark:border-brand-darkBorder text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest text-left transition-colors">
                                <th className="pb-6 pr-4">Member</th>
                                <th className="pb-6 px-4">Lineage</th>
                                <th className="pb-6 px-4">Claimed By</th>
                                <th className="pb-6 px-4">Claimed At</th>
                                <th className="pb-6 pl-4 text-brand-orange opacity-80">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {claims.map((row, i) => (
                                <ClaimRow key={i} {...row} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-4 text-left px-4 sm:px-0">
                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 mb-1 uppercase tracking-widest transition-colors">Mini Tree Preview</p>
                <h3 className="text-xl font-bold text-gray-800 dark:text-brand-darkText mb-1 transition-colors">{claims[0].member}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-8 transition-colors uppercase tracking-tight">{claims[0].lineage}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="w-full sm:w-auto bg-brand-orange text-white px-12 py-4 rounded-xl font-black text-sm shadow-xl shadow-brand-orange/20 hover:bg-orange-600 transition-all active:scale-95 leading-none uppercase tracking-widest">
                        Approve
                    </button>
                    <button className="w-full sm:w-auto bg-brand-active dark:bg-brand-orange/10 text-brand-orange px-12 py-4 rounded-xl font-black text-sm hover:bg-orange-100 dark:hover:bg-brand-orange/20 transition-all active:scale-95 leading-none uppercase tracking-widest border border-brand-orange/10 dark:border-brand-orange/20">
                        Review
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClanTreeManagement;
