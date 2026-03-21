import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfigCard = ({ title, description, image, actionLabel = "Configure", onClick }) => (
    <div className="bg-white dark:bg-brand-darkCard rounded-[2.5rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 h-full transition-colors">
        <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="space-y-1">
                <h4 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">{title}</h4>
                <p className="text-sm font-semibold text-[#B28E86] dark:text-orange-900/60 leading-relaxed max-w-sm transition-colors">{description}</p>
            </div>
            <button
                onClick={onClick}
                className="bg-[#FFE5DE] dark:bg-brand-orange/20 text-brand-orange px-8 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:bg-[#FFD8D2] dark:hover:bg-brand-orange/30 transition-all active:scale-95 leading-none"
            >
                {actionLabel}
            </button>
        </div>
        <div className="w-full md:w-64 h-40 bg-[#FFF5F2]/50 dark:bg-brand-orange/5 rounded-[2rem] overflow-hidden flex items-center justify-center p-4 transition-colors">
            <img src={image} alt={title} className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-normal opacity-80" />
        </div>
    </div>
);

const Config = () => {
    const navigate = useNavigate();
    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl pb-20 px-4 sm:px-0">
            <header>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">System Configuration & Credentials</h1>
                <p className="text-sm text-brand-orange mt-2 font-bold leading-tight uppercase tracking-wide">
                    Manage system infrastructure, product governance, and security policies.
                </p>
            </header>

            {/* Product Configuration */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Product Configuration</h2>
                <ConfigCard
                    title="Product System Configuration"
                    description="Manage family governance, role permissions, feature toggles, and system-wide security policies."
                    actionLabel="View System Settings"
                    onClick={() => navigate('/business/config/system')}
                    image="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                />
            </section>

            {/* OAuth Provider Settings */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">OAuth Provider Settings</h2>
                <ConfigCard
                    title="OAuth Provider"
                    description="Configure OAuth providers for user authentication."
                    image="https://cdn-icons-png.flaticon.com/512/1000/1000958.png"
                />
            </section>

            {/* Email/SMS OTP Configurations */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Email/SMS OTP Configurations</h2>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                    <ConfigCard
                        title="Email OTP"
                        description="Configure email-based one-time passwords for user verification."
                        image="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                    />
                    <ConfigCard
                        title="SMS OTP"
                        description="Configure SMS-based one-time passwords for user verification."
                        image="https://cdn-icons-png.flaticon.com/512/5551/5551980.png"
                    />
                </div>
            </section>

            {/* Storage Credentials */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Storage Credentials</h2>
                <div className="grid grid-cols-1 gap-8">
                    <ConfigCard
                        title="S3 Storage"
                        description="Manage credentials for S3 storage."
                        image="https://cdn-icons-png.flaticon.com/512/1118/1118917.png"
                    />
                    <ConfigCard
                        title="Supabase Storage"
                        description="Manage credentials for Supabase storage."
                        image="https://cdn-icons-png.flaticon.com/512/12182/12182845.png"
                    />
                </div>
            </section>

            {/* Feature Flags */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Feature Flags</h2>
                <ConfigCard
                    title="Emergency Kill Switch"
                    description="Activate the emergency kill switch to disable all system functionalities."
                    actionLabel="Activate"
                    image="https://cdn-icons-png.flaticon.com/512/1039/1039328.png"
                />
            </section>
        </div>
    );
};

export default Config;