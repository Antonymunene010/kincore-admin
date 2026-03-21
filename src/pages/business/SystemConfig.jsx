import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBusiness } from '../../context/BusinessContext';
import {
    Settings,
    Shield,
    Zap,
    PieChart,
    Bell,
    Lock,
    History,
    CheckCircle2,
    Info,
    Save,
    ChevronRight,
    Search,
    Sliders,
    Eye
} from 'lucide-react';

const ConfigSection = ({ title, icon: Icon, children }) => (
    <div className="bg-white dark:bg-brand-darkCard rounded-[2.5rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden text-left">
        <div className="p-8 pb-4 flex items-center space-x-3">
            <div className="p-2.5 bg-orange-50 dark:bg-brand-orange/10 rounded-xl text-brand-orange">
                <Icon size={20} />
            </div>
            <h3 className="text-lg font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight uppercase font-black">{title}</h3>
        </div>
        <div className="p-8 pt-4 space-y-8">
            {children}
        </div>
    </div>
);

const Toggle = ({ enabled, onToggle, label, description }) => (
    <div className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-brand-darkBg/50 rounded-2xl border border-gray-100 dark:border-brand-darkBorder">
        <div className="space-y-0.5">
            <p className="text-[13px] font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight">{label}</p>
            <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{description}</p>
        </div>
        <button
            onClick={onToggle}
            className={`w-12 h-6 rounded-full transition-all relative shadow-inner ${enabled ? 'bg-brand-orange' : 'bg-gray-200 dark:bg-brand-darkBorder'}`}
        >
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-md ${enabled ? 'left-7' : 'left-1'}`} />
        </button>
    </div>
);

const SystemConfig = () => {
    const navigate = useNavigate();
    const { systemConfig, updateSystemConfig } = useBusiness();
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            alert('System Configuration Updated Successfully!');
        }, 1200);
    };

    return (
        <div className="flex flex-col min-h-[calc(100vh-100px)] max-w-6xl mx-auto w-full pb-32">
            <header className="mb-12 text-left flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                    <div className="flex items-center space-x-2 mb-1">
                        <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 uppercase tracking-widest leading-none">Business Hub</h2>
                        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                        <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 uppercase tracking-widest leading-none">Settings</h2>
                    </div>
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight">System Configuration</h1>
                </div>
                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-orange transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search settings..."
                        className="pl-12 pr-6 py-3.5 bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-2xl text-xs font-bold text-gray-900 dark:text-brand-darkText shadow-sm focus:ring-2 focus:ring-brand-orange/20 w-full sm:w-64 transition-all"
                    />
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 1. Governance & Permissions */}
                <ConfigSection title="Governance & Access" icon={Shield}>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Governance Defaults</label>
                            <select
                                value={systemConfig.governanceDefaults}
                                onChange={(e) => updateSystemConfig({ governanceDefaults: e.target.value })}
                                className="w-full px-5 py-4 bg-gray-50 dark:bg-brand-darkBg border-none rounded-2xl text-sm font-black text-gray-900 dark:text-brand-darkText focus:ring-2 focus:ring-brand-orange/20 appearance-none"
                            >
                                <option value="standard">Standard Kincore Default</option>
                                <option value="strict">Strict Privacy Restricted</option>
                                <option value="open">Open Collaborative</option>
                            </select>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-brand-darkBg rounded-3xl flex items-center justify-between group cursor-pointer hover:bg-orange-50 dark:hover:bg-brand-orange/10 transition-all border border-transparent hover:border-brand-orange/20">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-white dark:bg-brand-darkCard rounded-xl text-brand-orange shadow-sm">
                                    <Sliders size={20} />
                                </div>
                                <div>
                                    <p className="text-[13px] font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight">Permissions Matrix</p>
                                    <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Configure role-based access levels</p>
                                </div>
                            </div>
                            <ChevronRight className="text-gray-300 group-hover:text-brand-orange transition-all" />
                        </div>
                    </div>
                </ConfigSection>

                {/* 2. Feature Management */}
                <ConfigSection title="Feature Toggles" icon={Zap}>
                    <div className="space-y-4">
                        <Toggle
                            label="Gift Exchange System"
                            description="Enable users to send gifts across nodes"
                            enabled={systemConfig.featureToggles.gifts}
                            onToggle={() => updateSystemConfig({ featureToggles: { ...systemConfig.featureToggles, gifts: !systemConfig.featureToggles.gifts } })}
                        />
                        <Toggle
                            label="Automated Migration"
                            description="Permit bulk node migration tools"
                            enabled={systemConfig.featureToggles.migration}
                            onToggle={() => updateSystemConfig({ featureToggles: { ...systemConfig.featureToggles, migration: !systemConfig.featureToggles.migration } })}
                        />
                        <Toggle
                            label="Public Organization Pages"
                            description="Allow organizations to publish landing pages"
                            enabled={systemConfig.featureToggles.publicPages}
                            onToggle={() => updateSystemConfig({ featureToggles: { ...systemConfig.featureToggles, publicPages: !systemConfig.featureToggles.publicPages } })}
                        />
                    </div>
                </ConfigSection>

                {/* 3. Storage & Infrastructure */}
                <ConfigSection title="Resource Quotas" icon={PieChart}>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Per Organization (GB)</label>
                            <input
                                type="number"
                                value={systemConfig.storageQuotas.perOrg}
                                onChange={(e) => updateSystemConfig({ storageQuotas: { ...systemConfig.storageQuotas, perOrg: e.target.value } })}
                                className="w-full px-5 py-4 bg-gray-50 dark:bg-brand-darkBg border-none rounded-2xl text-sm font-black text-gray-900 dark:text-brand-darkText focus:ring-2 focus:ring-brand-orange/20"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Per Active User (GB)</label>
                            <input
                                type="number"
                                value={systemConfig.storageQuotas.perUser}
                                onChange={(e) => updateSystemConfig({ storageQuotas: { ...systemConfig.storageQuotas, perUser: e.target.value } })}
                                className="w-full px-5 py-4 bg-gray-50 dark:bg-brand-darkBg border-none rounded-2xl text-sm font-black text-gray-900 dark:text-brand-darkText focus:ring-2 focus:ring-brand-orange/20"
                            />
                        </div>
                    </div>
                    <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/20 flex items-start space-x-3">
                        <Info size={16} className="text-blue-500 mt-0.5" />
                        <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase leading-relaxed">
                            Changes to quotas take effect on the next billing cycle for premium tiers.
                        </p>
                    </div>
                </ConfigSection>

                {/* 4. Communication */}
                <ConfigSection title="Notifications" icon={Bell}>
                    <div className="space-y-4">
                        <Toggle
                            label="Push Notifications"
                            description="Real-time alerts for system events"
                            enabled={systemConfig.notificationChannels.push}
                            onToggle={() => updateSystemConfig({ notificationChannels: { ...systemConfig.notificationChannels, push: !systemConfig.notificationChannels.push } })}
                        />
                        <Toggle
                            label="Email Digests"
                            description="Weekly activity summaries per organization"
                            enabled={systemConfig.notificationChannels.email}
                            onToggle={() => updateSystemConfig({ notificationChannels: { ...systemConfig.notificationChannels, email: !systemConfig.notificationChannels.email } })}
                        />
                    </div>
                </ConfigSection>

                {/* 5. Security & Compliance */}
                <ConfigSection title="Security Policies" icon={Lock}>
                    <div className="space-y-6">
                        <Toggle
                            label="Optional 2FA"
                            description="Do not mandate 2FA for basic tiers"
                            enabled={systemConfig.securityPolicies.twoFactorOptional}
                            onToggle={() => updateSystemConfig({ securityPolicies: { ...systemConfig.securityPolicies, twoFactorOptional: !systemConfig.securityPolicies.twoFactorOptional } })}
                        />
                        <div className="space-y-2">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Session Expiry (Seconds)</label>
                            <input
                                type="number"
                                value={systemConfig.securityPolicies.sessionExpiry}
                                onChange={(e) => updateSystemConfig({ securityPolicies: { ...systemConfig.securityPolicies, sessionExpiry: e.target.value } })}
                                className="w-full px-5 py-4 bg-gray-50 dark:bg-brand-darkBg border-none rounded-2xl text-sm font-black text-gray-900 dark:text-brand-darkText focus:ring-2 focus:ring-brand-orange/20"
                            />
                        </div>
                    </div>
                </ConfigSection>

                {/* 6. Maintenance */}
                <ConfigSection title="Audit & Logs" icon={History}>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Audit Log Retention (Days)</label>
                            <div className="flex items-center space-x-4">
                                <input
                                    type="range"
                                    min="30"
                                    max="365"
                                    step="30"
                                    value={systemConfig.auditLogRetention}
                                    onChange={(e) => updateSystemConfig({ auditLogRetention: e.target.value })}
                                    className="flex-1 accent-brand-orange h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer"
                                />
                                <span className="w-16 text-center text-sm font-black text-brand-orange bg-orange-50 dark:bg-brand-orange/10 py-2 rounded-xl border border-orange-100 dark:border-brand-orange/10">
                                    {systemConfig.auditLogRetention}
                                </span>
                            </div>
                        </div>
                        <button className="w-full p-4 bg-gray-50 dark:bg-brand-darkBg rounded-2xl border border-gray-100 dark:border-brand-darkBorder text-left hover:bg-gray-100 transition-all flex items-center justify-between group">
                            <div className="flex items-center space-x-3">
                                <Eye size={16} className="text-gray-400" />
                                <span className="text-xs font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight">View Master Audit Log</span>
                            </div>
                            <ChevronRight size={16} className="text-gray-300 group-hover:text-brand-orange transition-all" />
                        </button>
                    </div>
                </ConfigSection>
            </div>

            {/* Sticky Actions */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-brand-darkCard/80 backdrop-blur-xl border border-gray-100 dark:border-brand-darkBorder px-10 py-5 rounded-[2.5rem] shadow-2xl z-50 flex items-center space-x-8 min-w-[320px]">
                <div className="flex-1">
                    <p className="text-[10px] font-black text-gray-900 dark:text-brand-darkText uppercase tracking-widest">Unsaved Changes</p>
                    <p className="text-[9px] font-bold text-gray-400 uppercase leading-none">Modify and commit to apply globally</p>
                </div>
                <div className="flex items-center space-x-3">
                    <button
                        onClick={() => navigate('/business/dashboard')}
                        className="px-6 py-3 font-black text-[10px] text-gray-400 uppercase tracking-widest hover:text-gray-600 transition-colors"
                    >
                        Discard
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="px-8 py-3 bg-brand-orange text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-brand-orange/25 hover:bg-orange-600 active:scale-95 transition-all flex items-center space-x-2"
                    >
                        {isSaving ? (
                            <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <Save size={14} />
                        )}
                        <span>{isSaving ? 'Applying...' : 'Save Config'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SystemConfig;
