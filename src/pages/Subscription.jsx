import { useNavigate } from 'react-router-dom';

const BillingRow = ({ date, amount, status }) => (
    <tr className="border-b border-gray-50 dark:border-brand-darkBorder last:border-none transition-colors">
        <td className="py-6 pr-4 text-sm font-medium text-gray-500 dark:text-gray-400">{date}</td>
        <td className="py-6 px-4 text-sm font-bold text-gray-800 dark:text-brand-darkText">${amount}</td>
        <td className="py-6 px-4">
            <span className="bg-orange-100 dark:bg-brand-orange/10 text-brand-orange px-8 py-2 rounded-2xl text-[10px] font-extrabold uppercase tracking-widest">
                {status}
            </span>
        </td>
        <td className="py-6 pl-4 text-sm font-extrabold text-gray-900 dark:text-brand-darkText cursor-pointer hover:underline">Download</td>
    </tr>
);

const Subscription = () => {
    const navigate = useNavigate();
    const billingData = [
        { date: 'June 15, 2023', amount: '19.99', status: 'Paid' },
        { date: 'May 15, 2023', amount: '19.99', status: 'Paid' },
        { date: 'April 15, 2023', amount: '19.99', status: 'Paid' },
        { date: 'March 15, 2023', amount: '19.99', status: 'Paid' },
        { date: 'February 15, 2023', amount: '19.99', status: 'Paid' },
    ];

    return (
        <div className="flex flex-col">
            <header className="mb-10 text-left">
                <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 mb-2 uppercase tracking-widest">Kinecore</h2>
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-brand-darkText mb-10">Subscription & Billing Overview</h1>

                {/* Current Plan */}
                <div className="mb-10">
                    <h3 className="text-sm font-extrabold text-gray-900 dark:text-brand-darkText mb-6">Current Plan</h3>
                    <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 max-w-2xl transition-colors">
                        <div className="flex items-center space-x-6">
                            <div className="w-14 h-14 bg-gray-50 dark:bg-brand-darkBg rounded-2xl flex items-center justify-center text-gray-400 dark:text-gray-500 shrink-0 transition-colors">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-extrabold text-gray-900 dark:text-brand-darkText">Premium Plan</h4>
                                <p className="text-sm font-medium text-gray-400 dark:text-gray-500 mt-1">Renewal Date: July 15, 2024</p>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate('/subscription/features')}
                            className="w-full sm:w-auto bg-brand-orange text-white px-8 py-2.5 rounded-xl font-bold shadow-lg shadow-brand-orange/20 hover:bg-orange-600 transition-all active:scale-95 text-xs uppercase tracking-widest"
                        >
                            View Plan
                        </button>
                    </div>
                </div>

                {/* Storage Quota */}
                <div className="mb-12">
                    <h3 className="text-sm font-extrabold text-gray-900 dark:text-brand-darkText mb-6">Storage Quota</h3>
                    <div className="flex justify-between items-end mb-4 pr-2">
                        <p className="text-sm font-bold text-gray-800 dark:text-brand-darkText uppercase tracking-widest opacity-60 dark:opacity-80">Used</p>
                        <p className="text-xs font-extrabold text-gray-900 dark:text-brand-darkText opacity-60 dark:opacity-80">60%</p>
                    </div>
                    <div className="w-full h-3 bg-gray-100 dark:bg-brand-darkBg rounded-full overflow-hidden transition-colors">
                        <div className="h-full bg-brand-dark dark:bg-brand-orange rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mt-4">600 GB / 1 TB</p>
                </div>

                {/* Billing History */}
                <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-brand-darkText mb-8">Billing History</h3>
                    <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden p-6 md:p-8 transition-colors">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[600px]">
                                <thead>
                                    <tr className="border-b border-gray-100 dark:border-brand-darkBorder text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                                        <th className="pb-6 pr-4">Date</th>
                                        <th className="pb-6 px-4">Amount</th>
                                        <th className="pb-6 px-4">Status</th>
                                        <th className="pb-6 pl-4 text-brand-orange opacity-80">Invoice</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {billingData.map((b, i) => (
                                        <BillingRow key={i} {...b} />
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

export default Subscription;
