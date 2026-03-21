import React from 'react';
import { useNavigate } from 'react-router-dom';

const InputField = ({ label, placeholder, type = "text" }) => (
    <div className="space-y-1.5 flex-1">
        <label className="text-sm font-bold text-gray-800 dark:text-brand-darkText transition-colors">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-brand-darkCard border-none rounded-2xl text-sm font-medium text-gray-800 dark:text-brand-darkText focus:ring-2 focus:ring-[#FF6D4D]/20 dark:focus:ring-brand-orange/40 placeholder-gray-400 dark:placeholder-gray-600 transition-all"
        />
    </div>
);

const Badge = ({ variant, children }) => {
    const variants = {
        Paid: 'bg-[#EAFAEA] dark:bg-green-950/20 text-[#2E8B57] dark:text-green-400',
        Refunded: 'bg-[#FFE8E2] dark:bg-red-950/20 text-[#FF6D4D] dark:text-red-400',
        Pending: 'bg-[#FFF9E5] dark:bg-yellow-950/20 text-[#DAA520] dark:text-yellow-400',
    };
    return (
        <span className={`px-4 py-1 rounded-full text-xs font-bold transition-colors ${variants[children] || 'bg-gray-100 dark:bg-brand-darkBg text-gray-600 dark:text-gray-400'}`}>
            {children}
        </span>
    );
};

const Billing = () => {
    const navigate = useNavigate();
    const invoices = [
        { id: 'INV-2023-001', customer: 'Emily Carter', amount: '$199.99', status: 'Paid', method: 'Credit Card' },
        { id: 'INV-2023-002', customer: 'Owen Bennett', amount: '$99.99', status: 'Paid', method: 'PayPal' },
        { id: 'INV-2023-003', customer: 'Chloe Foster', amount: '$199.99', status: 'Refunded', method: 'Credit Card' },
        { id: 'INV-2023-004', customer: 'Ethan Harper', amount: '$99.99', status: 'Paid', method: 'PayPal' },
        { id: 'INV-2023-005', customer: 'Isabella Hayes', amount: '$199.99', status: 'Paid', method: 'Credit Card' },
    ];

    return (
        <div className="max-w-4xl space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20 px-4 sm:px-0">
            <header>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Billing & Monetization Control</h1>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1 transition-colors">Manage subscription plans, invoice history, and refunds.</p>
            </header>

            {/* Plan Management */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Plan Management</h2>
                <div className="space-y-4">
                    <InputField label="Plan Name" placeholder="Enter plan name" />
                    <InputField label="Plan Description" placeholder="Enter plan description" />
                    <div className="flex flex-col sm:flex-row gap-4">
                        <InputField label="Monthly Price" placeholder="Enter monthly price" />
                        <InputField label="Annual Price" placeholder="Enter annual price" />
                    </div>
                    <button
                        onClick={() => navigate('/business/billing/plans/create')}
                        className="bg-[#FF6D4D] text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-sm hover:bg-[#FF5D3D] transition-all active:scale-95 leading-none w-fit mt-2"
                    >
                        Create Plan
                    </button>
                </div>
            </section>

            {/* Invoice History */}
            <section className="space-y-6 pt-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Invoice History</h2>
                <div className="bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-2xl border-collapse overflow-hidden shadow-sm transition-colors">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/50 dark:bg-brand-darkBg/50 border-b border-gray-100 dark:border-brand-darkBorder transition-colors">
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Invoice ID</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Customer</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider text-right">Payment Method</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                                {invoices.map((inv, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-brand-darkBg transition-colors group">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-500 dark:text-gray-500 group-hover:text-brand-orange transition-colors">{inv.id}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-brand-orange transition-colors">{inv.customer}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-800 dark:text-brand-darkText group-hover:text-brand-orange transition-colors">{inv.amount}</td>
                                        <td className="px-6 py-4">
                                            <Badge>{inv.status}</Badge>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-500 dark:text-gray-500 text-right group-hover:text-brand-orange transition-colors">{inv.method}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Refund Manager */}
            <section className="space-y-6 pt-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Refund Manager</h2>
                <div className="space-y-4">
                    <InputField label="Invoice ID" placeholder="Enter invoice ID" />
                    <InputField label="Refund Reason" placeholder="Enter refund reason" />
                    <button
                        onClick={() => navigate('/business/billing/refunds')}
                        className="bg-[#FF6D4D] text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-sm hover:bg-[#FF5D3D] transition-all active:scale-95 leading-none w-fit mt-2"
                    >
                        Process Refund
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Billing;