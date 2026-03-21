import React from 'react';
import { CreditCard, Download, Search } from 'lucide-react';

const BillingView = () => {
    const transactions = [
        { id: 'TXN-901', org: 'Tech Corp', amount: '$499.00', status: 'Paid', date: '2024-01-20' },
        { id: 'TXN-902', org: 'Global Inc', amount: '$1,299.00', status: 'Pending', date: '2024-01-21' },
        { id: 'TXN-903', org: 'Family Hub', amount: '$29.00', status: 'Paid', date: '2024-01-21' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header>
                <div className="flex items-center space-x-2 mb-1">
                    <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 uppercase tracking-widest leading-none">Financial</h2>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 uppercase tracking-widest leading-none">Auditing</h2>
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight">View Billing</h1>
            </header>

            <div className="bg-white dark:bg-brand-darkCard rounded-[2.5rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden">
                <div className="p-8 pb-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-orange-50 dark:bg-brand-orange/10 rounded-xl text-brand-orange">
                            <CreditCard size={20} />
                        </div>
                        <h3 className="text-lg font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight uppercase font-black">Transaction Logs</h3>
                    </div>
                    <button className="flex items-center space-x-2 px-6 py-2 bg-gray-50 dark:bg-brand-darkBg rounded-xl text-xs font-black uppercase text-gray-400 hover:text-brand-orange transition-all">
                        <Download size={14} />
                        <span>Export CSV</span>
                    </button>
                </div>

                <div className="p-8 pt-4 overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-100 dark:border-brand-darkBorder">
                                <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">ID</th>
                                <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Organization</th>
                                <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Amount</th>
                                <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                                <th className="px-4 py-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                            {transactions.map((txn) => (
                                <tr key={txn.id}>
                                    <td className="px-4 py-6 text-xs font-black text-gray-400">{txn.id}</td>
                                    <td className="px-4 py-6 text-sm font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight">{txn.org}</td>
                                    <td className="px-4 py-6 text-sm font-black text-gray-900 dark:text-brand-darkText">{txn.amount}</td>
                                    <td className="px-4 py-6">
                                        <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${txn.status === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                                            }`}>
                                            {txn.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-6 text-right text-xs font-bold text-gray-400 uppercase">{txn.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BillingView;
