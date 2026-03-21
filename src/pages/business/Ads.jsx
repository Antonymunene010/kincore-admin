import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = ({ month, year }) => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div className="flex-1 min-w-[280px]">
            <h4 className="text-center font-bold text-gray-800 dark:text-brand-darkText mb-6 transition-colors">{month} {year}</h4>
            <div className="grid grid-cols-7 gap-y-4 text-center">
                {weekdays.map(d => <span key={d} className="text-[10px] font-bold text-gray-400 dark:text-gray-500 transition-colors uppercase">{d}</span>)}
                {/* Simplified calendar layout for visualization */}
                {Array.from({ length: 30 }).map((_, i) => (
                    <span key={i} className="text-xs font-bold text-gray-700 dark:text-gray-300 transition-colors">{i + 1}</span>
                ))}
            </div>
        </div>
    );
};

const Ads = () => {
    const slots = [
        { name: 'Slot 1', value: 80 },
        { name: 'Slot 2', value: 60 },
        { name: 'Slot 3', value: 95 },
        { name: 'Slot 4', value: 40 },
        { name: 'Slot 5', value: 70 },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl pb-20 px-4 sm:px-0">
            <header>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Advertising & Promotions Management</h1>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1 font-medium transition-colors">Manage ad inventory, campaign approvals, and budget tracking.</p>
            </header>

            {/* Ad Slot Inventory */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText leading-none transition-colors">Ad Slot Inventory</h2>
                <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm p-6 sm:p-10 transition-colors">
                    <div className="mb-10">
                        <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider transition-colors">Available Ad Slots</p>
                        <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-brand-darkText mt-2 transition-colors">120</h3>
                        <p className="text-xs font-bold text-brand-orange mt-2 uppercase">Total</p>
                    </div>

                    <div className="flex items-end space-x-4 sm:space-x-12 h-64 px-4 overflow-x-auto custom-scrollbar">
                        {slots.map((slot, idx) => (
                            <div key={idx} className="flex flex-col items-center space-y-4 flex-1 min-w-[60px]">
                                <div className="w-full bg-[#FFE8E2] dark:bg-brand-orange/20 rounded-t-lg relative group transition-all duration-300 hover:bg-[#FFD8D2] dark:hover:bg-brand-orange/30" style={{ height: `${slot.value}%` }}>
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#D1D1D1] dark:bg-gray-800 rounded-t-lg opacity-50"></div>
                                </div>
                                <span className="text-[10px] font-bold text-gray-700 dark:text-gray-400 transition-colors uppercase whitespace-nowrap">{slot.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Campaign Scheduler */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText leading-none transition-colors">Campaign Scheduler</h2>
                <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm p-6 sm:p-12 relative transition-colors">
                    <div className="absolute top-6 sm:top-12 left-6 sm:left-12 right-6 sm:right-12 flex justify-between items-center z-10">
                        <button className="text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"><ChevronLeft size={24} /></button>
                        <button className="text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"><ChevronRight size={24} /></button>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                        <Calendar month="July" year="2024" />
                        <Calendar month="August" year="2024" />
                    </div>
                </div>
            </section>

            {/* Budget Tracker */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText leading-none transition-colors">Budget Tracker</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="bg-[#FFE8E2]/50 dark:bg-brand-orange/10 p-6 sm:p-8 rounded-3xl border border-[#FFE8E2] dark:border-brand-orange/20 transition-colors">
                        <p className="text-xs font-bold text-brand-orange uppercase">KCC Coin Spending</p>
                        <h4 className="text-3xl font-bold text-gray-800 dark:text-brand-darkText mt-2 transition-colors">$5,000</h4>
                    </div>
                    <div className="bg-[#FFE8E2]/50 dark:bg-brand-orange/10 p-6 sm:p-8 rounded-3xl border border-[#FFE8E2] dark:border-brand-orange/20 transition-colors">
                        <p className="text-xs font-bold text-brand-orange uppercase">Credits Spending</p>
                        <h4 className="text-3xl font-bold text-gray-800 dark:text-brand-darkText mt-2 transition-colors">$2,000</h4>
                    </div>
                </div>
            </section>

            {/* Targeting Governance */}
            <section className="space-y-8">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText leading-none transition-colors">Targeting Governance</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-y-12 gap-x-12 border-t border-gray-100 dark:border-brand-darkBorder pt-8 transition-colors">
                    <div>
                        <p className="text-xs font-bold text-brand-orange uppercase mb-4">Region</p>
                        <p className="text-sm font-semibold text-[#B28E86] dark:text-orange-900/60 transition-colors">North America, Europe</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-brand-orange uppercase mb-4">Language</p>
                        <p className="text-sm font-semibold text-[#B28E86] dark:text-orange-900/60 transition-colors">English, Spanish</p>
                    </div>
                    <div className="border-l border-gray-100 dark:border-brand-darkBorder pl-12 h-full hidden lg:block transition-colors"></div>
                    <div className="border-t border-gray-100 dark:border-brand-darkBorder md:border-t-0 lg:border-t lg:pt-8 md:pt-0 transition-colors">
                        <p className="text-xs font-bold text-brand-orange uppercase mb-4">Family Type</p>
                        <div className="space-y-1">
                            <p className="text-sm font-semibold text-[#B28E86] dark:text-orange-900/60 transition-colors">Families with children,</p>
                            <p className="text-sm font-semibold text-[#B28E86] dark:text-orange-900/60 transition-colors">Single adults</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ads;