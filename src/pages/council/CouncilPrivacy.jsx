import React from 'react';

const PrivacyRow = ({ title, description, children, showAudit = true }) => (
    <div className="py-10 border-b border-gray-100 dark:border-brand-darkBorder last:border-0 transition-colors">
        <div className="flex justify-between items-start">
            <div className="text-left">
                <h3 className="text-base font-black text-gray-900 dark:text-brand-darkText mb-2">{title}</h3>
                <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 mb-5 leading-relaxed max-w-[640px]">{description}</p>
                {showAudit && (
                    <p className="text-[10px] font-black text-gray-300 dark:text-gray-600 italic opacity-80 uppercase tracking-wider">Audit Logged</p>
                )}
            </div>
            <div className="shrink-0 flex items-center justify-end min-w-[140px] h-[24px]">
                {children}
            </div>
        </div>
    </div>
);

const Toggle = ({ checked = false }) => (
    <label className="relative inline-flex items-center cursor-pointer group">
        <input type="checkbox" className="sr-only peer" defaultChecked={checked} />
        <div className="w-[56px] h-[32px] bg-gray-100 dark:bg-brand-darkBg rounded-full peer peer-checked:after:translate-x-[24px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:dark:bg-brand-darkText after:border-gray-200 dark:after:border-brand-darkBorder after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#FFE5DE] dark:peer-checked:bg-brand-orange/20 after:shadow-sm"></div>
    </label>
);

const CouncilPrivacy = () => {
    return (
        <div className="w-full lg:max-w-6xl mx-auto px-4 lg:px-0 text-left py-6">
            <header className="mb-14">
                <h1 className="text-[32px] font-black text-gray-900 dark:text-brand-darkText leading-none mb-3">Privacy Settings</h1>
                <p className="text-sm font-bold text-gray-400 dark:text-gray-500 transition-colors">Manage the privacy settings for your family's data.</p>
            </header>

            <div className="flex flex-col">
                <div className="mb-2 mt-4">
                    <h2 className="text-lg font-black text-gray-900 dark:text-brand-darkText transition-colors">Global Profile Visibility</h2>
                    <PrivacyRow
                        title="Global Profile Visibility"
                        description="Control whether your family's profiles are visible to the public or only to family members."
                    >
                        <Toggle checked={true} />
                    </PrivacyRow>
                </div>

                <div className="mb-2 mt-4">
                    <h2 className="text-lg font-black text-gray-900 dark:text-brand-darkText transition-colors">DNA Data Access</h2>
                    <PrivacyRow
                        title="DNA Data Access"
                        description="Manage access to your family's DNA data, including who can view and analyze it."
                    >
                        <Toggle checked={false} />
                    </PrivacyRow>
                </div>

                <div className="mb-2 mt-4">
                    <h2 className="text-lg font-black text-gray-900 dark:text-brand-darkText transition-colors">External Search Indexing</h2>
                    <PrivacyRow
                        title="External Search Indexing"
                        description="Control whether your family's information is indexed by external search engines."
                    >
                        <Toggle checked={false} />
                    </PrivacyRow>
                </div>

                <div className="mb-2 mt-4">
                    <h2 className="text-lg font-black text-gray-900 dark:text-brand-darkText transition-colors">Branch Leader Permissions</h2>
                    <PrivacyRow
                        title="Branch Leader Data Visibility"
                        description="Specify the level of data visibility for Branch Leaders within your family."
                    >
                        <span className="text-sm font-black text-gray-900 dark:text-brand-darkText tracking-tight transition-colors">Limited</span>
                    </PrivacyRow>
                </div>

                <div className="mb-2 mt-4">
                    <h2 className="text-lg font-black text-gray-900 dark:text-brand-darkText transition-colors">Member Permissions</h2>
                    <PrivacyRow
                        title="Member Data Visibility"
                        description="Specify the level of data visibility for regular members within your family."
                    >
                        <span className="text-sm font-black text-gray-900 dark:text-brand-darkText tracking-tight transition-colors">Basic</span>
                    </PrivacyRow>
                </div>
            </div>
        </div>
    );
};

export default CouncilPrivacy;
