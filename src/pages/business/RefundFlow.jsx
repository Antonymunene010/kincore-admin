import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBusiness } from '../../context/BusinessContext';
import {
    RotateCcw,
    Search,
    CreditCard,
    Calendar,
    User,
    AlertCircle,
    CheckCircle2,
    XCircle,
    MessageSquare,
    ArrowRight,
    History,
    FileText
} from 'lucide-react';

const TransactionCard = ({ tx, isSelected, onSelect }) => (
    <button
        onClick={() => onSelect(tx)}
        className={`w-full p-6 rounded-3xl border-2 text-left transition-all group ${isSelected ? 'border-brand-orange bg-orange-50/50 dark:bg-brand-orange/5' : 'border-gray-50 dark:border-brand-darkBorder hover:border-gray-200'}`}
    >
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-xl ${isSelected ? 'bg-brand-orange text-white' : 'bg-gray-100 dark:bg-brand-darkBg text-gray-400'}`}>
                    <CreditCard size={18} />
                </div>
                <span className={`text-xs font-black uppercase tracking-widest ${isSelected ? 'text-brand-orange' : 'text-gray-400'}`}>{tx.id}</span>
            </div>
            <span className="text-sm font-black text-gray-900 dark:text-brand-darkText">{tx.amount}</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Customer</p>
                <p className={`text-xs font-black uppercase tracking-tight transition-colors ${isSelected ? 'text-gray-900 dark:text-brand-darkText' : 'text-gray-600 dark:text-gray-500'}`}>{tx.customer}</p>
            </div>
            <div className="space-y-1 text-right">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Date</p>
                <p className="text-xs font-bold text-gray-400">{tx.date}</p>
            </div>
        </div>
    </button>
);

const RefundFlow = () => {
    const navigate = useNavigate();
    const { refundRequest, updateRefundRequest } = useBusiness();
    const [selectedTx, setSelectedTx] = useState(null);
    const [rejectionReason, setRejectionReason] = useState('');

    const transactions = [
        { id: 'TX-98210', customer: 'Arthur Pendragon', amount: '$149.00', date: 'Feb 01, 2024', status: 'Eligible' },
        { id: 'TX-98211', customer: 'Lancelot du Lac', amount: '$29.99', date: 'Jan 28, 2024', status: 'Eligible' },
        { id: 'TX-98212', customer: 'Guinevere Leodegrance', amount: '$59.50', date: 'Jan 15, 2024', status: 'Out of Window' },
    ];

    const handleApprove = () => {
        alert('Refund Approved and Processed.');
        updateRefundRequest({ status: 'Approved' });
        navigate('/business/billing');
    };

    const handleReject = () => {
        if (!rejectionReason) {
            alert('Please provide a reason for rejection.');
            return;
        }
        alert('Refund Request Rejected.');
        updateRefundRequest({ status: 'Rejected' });
        navigate('/business/billing');
    };

    return (
        <div className="flex flex-col min-h-[calc(100vh-100px)] max-w-4xl mx-auto w-full pb-20">
            <header className="mb-10 text-left">
                <div className="flex items-center space-x-2 mb-1">
                    <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 uppercase tracking-widest leading-none">Business Hub</h2>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 uppercase tracking-widest leading-none">Refund Flow</h2>
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight">Process Refund Request</h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Transaction Selection */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between px-2">
                        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[.25em]">Recent Transactions</h3>
                        <div className="relative group">
                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                            <input
                                type="text"
                                placeholder="Find TX..."
                                className="pl-9 pr-4 py-2 bg-gray-50 dark:bg-brand-darkBg border-none rounded-xl text-[10px] font-bold text-gray-900 dark:text-brand-darkText focus:ring-1 focus:ring-brand-orange/20 w-32"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        {transactions.map(tx => (
                            <TransactionCard
                                key={tx.id}
                                tx={tx}
                                isSelected={selectedTx?.id === tx.id}
                                onSelect={setSelectedTx}
                            />
                        ))}
                    </div>
                </div>

                {/* Refund Form */}
                <div className="lg:col-span-3">
                    {selectedTx ? (
                        <div className="bg-white dark:bg-brand-darkCard rounded-[2.5rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm p-8 sm:p-10 text-left animate-fadeIn">
                            <div className="flex items-center space-x-4 mb-10 pb-10 border-b border-gray-50 dark:border-brand-darkBorder/50">
                                <div className="w-16 h-16 bg-orange-50 dark:bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange">
                                    <RotateCcw size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-gray-900 dark:text-brand-darkText tracking-tight">Refund Application</h4>
                                    <p className="text-[10px] font-black text-brand-orange uppercase tracking-widest mt-1">Status: {selectedTx.status}</p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <section>
                                    <div className="flex items-center space-x-2 mb-4 text-brand-orange">
                                        <AlertCircle size={16} />
                                        <h5 className="text-[11px] font-black uppercase tracking-widest">Eligibility Check</h5>
                                    </div>
                                    <div className={`p-6 rounded-3xl flex items-start space-x-4 ${selectedTx.status === 'Eligible' ? 'bg-green-50/50 dark:bg-green-900/5 border border-green-100 dark:border-green-900/20' : 'bg-red-50/50 dark:bg-red-900/5 border border-red-100 dark:border-red-900/20'}`}>
                                        {selectedTx.status === 'Eligible' ? <CheckCircle2 size={24} className="text-green-500 mt-1" /> : <XCircle size={24} className="text-red-500 mt-1" />}
                                        <div>
                                            <p className={`text-sm font-black uppercase tracking-tight ${selectedTx.status === 'Eligible' ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                                                {selectedTx.status === 'Eligible' ? 'Eligible for Refund' : 'Outside Refund Window'}
                                            </p>
                                            <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mt-1 leading-relaxed">
                                                {selectedTx.status === 'Eligible'
                                                    ? 'Transaction occurred within the 30-day policy window.'
                                                    : 'This transaction exceeds the standard 30-day eligibility period.'}
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Refund Reason *</label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-5 top-6 text-gray-300" size={18} />
                                            <textarea
                                                rows={4}
                                                className="w-full pl-14 pr-6 py-6 bg-gray-50 dark:bg-brand-darkBg border-none rounded-3xl text-sm font-bold text-gray-900 dark:text-brand-darkText focus:ring-2 focus:ring-brand-orange/20 resize-none"
                                                placeholder="Briefly explain the reason for the refund..."
                                                value={refundRequest.reason}
                                                onChange={(e) => updateRefundRequest({ reason: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </section>

                                {/* Administrative Actions */}
                                <section className="pt-10 border-t border-gray-50 dark:border-brand-darkBorder space-y-6">
                                    <div className="flex items-center space-x-2 text-gray-400">
                                        <ShieldCheck size={16} />
                                        <h5 className="text-[11px] font-black uppercase tracking-widest">Admin Control</h5>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                            onClick={handleApprove}
                                            disabled={selectedTx.status !== 'Eligible'}
                                            className="flex-1 py-4 bg-green-500 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-xl shadow-green-500/20 hover:bg-green-600 active:scale-95 transition-all disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed"
                                        >
                                            Approve Refund
                                        </button>
                                        <button
                                            onClick={() => updateRefundRequest({ status: 'Reviewing' })}
                                            className="px-10 py-4 bg-red-50 dark:bg-red-950/20 text-red-500 rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-red-100 dark:hover:bg-red-900/20 transition-all border border-red-100 dark:border-red-900/10"
                                        >
                                            Reject Flow
                                        </button>
                                    </div>

                                    {refundRequest.status === 'Reviewing' && (
                                        <div className="p-8 bg-red-50/30 dark:bg-red-900/5 rounded-3xl border border-red-100 dark:border-red-900/10 space-y-6 animate-fadeIn">
                                            <div className="space-y-2">
                                                <label className="block text-[10px] font-black text-red-500 uppercase tracking-widest">Rejection Reason *</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-5 py-4 bg-white dark:bg-brand-darkCard border border-red-200 dark:border-red-900/30 rounded-2xl text-sm font-bold text-gray-900 dark:text-brand-darkText"
                                                    placeholder="Specify why the refund is being rejected..."
                                                    value={rejectionReason}
                                                    onChange={(e) => setRejectionReason(e.target.value)}
                                                />
                                            </div>
                                            <button
                                                onClick={handleReject}
                                                className="w-full py-4 bg-red-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest"
                                            >
                                                Confirm Rejection
                                            </button>
                                        </div>
                                    )}
                                </section>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-gray-50 dark:bg-brand-darkBg rounded-[2.5rem] border-2 border-dashed border-gray-100 dark:border-brand-darkBorder h-[500px] flex flex-col items-center justify-center space-y-4 p-12 text-center">
                            <div className="w-20 h-20 bg-white dark:bg-brand-darkCard rounded-3xl flex items-center justify-center text-gray-200 shadow-sm">
                                <History size={40} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-lg font-black text-gray-400 dark:text-gray-500 tracking-tight uppercase">No Transaction Selected</h4>
                                <p className="text-[10px] font-bold text-gray-300 dark:text-gray-600 leading-relaxed uppercase tracking-widest max-w-[240px]">
                                    Please select a transaction from the list on the left to initiate the refund process.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RefundFlow;
