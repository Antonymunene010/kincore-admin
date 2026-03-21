import React from 'react';

const RuleCard = ({ number }) => (
    <div className="mb-6">
        <label className="block text-xs font-black text-gray-900 dark:text-brand-darkText mb-3 ml-1">Rule {number}</label>
        <div className="bg-[#F9FAFB] dark:bg-brand-darkBg border border-gray-100 dark:border-brand-darkBorder rounded-2xl h-32 w-full transition-all hover:bg-white dark:hover:bg-brand-darkCard hover:border-orange-100 dark:hover:border-brand-orange/30 shadow-xs focus-within:ring-4 focus-within:ring-orange-50 dark:focus-within:ring-brand-orange/5 focus-within:border-brand-orange/20 dark:focus-within:border-brand-orange/40 overflow-hidden">
            <textarea className="w-full h-full bg-transparent p-5 text-sm font-bold text-gray-800 dark:text-brand-darkText outline-none resize-none placeholder:text-gray-300 dark:placeholder:text-gray-600"></textarea>
        </div>
    </div>
);

const AuthoritySlider = ({ label }) => (
    <div className="mb-8">
        <label className="block text-xs font-bold text-gray-900 dark:text-brand-darkText mb-4">{label}</label>
        <div className="relative w-full h-1.5 bg-gray-100 dark:bg-brand-darkBorder rounded-full transition-colors">
            <div className="absolute top-0 left-0 h-full bg-brand-orange/20 dark:bg-brand-orange/40 rounded-full" style={{ width: '100%' }}></div>
            <div className="absolute top-1/2 right-0 w-1 h-1 bg-brand-orange -translate-y-1/2 rounded-full ring-4 ring-brand-orange/10 shadow-sm"></div>
        </div>
    </div>
);

const PermissionCheckbox = ({ label, checked = false, disabled = false }) => (
    <div className={`flex items-center space-x-4 mb-5 ${disabled ? 'opacity-50' : 'cursor-pointer group'}`}>
        <div className={`w-5 h-5 rounded-[6px] border-2 transition-all flex items-center justify-center ${checked ? 'bg-orange-50 dark:bg-brand-orange/20 border-brand-orange' : 'bg-white dark:bg-brand-darkBg border-gray-200 dark:border-brand-darkBorder group-hover:border-brand-orange/30'}`}>
            {checked && <svg className="w-3 h-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>}
        </div>
        <span className="text-[13px] font-bold text-gray-800 dark:text-brand-darkText">{label}</span>
    </div>
);

const GovernancePolicy = () => {
    return (
        <div className="max-w-5xl mx-auto text-left py-4 pb-24 relative">
            <header className="mb-12">
                <h1 className="text-[32px] font-black text-gray-900 dark:text-brand-darkText leading-tight mb-2">Governance Rules Policy</h1>
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500 mb-1">Configure the foundational rules that govern your family's operations and decision-making processes.</p>
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500">Changes here affect the entire family ecosystem</p>
            </header>

            <section className="mb-14">
                <h2 className="text-lg font-black text-gray-900 dark:text-brand-darkText mb-8 tracking-tight transition-colors">Constitution Rules</h2>
                <div className="space-y-4">
                    <RuleCard number={1} />
                    <RuleCard number={2} />
                    <RuleCard number={3} />
                </div>
            </section>

            <section className="mb-14">
                <h2 className="text-lg font-black text-gray-900 dark:text-brand-darkText mb-8 tracking-tight transition-colors">Authority Boundaries</h2>
                <div className="space-y-4">
                    <AuthoritySlider label="Financial Decision Authority" />
                    <AuthoritySlider label="Asset Management Authority" />
                </div>
            </section>

            <section className="mb-14">
                <h2 className="text-lg font-black text-gray-900 dark:text-brand-darkText mb-8 tracking-tight transition-colors">Role Permissions</h2>
                <div className="flex flex-col">
                    <PermissionCheckbox label="Allow family members to propose new governance rules" checked={true} />
                    <PermissionCheckbox label="Enable voting rights for all adult members" checked={true} />
                    <PermissionCheckbox label="Grant access to financial reports for designated roles" checked={false} disabled={true} />
                </div>
            </section>

            <div className="fixed bottom-10 right-10 lg:static flex justify-end mt-12">
                <button className="bg-brand-orange text-white px-8 py-3.5 rounded-xl font-black text-sm shadow-xl shadow-brand-orange/20 hover:bg-orange-600 transition-all active:scale-95">
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default GovernancePolicy;
