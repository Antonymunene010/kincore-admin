import React from 'react';

const TransactionRow = ({ date, txid, user, amount, type }) => {
    const isCredit = type === 'Credit';
    return (
        <tr className="border-b border-gray-50 dark:border-brand-darkBorder last:border-none transition-colors">
            <td className="py-6 px-4 text-xs font-medium text-gray-400 dark:text-gray-500">{date}</td>
            <td className="py-6 px-4 text-xs font-medium text-gray-400 dark:text-gray-500">{txid}</td>
            <td className="py-6 px-4 text-sm font-bold text-gray-700 dark:text-brand-darkText">{user}</td>
            <td className="py-6 px-4 text-sm font-bold text-gray-700 dark:text-brand-darkText">{isCredit ? `+${amount}` : `-${amount}`}</td>
            <td className="py-6 px-4">
                <span className={`px-8 py-2 rounded-2xl text-[10px] font-extrabold uppercase tracking-widest block text-center ${isCredit ? 'bg-orange-100 dark:bg-brand-orange/10 text-brand-orange' : 'bg-gray-100 dark:bg-brand-darkBg text-gray-400 dark:text-gray-500'}`}>
                    {type}
                </span>
            </td>
        </tr>
    );
};

const KCCCoin = () => {
    const transactions = [
        { date: '2024-01-15', txid: 'TXN12345', user: 'User123', amount: '100', type: 'Credit' },
        { date: '2024-01-14', txid: 'TXN67890', user: 'User456', amount: '50', type: 'Debit' },
        { date: '2024-01-13', txid: 'TXN11223', user: 'User789', amount: '200', type: 'Credit' },
        { date: '2024-01-12', txid: 'TXN33445', user: 'User101', amount: '75', type: 'Debit' },
        { date: '2024-01-11', txid: 'TXN55667', user: 'User112', amount: '150', type: 'Credit' },
    ];

    return (
        <div className="flex flex-col text-left">
            <header className="mb-10 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-brand-darkText mb-8 sm:mb-10 leading-tight">KCC Coin Ledger</h1>

                {/* Total Coins Card */}
                <div className="bg-orange-50 dark:bg-brand-orange/10 rounded-3xl p-6 sm:p-8 mb-10 sm:mb-12 transition-colors">
                    <p className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">Total Circulating Coins</p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-brand-darkText leading-none">1,234,567</h2>
                </div>

                {/* Distribution Chart */}
                <div className="mb-12 sm:mb-16">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-brand-darkText mb-8 sm:mb-10">Distribution by Branch</h3>
                    <p className="text-[10px] sm:text-xs font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6 sm:mb-8">Coin Distribution</p>

                    <div className="space-y-6 max-w-4xl">
                        {[
                            { label: 'Branch A', width: '95%' },
                            { label: 'Branch B', width: '60%' },
                            { label: 'Branch C', width: '85%' },
                            { label: 'Branch D', width: '15%' }
                        ].map(item => (
                            <div key={item.label} className="flex items-center">
                                <span className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 w-20 sm:w-24 shrink-0">{item.label}</span>
                                <div className="flex-1 h-2.5 bg-gray-50 dark:bg-brand-darkBg rounded-full overflow-hidden transition-colors">
                                    <div className="h-full bg-gray-200 dark:bg-brand-darkBorder rounded-full transition-all duration-1000" style={{ width: item.width }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ledger Table */}
                <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-brand-darkText mb-8 sm:mb-10">Immutable Ledger</h3>
                    <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden p-6 md:p-8 transition-colors">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[700px]">
                                <thead>
                                    <tr className="border-b border-gray-100 dark:border-brand-darkBorder text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                                        <th className="pb-6 px-4">Date</th>
                                        <th className="pb-6 px-4">Transaction ID</th>
                                        <th className="pb-6 px-4">User</th>
                                        <th className="pb-6 px-4">Amount</th>
                                        <th className="pb-6 px-4">Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map((t, i) => (
                                        <TransactionRow key={i} {...t} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default KCCCoin;
