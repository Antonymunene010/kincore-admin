import React from 'react';

const SettingGroup = ({ title, children }) => (
    <div className="mb-10">
        <h3 className="text-sm font-extrabold text-gray-900 dark:text-brand-darkText mb-6 uppercase tracking-wider">{title}</h3>
        <div className="space-y-6">
            {children}
        </div>
    </div>
);

const SettingInput = ({ label, placeholder }) => (
    <div className="flex flex-col space-y-2 max-w-lg">
        <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{label}</label>
        <input
            type="text"
            placeholder={placeholder}
            className="bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-2xl py-4 px-6 text-sm font-medium text-gray-600 dark:text-brand-darkText placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-sm"
        />
    </div>
);

const Settings = () => {
    return (
        <div className="flex flex-col text-left">
            <header className="mb-10 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-brand-darkText leading-tight">Localization & Region Settings</h1>
            </header>

            <div className="flex flex-col md:flex-row md:space-x-24">
                <div className="flex-1">
                    <SettingGroup title="Language">
                        <SettingInput label="Default Language" placeholder="English (US)" />
                        <SettingInput label="Secondary Language" placeholder="English (UK)" />
                    </SettingGroup>

                    <SettingGroup title="Timezone">
                        <SettingInput label="Timezone" placeholder="(GMT+05:30) Mumbai, Kolkata, New Delhi" />
                    </SettingGroup>

                    <SettingGroup title="Regional Formatting">
                        <SettingInput label="Date Format" placeholder="YYYY-MM-DD" />
                        <SettingInput label="Time Format" placeholder="HH:MM" />
                        <SettingInput label="Number Format" placeholder="1,234,567.89" />
                        <SettingInput label="Currency" placeholder="USD ($)" />
                    </SettingGroup>

                    <div className="mt-12">
                        <h3 className="text-sm font-extrabold text-gray-900 dark:text-brand-darkText mb-6 uppercase tracking-widest">Preview</h3>
                        <div className="space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <div>Date: 2024-07-26</div>
                            <div>Time: 14:30</div>
                            <div>Number: 1,234,567.89</div>
                            <div>Currency: $1,234,567.89</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 sm:mt-16 flex justify-end">
                <button className="w-full sm:w-auto bg-brand-orange text-white px-12 py-3.5 rounded-2xl font-bold shadow-lg shadow-brand-orange/20 hover:bg-orange-600 transform transition-all active:scale-95">
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Settings;
