import React from 'react';

const RoleRow = ({ systemRole = "" }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
        <div>
            <label className="block text-xs font-black text-gray-900 dark:text-brand-darkText mb-3 ml-1">System Role</label>
            <div className="bg-[#F9FAFB] dark:bg-brand-darkBg border border-gray-100 dark:border-brand-darkBorder rounded-2xl p-4 h-[56px] flex items-center shadow-xs transition-colors">
                <input
                    type="text"
                    readOnly
                    value={systemRole}
                    className="w-full bg-transparent text-sm font-bold text-gray-400 dark:text-gray-500 outline-none"
                />
            </div>
        </div>
        <div>
            <label className="block text-xs font-black text-gray-900 dark:text-brand-darkText mb-3 ml-1">Custom Display Label</label>
            <div className="bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-2xl p-4 h-[56px] flex items-center shadow-xs transition-all focus-within:ring-4 focus-within:ring-orange-50 dark:focus-within:ring-brand-orange/5 focus-within:border-brand-orange/20 dark:focus-within:border-brand-orange/40 group">
                <input
                    type="text"
                    placeholder="Add label"
                    className="w-full bg-transparent text-sm font-bold text-gray-800 dark:text-brand-darkText outline-none placeholder:text-gray-200 dark:placeholder:text-gray-600"
                />
            </div>
        </div>
    </div>
);

const CustomLabels = () => {
    return (
        <div className="max-w-5xl mx-auto text-left py-4">
            <header className="mb-14">
                <h1 className="text-[32px] font-black text-gray-900 dark:text-brand-darkText leading-tight mb-3">Custom Role Labels</h1>
                <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 leading-relaxed max-w-2xl">
                    Customize the display names for roles within your family governance platform. This allows you to use terms that resonate with your family's unique structure and traditions.
                </p>
            </header>

            <div className="space-y-4">
                <RoleRow systemRole="" />
                <RoleRow systemRole="" />
                <RoleRow systemRole="" />
            </div>

            <div className="mt-14 max-w-2xl">
                <p className="text-[10px] font-bold text-brand-orange leading-relaxed opacity-90">
                    Note: Custom display labels do not affect the underlying functional logic of the roles. They only change how the roles are displayed in the user interface.
                </p>
            </div>
        </div>
    );
};

export default CustomLabels;
