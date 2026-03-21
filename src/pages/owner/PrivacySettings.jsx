import React from 'react';

const PrivacySection = ({ title, description, children, showAudit = true }) => (
    <div className="py-8 border-b border-gray-50 dark:border-brand-darkBorder last:border-0 transition-colors">
        <div className="flex justify-between items-start group">
            <div className="flex-1 pr-12">
                <h3 className="text-base font-black text-gray-900 dark:text-brand-darkText mb-1.5">{title}</h3>
                <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 mb-4 leading-relaxed max-w-2xl">{description}</p>
                {showAudit && (
                    <p className="text-[10px] font-black text-gray-300 dark:text-gray-600 italic">Audit Logged</p>
                )}
            </div>
            <div className="shrink-0 flex items-center justify-end min-w-[100px]">
                {children}
            </div>
        </div>
    </div>
);

const Toggle = ({ checked = false }) => (
    <label className="relative inline-flex items-center cursor-pointer group">
        <input type="checkbox" className="sr-only peer" defaultChecked={checked} />
        <div className="w-[52px] h-[30px] bg-gray-100 dark:bg-brand-darkBg rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:dark:bg-brand-darkText after:border-gray-200 dark:after:border-brand-darkBorder after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#FFE5DE] dark:peer-checked:bg-brand-orange/20 after:shadow-sm"></div>
    </label>
);

const PrivacySettings = () => {
    return (
        <div className="max-w-5xl mx-auto text-left py-4">
            <header className="mb-12">
                <h1 className="text-[32px] font-black text-gray-900 dark:text-brand-darkText leading-tight mb-2">Privacy Settings</h1>
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500">Manage the privacy settings for your family's data.</p>
            </header>

            <div className="space-y-4">
                <h2 className="text-lg font-black text-gray-900 dark:text-brand-darkText mb-6 transition-colors">Global Profile Visibility</h2>
                <PrivacySection
                    title="Global Profile Visibility"
                    description="Control whether your family's profiles are visible to the public or only to family members."
                >
                    <Toggle checked={false} />
                </PrivacySection>

                <h2 className="text-lg font-black text-gray-900 dark:text-brand-darkText mb-6 mt-12 transition-colors">DNA Data Access</h2>
                <PrivacySection
                    title="DNA Data Access"
                    description="Manage access to your family's DNA data, including who can view and analyze it."
                >
                    <Toggle checked={false} />
                </PrivacySection>

                <h2 className="text-lg font-black text-gray-900 dark:text-brand-darkText mb-6 mt-12 transition-colors">External Search Indexing</h2>
                <PrivacySection
                    title="External Search Indexing"
                    description="Control whether your family's information is indexed by external search engines."
                >
                    <Toggle checked={false} />
                </PrivacySection>

                <h2 className="text-lg font-black text-gray-900 dark:text-brand-darkText mb-6 mt-12 transition-colors">Branch Leader Permissions</h2>
                <PrivacySection
                    title="Branch Leader Data Visibility"
                    description="Specify the level of data visibility for Branch Leaders within your family."
                >
                    <span className="text-xs font-black text-gray-900 dark:text-brand-darkText transition-colors">Limited</span>
                </PrivacySection>

                <h2 className="text-lg font-black text-gray-900 dark:text-brand-darkText mb-6 mt-12 transition-colors">Member Permissions</h2>
                <PrivacySection
                    title="Member Data Visibility"
                    description="Specify the level of data visibility for regular members within your family."
                >
                    <span className="text-xs font-black text-gray-900 dark:text-brand-darkText transition-colors">Basic</span>
                </PrivacySection>
            </div>
        </div>
    );
};

export default PrivacySettings;
