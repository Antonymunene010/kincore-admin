import React, { useState } from 'react';

const Toggle = ({ checked = false, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        if (onChange) onChange(!isChecked);
    };

    return (
        <button
            onClick={handleToggle}
            className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-orange/20 ${isChecked ? 'bg-brand-orange' : 'bg-gray-200 dark:bg-brand-darkBg'
                }`}
        >
            <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white dark:bg-brand-darkText shadow-lg ring-0 transition duration-200 ease-in-out ${isChecked ? 'translate-x-7' : 'translate-x-0'
                    }`}
            />
        </button>
    );
};

const CouncilGovernance = () => {
    const [councilElderName, setCouncilElderName] = useState('Council Elder');
    const [councilMemberName, setCouncilMemberName] = useState('Council Member');

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left py-6 pb-20">
            <header className="mb-10 sm:mb-14">
                <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-gray-900 dark:text-brand-darkText leading-tight mb-2 transition-colors">
                    Governance & Role Labels
                </h1>
                <p className="text-sm font-bold text-brand-orange">
                    Customize how role names appear in the UI and modify family-level governance rules.
                </p>
            </header>

            {/* Desktop 2-column grid or Mobile stacked */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
                {/* Left Column: Role Labels */}
                <div className="w-full">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-brand-darkText mb-8 transition-colors">
                        Role Labels
                    </h2>
                    <div className="space-y-8">
                        <div className="w-full">
                            <label className="block text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3 ml-1">
                                Council Elder Display Name
                            </label>
                            <input
                                type="text"
                                value={councilElderName}
                                onChange={(e) => setCouncilElderName(e.target.value)}
                                className="w-full max-w-md bg-white dark:bg-brand-darkCard border border-gray-200 dark:border-brand-darkBorder rounded-xl py-4 px-5 text-sm font-bold text-gray-800 dark:text-brand-darkText outline-none focus:border-brand-orange/40 dark:focus:border-brand-orange/60 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3 ml-1">
                                Council Member Display Name
                            </label>
                            <input
                                type="text"
                                value={councilMemberName}
                                onChange={(e) => setCouncilMemberName(e.target.value)}
                                className="w-full max-w-md bg-white dark:bg-brand-darkCard border border-gray-200 dark:border-brand-darkBorder rounded-xl py-4 px-5 text-sm font-bold text-gray-800 dark:text-brand-darkText outline-none focus:border-brand-orange/40 dark:focus:border-brand-orange/60 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column: Governance Rules */}
                <div className="w-full">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-brand-darkText mb-8 transition-colors">
                        Governance Rules
                    </h2>
                    <div className="bg-white dark:bg-brand-darkCard rounded-2xl border border-gray-100 dark:border-brand-darkBorder p-6 sm:p-8 transition-colors">
                        <div className="space-y-6">
                            <div className="flex justify-between items-center py-1">
                                <span className="text-sm font-bold text-gray-700 dark:text-gray-300 pr-4 transition-colors">
                                    Family Admin can add new members
                                </span>
                                <Toggle checked={true} />
                            </div>
                            <div className="h-px bg-gray-100 dark:bg-brand-darkBorder"></div>

                            <div className="flex justify-between items-center py-1">
                                <span className="text-sm font-bold text-gray-700 dark:text-gray-300 pr-4 transition-colors">
                                    Family Admin can remove members
                                </span>
                                <Toggle checked={true} />
                            </div>
                            <div className="h-px bg-gray-100 dark:bg-brand-darkBorder"></div>

                            <div className="flex justify-between items-center py-1">
                                <span className="text-sm font-bold text-gray-700 dark:text-gray-300 pr-4 transition-colors">
                                    Family Admin can modify roles
                                </span>
                                <Toggle checked={false} />
                            </div>
                            <div className="h-px bg-gray-100 dark:bg-brand-darkBorder"></div>

                            <div className="flex justify-between items-center py-1">
                                <span className="text-sm font-bold text-gray-700 dark:text-gray-300 pr-4 transition-colors">
                                    Family Admin can modify governance rules
                                </span>
                                <Toggle checked={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Save Changes Button Area */}
            <div className="flex justify-end mt-12 sm:mt-16">
                <button className="bg-brand-orange text-white px-10 sm:px-12 py-4 rounded-2xl font-black text-sm shadow-xl shadow-brand-orange/20 hover:bg-orange-600 hover:shadow-2xl hover:shadow-brand-orange/30 transition-all active:scale-95 leading-none uppercase tracking-wider">
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default CouncilGovernance;
