import React from 'react';

const PolicyRow = ({ category, action }) => (
    <tr className="border-b border-gray-50 dark:border-brand-darkBorder last:border-none group hover:bg-orange-50/10 dark:hover:bg-brand-orange/5 active:bg-orange-50/20 transition-all">
        <td className="py-6 px-4 text-sm font-medium text-gray-400 dark:text-gray-500">{category}</td>
        <td className="py-6 px-4 text-sm font-bold text-gray-800 dark:text-brand-darkText">{action}</td>
        <td className="py-6 px-4">
            <div className="flex justify-center">
                <div className="w-5 h-5 rounded border-2 border-orange-200 dark:border-brand-darkBorder cursor-pointer hover:bg-orange-50 dark:hover:bg-brand-orange/10 transition-colors" />
            </div>
        </td>
        <td className="py-6 px-4">
            <div className="flex justify-center">
                <div className="w-5 h-5 rounded border-2 border-orange-200 dark:border-brand-darkBorder cursor-pointer hover:bg-orange-50 dark:hover:bg-brand-orange/10 transition-colors" />
            </div>
        </td>
    </tr>
);

const Policies = () => {
    const policies = [
        { category: 'User Management', action: 'New user registration' },
        { category: 'User Management', action: 'User profile update' },
        { category: 'Group Management', action: 'New group created' },
        { category: 'Group Management', action: 'Group membership change' },
        { category: 'Content Management', action: 'New content posted' },
        { category: 'Content Management', action: 'Content updated' },
        { category: 'Monetization', action: 'New purchase' },
        { category: 'Monetization', action: 'Subscription renewal' },
        { category: 'Support', action: 'New support ticket' },
        { category: 'Support', action: 'Support ticket updated' },
    ];

    return (
        <div className="flex flex-col text-left">
            <header className="mb-10 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-brand-darkText mb-4 leading-tight">Policies</h1>
                <p className="text-sm font-medium text-gray-400 dark:text-gray-500 mb-10">Manage notification policies for different user roles and actions.</p>

                {/* Search Bar */}
                <div className="relative mb-8 sm:mb-12">
                    <input
                        type="text"
                        placeholder="Search policies by category"
                        className="w-full bg-orange-50 dark:bg-brand-orange/10 border-none rounded-2xl py-4 pl-12 pr-6 text-sm font-medium text-gray-600 dark:text-brand-darkText placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand-orange/20 transition-all"
                    />
                    <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-brand-orange opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>

                <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden p-6 md:p-8 transition-colors">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left min-w-[600px]">
                            <thead>
                                <tr className="border-b border-gray-100 dark:border-brand-darkBorder text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-widest text-center">
                                    <th className="pb-6 px-4 text-left">Category</th>
                                    <th className="pb-6 px-4 text-left">Action</th>
                                    <th className="pb-6 px-4">Email</th>
                                    <th className="pb-6 px-4">Push Notification</th>
                                </tr>
                            </thead>
                            <tbody>
                                {policies.map((p, i) => (
                                    <PolicyRow key={i} {...p} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Policies;
