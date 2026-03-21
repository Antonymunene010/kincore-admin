import React from 'react';
import { Settings2, Save, Info } from 'lucide-react';

const SystemConfig = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
            <header>
                <div className="flex items-center space-x-2 mb-1">
                    <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 uppercase tracking-widest leading-none">Infrastructure</h2>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 uppercase tracking-widest leading-none">Settings</h2>
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight">Modify System Config</h1>
            </header>

            <div className="bg-white dark:bg-brand-darkCard rounded-[2.5rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden">
                <div className="p-8 pb-4 flex items-center space-x-3">
                    <div className="p-2.5 bg-orange-50 dark:bg-brand-orange/10 rounded-xl text-brand-orange">
                        <Settings2 size={20} />
                    </div>
                    <h3 className="text-lg font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight uppercase font-black">Global Parameters</h3>
                </div>

                <div className="p-8 pt-4 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Max Concurrent Connections</label>
                            <input type="number" defaultValue="5000" className="w-full px-5 py-4 bg-gray-50 dark:bg-brand-darkBg border-none rounded-2xl text-sm font-black text-gray-900 dark:text-brand-darkText focus:ring-2 focus:ring-brand-orange/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">API Timeout (ms)</label>
                            <input type="number" defaultValue="30000" className="w-full px-5 py-4 bg-gray-50 dark:bg-brand-darkBg border-none rounded-2xl text-sm font-black text-gray-900 dark:text-brand-darkText focus:ring-2 focus:ring-brand-orange/20" />
                        </div>
                    </div>

                    <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/20 flex items-start space-x-3">
                        <Info size={16} className="text-blue-500 mt-0.5" />
                        <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase leading-relaxed">
                            Changes here affect all load balancers globally. Deploy with caution.
                        </p>
                    </div>

                    <button className="w-full py-4 bg-brand-orange text-white rounded-2xl font-black text-[12px] uppercase tracking-widest shadow-lg shadow-brand-orange/25 hover:bg-orange-600 transition-all flex items-center justify-center space-x-2">
                        <Save size={18} />
                        <span>Update Configuration</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SystemConfig;
