import React from 'react';

const AssetCard = ({ image }) => (
    <div className="bg-white dark:bg-brand-darkCard rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden aspect-square flex items-center justify-center p-2 hover:shadow-md dark:hover:shadow-brand-orange/5 transition-all cursor-pointer">
        <img src={image} className="w-full h-full object-cover rounded-xl" alt="Asset" />
    </div>
);

const MediaRepository = () => {
    const assets = Array(12).fill("file:///C:/Users/uvdsg/.gemini/antigravity/brain/6332a07c-dddc-4f49-b611-f36a751f27be/family_portraits_grid_1770179154905.png");

    return (
        <div className="flex flex-col">
            <header className="mb-10 text-left">
                <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 mb-2 uppercase tracking-widest">Kinecore</h2>
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-brand-darkText mb-8">Media Repository Assets Grid</h1>

                {/* Storage Usage */}
                <div className="mb-10">
                    <h3 className="text-sm font-extrabold text-gray-900 dark:text-brand-darkText mb-4">Storage Usage</h3>
                    <div className="flex justify-between items-end mb-2">
                        <p className="text-sm font-bold text-gray-800 dark:text-brand-darkText">120 GB of 200 GB used</p>
                        <p className="text-xs font-extrabold text-gray-900 dark:text-brand-darkText opacity-60">60%</p>
                    </div>
                    <div className="w-full h-3 bg-gray-100 dark:bg-brand-darkBg rounded-full overflow-hidden transition-colors">
                        <div className="h-full bg-brand-dark dark:bg-brand-orange rounded-full" style={{ width: '60%' }}></div>
                    </div>
                </div>

                {/* Visibility Tabs & Toolbar */}
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
                    <div className="flex items-center">
                        <h3 className="text-sm font-extrabold text-gray-900 dark:text-brand-darkText mr-4 shrink-0">Visibility</h3>
                        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2 xl:pb-0">
                            <button className="bg-orange-100 dark:bg-brand-orange/20 text-brand-orange px-6 py-2 rounded-xl text-xs font-bold shadow-sm whitespace-nowrap">Public</button>
                            <button className="bg-orange-50/50 dark:bg-brand-orange/5 text-brand-orange/60 px-6 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors">Family</button>
                            <button className="bg-orange-50/50 dark:bg-brand-orange/5 text-brand-orange/60 px-6 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors">Branch-only</button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-start gap-4">
                        <div className="flex items-center space-x-6 sm:mr-6 text-gray-400 dark:text-gray-500">
                            <svg className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2-2z" /></svg>
                            <svg className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                            <svg className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                            <svg className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                        </div>
                        <button className="bg-brand-orange text-white px-8 py-2.5 rounded-xl font-bold shadow-lg shadow-brand-orange/20 hover:bg-orange-600 flex items-center space-x-2 text-sm">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
                            <span>Upload</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {assets.map((image, i) => (
                    <AssetCard key={i} image={image} />
                ))}
            </div>
        </div>
    );
};

export default MediaRepository;
